import { NextResponse } from "next/server";
import type { AskRequest, LanguageCode, TopicId } from "@/lib/types";
import { localAnswerEngine } from "@/lib/engine/localAnswerEngine";

// Engine selection happens here, server-side. To enable Claude later:
//   import { claudeAnswerEngine, isClaudeConfigured } from "@/lib/engine/claudeAnswerEngine";
//   const engine = isClaudeConfigured() ? claudeAnswerEngine : localAnswerEngine;
const engine = localAnswerEngine;

const LANGS: LanguageCode[] = ["en", "ja", "zh", "ko", "vi", "ne"];

export async function POST(request: Request) {
  let body: Partial<AskRequest>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const text = typeof body.text === "string" ? body.text.slice(0, 500) : "";
  const lang = LANGS.includes(body.lang as LanguageCode) ? (body.lang as LanguageCode) : "en";
  const topicId = typeof body.topicId === "string" ? (body.topicId as TopicId) : undefined;

  if (!text && !topicId) {
    return NextResponse.json({ error: "Question text is required" }, { status: 400 });
  }

  const answer = await engine.ask({ text, topicId, lang });
  return NextResponse.json(answer);
}
