import type { Answer, AnswerEngine, AnswerTemplate, AskRequest } from "../types";
import { ANSWER_TEMPLATES, TEMPLATE_MAP, FALLBACK_CONTENT, FALLBACK_SOURCE_IDS } from "../data/answers";
import { getSources } from "../data/sources";
import { detectEmergency } from "./safety";

/**
 * v1 answer engine: deterministic, source-grounded, works fully offline.
 * - Chip / category clicks carry a topicId → direct template lookup.
 * - Free-typed questions are matched by keyword scoring.
 * - Unmatched questions get an honest fallback pointing to real
 *   consultation desks (never a guessed answer).
 */

function matchTemplate(text: string): AnswerTemplate | null {
  const lower = text.toLowerCase();
  let best: AnswerTemplate | null = null;
  let bestScore = 0;

  for (const template of ANSWER_TEMPLATES) {
    let score = 0;
    for (const keyword of template.keywords) {
      if (lower.includes(keyword)) {
        // Multi-word keywords are stronger signals than single words.
        score += keyword.includes(" ") ? 2 : 1;
      }
    }
    // Emergency topics win ties so safety guidance is never buried.
    if (score > bestScore || (score === bestScore && score > 0 && template.safetyLevel === "emergency")) {
      best = template;
      bestScore = score;
    }
  }
  return bestScore > 0 ? best : null;
}

function buildAnswer(template: AnswerTemplate | null, req: AskRequest): Answer {
  const { lang, text } = req;
  const emergencyOverride = detectEmergency(text, lang);

  if (!template) {
    const content = FALLBACK_CONTENT[lang];
    return {
      id: crypto.randomUUID(),
      topicId: "fallback",
      lang,
      question: text,
      direct: content.direct,
      steps: content.steps,
      safety:
        emergencyOverride ??
        (content.safety ? { level: "caution", text: content.safety } : undefined),
      sources: getSources(FALLBACK_SOURCE_IDS),
      confidence: "low",
    };
  }

  const content = template.content[lang];
  const safety = emergencyOverride
    ? emergencyOverride
    : content.safety && template.safetyLevel
      ? { level: template.safetyLevel, text: content.safety }
      : undefined;

  return {
    id: crypto.randomUUID(),
    topicId: template.id,
    lang,
    question: text,
    direct: content.direct,
    steps: content.steps,
    safety,
    sources: getSources(template.sourceIds),
    confidence: "high",
  };
}

export const localAnswerEngine: AnswerEngine = {
  async ask(req: AskRequest): Promise<Answer> {
    const template = req.topicId
      ? TEMPLATE_MAP[req.topicId] ?? null
      : matchTemplate(req.text);
    return buildAnswer(template, req);
  },
};
