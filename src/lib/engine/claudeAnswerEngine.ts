import Anthropic from "@anthropic-ai/sdk";
import type {
  Answer,
  AnswerEngine,
  AskRequest,
  LanguageCode,
  SafetyLevel,
  TopicId,
} from "../types";
import { ANSWER_TEMPLATES, FALLBACK_SOURCE_IDS } from "../data/answers";
import { SOURCES, SOURCE_MAP, getSources } from "../data/sources";
import { localAnswerEngine } from "./localAnswerEngine";
import { detectEmergency } from "./safety";

/**
 * Claude-powered answer engine.
 *
 * SERVER-SIDE ONLY. This module is imported exclusively from the API route
 * (src/app/api/ask/route.ts), so ANTHROPIC_API_KEY never reaches the browser.
 *
 * API flow for a free-typed question:
 *   1. Deterministic safety first: if the text matches local emergency
 *      keywords (119/110), skip the API entirely — localAnswerEngine
 *      answers instantly with the curated emergency guidance.
 *   2. Otherwise call the Messages API once, with:
 *      - a system prompt that pins Claude to MINFO's trusted source
 *        catalog and safety rules (no invented sources, no definitive
 *        legal/medical/visa/tax advice),
 *      - a structured-output JSON schema, so the response is guaranteed
 *        to match the Answer shape the UI already renders.
 *   3. Validate the result server-side anyway: source ids are resolved
 *      against the local catalog (unknown ids are dropped), and the local
 *      emergency detector can still override the safety notice.
 *   4. On ANY failure — missing/invalid key, rate limit, timeout, refusal,
 *      malformed output — fall back to localAnswerEngine so the app
 *      always answers.
 *
 * Chip and category clicks carry a topicId and never call the API: the
 * curated local answers are already deterministic and instant.
 */

const DEFAULT_MODEL = "claude-opus-4-8";

export function isClaudeConfigured(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

// Lazy singleton — never construct the client when no key is configured.
let client: Anthropic | null = null;
function getClient(): Anthropic {
  if (!client) {
    client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
      // Fail fast so the local fallback answers instead of hanging the demo.
      timeout: 25_000,
      maxRetries: 1,
    });
  }
  return client;
}

const TOPIC_IDS: TopicId[] = [...ANSWER_TEMPLATES.map((t) => t.id), "fallback"];
const SOURCE_IDS = SOURCES.map((s) => s.id);

const LANGUAGE_NAMES: Record<LanguageCode, string> = {
  en: "English",
  ja: "やさしい日本語 (Easy Japanese: short sentences, simple words, a space between phrases)",
  zh: "Simplified Chinese (中文)",
  ko: "Korean (한국어)",
  vi: "Vietnamese (Tiếng Việt)",
  ne: "Nepali (नेपाली)",
};

// Structured-output schema — constrains Claude's response to the exact
// shape buildAnswer() needs. Source ids and topic ids are enums, so the
// model cannot cite anything outside the local trusted catalog.
const ANSWER_SCHEMA = {
  type: "object",
  additionalProperties: false,
  required: ["topicId", "direct", "steps", "safety", "sourceIds", "confidence"],
  properties: {
    topicId: { type: "string", enum: TOPIC_IDS },
    direct: {
      type: "string",
      description: "1-3 plain-language sentences that directly answer the question.",
    },
    steps: {
      type: "array",
      items: { type: "string" },
      description: "2-4 concrete recommended next steps.",
    },
    safety: {
      anyOf: [
        { type: "null" },
        {
          type: "object",
          additionalProperties: false,
          required: ["level", "text"],
          properties: {
            level: { type: "string", enum: ["emergency", "caution"] },
            text: { type: "string" },
          },
        },
      ],
      description: "Safety notice, or null when the topic needs none.",
    },
    sourceIds: {
      type: "array",
      items: { type: "string", enum: SOURCE_IDS },
      description: "2-3 catalog source ids most relevant to this answer.",
    },
    confidence: { type: "string", enum: ["high", "low"] },
  },
} as const;

interface ClaudePayload {
  topicId: TopicId;
  direct: string;
  steps: string[];
  safety: { level: SafetyLevel; text: string } | null;
  sourceIds: string[];
  confidence: "high" | "low";
}

const SOURCE_CATALOG = SOURCES.map(
  (s) => `- ${s.id}: ${s.title} (${s.organization}) — ${s.note}`
).join("\n");

// Keep this prompt static (no per-request interpolation) so it stays
// prompt-cache-friendly; the question and language go in the user turn.
const SYSTEM_PROMPT = `You are MINFO (みんなのインフォ), a multilingual civic life-information navigator for foreign-origin residents of Shinjuku / Okubo, Tokyo. You explain Japanese daily-life systems simply and always point to official sources. You are NOT a lawyer, doctor, immigration specialist, tax advisor, or government officer, and you never pretend to be one.

## Trusted source catalog
You may ONLY cite sources from this catalog, by id. Never invent, alter, or cite anything outside it:
${SOURCE_CATALOG}

## Topics
Classify the question into the closest topic id (use "fallback" when nothing fits):
${TOPIC_IDS.join(", ")}

## Safety rules (mandatory)
- Medical emergency signals: tell the user to call 119 now (free, 24h, telephone interpretation). Set safety.level to "emergency".
- Police / danger signals: tell the user to call 110 now. Set safety.level to "emergency".
- Legal, visa/immigration, tax, pension, medical, or housing-dispute questions: explain only in general terms, give NO definitive professional advice, and tell the user to confirm with the official office or a qualified professional. Set safety.level to "caution".
- If you cannot answer reliably from general knowledge of these public systems, set confidence to "low", say that official confirmation is needed, and point to consultation desks (tabunka-plaza, fresc).

## Style
- Plain language, short sentences, no jargon, no walls of text.
- "direct": 1-3 sentences that answer the question.
- "steps": 2-4 concrete next steps a resident can actually take.
- Pick the 2-3 most relevant sourceIds.
- Write "direct", "steps", and "safety.text" entirely in the requested language.`;

async function askClaude(req: AskRequest): Promise<Answer> {
  const response = await getClient().messages.create({
    model: process.env.ANTHROPIC_MODEL || DEFAULT_MODEL,
    max_tokens: 2048,
    thinking: { type: "adaptive" },
    // "low" keeps demo latency snappy; raise to "medium"/"high" for
    // deeper answers at the cost of response time.
    output_config: {
      effort: "low",
      format: { type: "json_schema", schema: ANSWER_SCHEMA },
    },
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `Requested language: ${LANGUAGE_NAMES[req.lang]}\nResident's question: ${req.text}`,
      },
    ],
  });

  // Safety classifiers can decline a request (HTTP 200 + stop_reason
  // "refusal") — treat it like any other failure and use the local engine.
  if (response.stop_reason === "refusal") {
    throw new Error("Claude declined the request (stop_reason: refusal)");
  }

  const textBlock = response.content.find(
    (block): block is Anthropic.TextBlock => block.type === "text"
  );
  if (!textBlock) {
    throw new Error(`No text block in response (stop_reason: ${response.stop_reason})`);
  }

  const payload = JSON.parse(textBlock.text) as ClaudePayload;

  // Belt-and-suspenders validation: the schema already constrains the
  // output, but source ids are re-resolved against the local catalog so
  // the UI can never render an invented source.
  const topicId = TOPIC_IDS.includes(payload.topicId) ? payload.topicId : "fallback";
  let sources = getSources(payload.sourceIds.filter((id) => id in SOURCE_MAP));
  let confidence: Answer["confidence"] = payload.confidence === "low" ? "low" : "high";
  if (sources.length === 0) {
    sources = getSources(FALLBACK_SOURCE_IDS);
    confidence = "low";
  }

  const steps = payload.steps.filter((s) => typeof s === "string" && s.trim()).slice(0, 5);

  // Local emergency detection always wins over the model's own judgment,
  // so 119/110 guidance stays deterministic.
  const emergencyOverride = detectEmergency(req.text, req.lang);
  const safety =
    emergencyOverride ??
    (payload.safety ? { level: payload.safety.level, text: payload.safety.text } : undefined);

  return {
    id: crypto.randomUUID(),
    topicId,
    lang: req.lang,
    question: req.text,
    direct: payload.direct,
    steps,
    safety,
    sources,
    confidence,
    engine: "claude",
  };
}

export const claudeAnswerEngine: AnswerEngine = {
  async ask(req: AskRequest): Promise<Answer> {
    // Chip/category clicks (topicId set) use the curated local answers —
    // deterministic and instant. Emergency-keyword questions also stay
    // local so 119/110 guidance never waits on a network call.
    if (req.topicId || !isClaudeConfigured() || detectEmergency(req.text, req.lang)) {
      return localAnswerEngine.ask(req);
    }
    try {
      return await askClaude(req);
    } catch (error) {
      // Missing/invalid key, 429, 5xx, timeout, refusal, bad JSON — all
      // land here. The demo keeps working on local data either way.
      console.error("[claudeAnswerEngine] Falling back to local engine:", error);
      return localAnswerEngine.ask(req);
    }
  },
};
