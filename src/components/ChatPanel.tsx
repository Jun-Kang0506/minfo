"use client";

import { useState, type FormEvent } from "react";
import { DEMO_PROMPTS } from "@/lib/data/prompts";
import type { Answer, TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { AnswerCard } from "./AnswerCard";
import { SectionHeading } from "./SectionHeading";
import { IconArrowRight } from "./icons";

export interface ChatEntry {
  id: string;
  question: string;
  answer: Answer | null; // null = loading
}

function LoadingCard({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6 shadow-sm" role="status">
      <p className="text-[14px] font-semibold text-civic">{label}</p>
      <div className="mt-3 space-y-2.5" aria-hidden>
        <div className="h-3.5 w-11/12 animate-pulse rounded bg-civic-soft" />
        <div className="h-3.5 w-3/4 animate-pulse rounded bg-civic-soft" />
        <div className="h-3.5 w-1/2 animate-pulse rounded bg-civic-soft" />
      </div>
    </div>
  );
}

export function ChatPanel({
  entries,
  onAsk,
}: {
  entries: ChatEntry[];
  onAsk: (text: string, topicId?: TopicId) => void;
}) {
  const { lang, t } = useLanguage();
  const [input, setInput] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    onAsk(text);
    setInput("");
  };

  return (
    <section id="ask" className="bg-civic-deep">
      <div className="mx-auto max-w-4xl px-4 py-14 md:py-20">
        <SectionHeading num="01" ja="質問する" en={t.ask.title} sub={t.ask.sub} tone="dark" />

        {/* Input */}
        <form onSubmit={submit} className="flex gap-2.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.ask.placeholder}
            aria-label={t.ask.placeholder}
            className="min-w-0 flex-1 rounded-xl border border-transparent bg-card px-4 py-3.5 text-[16px] text-ink placeholder:text-ink-soft/70 shadow-sm"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-shu px-5 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-shu-deep"
          >
            {t.ask.send}
            <IconArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Example prompt chips */}
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-paper/60">
          {t.ask.examples}
        </p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {DEMO_PROMPTS.map((prompt, i) => (
            <button
              key={`${prompt.topicId}-${i}`}
              onClick={() => onAsk(prompt.label[lang], prompt.topicId)}
              className="rounded-full border border-paper/25 bg-paper/10 px-4 py-2.5 text-left text-[13.5px] font-medium leading-snug text-paper transition-colors hover:border-paper/60 hover:bg-paper/20"
            >
              {prompt.label[lang]}
            </button>
          ))}
        </div>

        {/* Answers — newest first, right under the input */}
        <div className="mt-8 space-y-6" aria-live="polite">
          {entries.length === 0 && (
            <p className="rounded-2xl border border-dashed border-paper/30 p-6 text-center text-[14px] text-paper/60">
              {t.ask.emptyHint}
            </p>
          )}
          {[...entries].reverse().map((entry) => (
            <div key={entry.id}>
              <p className="mb-2.5 flex items-start gap-2 px-1 text-[15px] font-semibold text-paper">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded bg-shu text-[11px] font-bold text-white">
                  Q
                </span>
                {entry.question}
              </p>
              {entry.answer ? (
                <AnswerCard answer={entry.answer} />
              ) : (
                <LoadingCard label={t.ask.thinking} />
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[12.5px] leading-relaxed text-paper/60">
          {t.answer.disclaimer}
        </p>
      </div>
    </section>
  );
}
