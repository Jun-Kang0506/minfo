import type { AnswerEngine, AskRequest, Answer } from "../types";
import { localAnswerEngine } from "./localAnswerEngine";

/**
 * Claude API answer engine — placeholder for Phase 2.
 *
 * SERVER-SIDE ONLY. This module must only ever be imported from
 * API routes (src/app/api/ask/route.ts), never from client components,
 * so the ANTHROPIC_API_KEY is never exposed to the browser.
 *
 * Integration plan:
 * 1. `npm install @anthropic-ai/sdk`
 * 2. Read ANTHROPIC_API_KEY / ANTHROPIC_MODEL from process.env
 *    (see .env.local.example).
 * 3. Build a system prompt that:
 *    - restricts answers to MINFO's trusted source list (src/lib/data/sources.ts),
 *    - requires the structured Answer shape (direct / steps / safety / sourceIds),
 *    - enforces the safety rules (119/110, no legal/medical/visa advice,
 *      recommend official confirmation when confidence is low),
 *    - answers in the requested language, including やさしい日本語.
 * 4. Ask for a JSON response matching the Answer type, validate it,
 *    and resolve sourceIds through getSources().
 * 5. On any API error, fall back to localAnswerEngine so the app
 *    always works — even without a key.
 */
export const claudeAnswerEngine: AnswerEngine = {
  async ask(req: AskRequest): Promise<Answer> {
    // Not implemented yet — the MVP must work without an API key.
    // When ANTHROPIC_API_KEY is set, replace this delegation with a
    // real Claude API call as described above.
    return localAnswerEngine.ask(req);
  },
};

export function isClaudeConfigured(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}
