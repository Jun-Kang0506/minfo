"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { DEMO_PROMPTS } from "@/lib/data/prompts";
import type { Answer, TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { AnswerCard } from "./AnswerCard";
import { Mascot, type MascotVariant } from "./Mascot";
import { IconArrowRight } from "./icons";

export interface ChatEntry {
  id: string;
  question: string;
  answer: Answer | null; // null = loading
}

/**
 * The desk mascot follows product state: idle → default, waiting for an
 * answer → thinking, answered → guide (or question on low confidence).
 * Returns null while the newest answer is an emergency — 119/110 guidance
 * must never share the desk with the character.
 */
function deskMascot(entries: ChatEntry[]): MascotVariant | null {
  const newest = entries.length > 0 ? entries[entries.length - 1] : null;
  if (!newest) return "default";
  if (!newest.answer) return "thinking";
  if (newest.answer.safety?.level === "emergency") return null;
  if (newest.answer.confidence === "low" || newest.answer.topicId === "fallback") {
    return "question";
  }
  return "guide";
}

function LoadingSheet({ label }: { label: string }) {
  return (
    <div
      className="animate-rise rounded-lg border border-line border-l-4 border-l-moss bg-card p-5 sm:p-6"
      role="status"
    >
      <p className="flex items-center gap-2 text-[14px] font-semibold text-moss">
        {label}
        <span className="flex gap-1" aria-hidden>
          <span className="loading-dot h-1.5 w-1.5 rounded-full bg-moss" />
          <span className="loading-dot h-1.5 w-1.5 rounded-full bg-moss" />
          <span className="loading-dot h-1.5 w-1.5 rounded-full bg-moss" />
        </span>
      </p>
      <div className="mt-4 space-y-2.5" aria-hidden>
        <div className="h-3.5 w-11/12 animate-pulse rounded-sm bg-paper" />
        <div className="h-3.5 w-3/4 animate-pulse rounded-sm bg-paper" />
        <div className="h-3.5 w-1/2 animate-pulse rounded-sm bg-paper" />
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

  // Newest entry = last added; rendered first (list is newest-first).
  const newest = entries.length > 0 ? entries[entries.length - 1] : null;
  const newestRef = useRef<HTMLDivElement | null>(null);
  const lastScrolledId = useRef<string | null>(null);
  const mascot = deskMascot(entries);

  // Scroll the newest question + answer area into view once per new
  // question (typed, chip, or category click) — never on initial load,
  // and never re-scroll when the answer replaces the loading card.
  useEffect(() => {
    if (!newest || newest.id === lastScrolledId.current) return;
    lastScrolledId.current = newest.id;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    newestRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [newest]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    onAsk(text);
    setInput("");
  };

  return (
    <section id="ask" className="on-desk bg-desk">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        {/* Desk identity — the mascot here is state-driven, not decoration */}
        <div className="flex items-center gap-4 border-b border-paper/20 pb-5">
          {mascot && <Mascot variant={mascot} size={56} />}
          <div>
            <h2 className="text-xl font-bold tracking-tight text-paper sm:text-2xl">
              {t.ask.title}
            </h2>
            <p className="mt-0.5 text-[13.5px] text-paper/70">{t.ask.sub}</p>
          </div>
        </div>

        {/* Input */}
        <form onSubmit={submit} className="mt-6 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.ask.placeholder}
            aria-label={t.ask.placeholder}
            className="min-w-0 flex-1 rounded-sm bg-card px-4 py-3.5 text-[16px] text-ink placeholder:text-ink-soft/70"
          />
          <button
            type="submit"
            className="pressable flex shrink-0 items-center gap-2 rounded-sm bg-paper px-5 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-card"
          >
            {t.ask.send}
            <IconArrowRight className="h-4 w-4" />
          </button>
        </form>

        {/* Question index — a directory of common questions, not a pill cloud */}
        <p className="mt-7 text-[13px] font-bold text-paper/70">{t.ask.examples}</p>
        <div className="mt-1 grid sm:grid-cols-2 sm:gap-x-10">
          {DEMO_PROMPTS.map((prompt, i) => (
            <button
              key={`${prompt.topicId}-${i}`}
              onClick={() => onAsk(prompt.label[lang], prompt.topicId)}
              // Phones get a shorter list so the answer area stays close to
              // the input; every topic remains reachable via the categories.
              className={`${
                i >= 6 ? "hidden sm:flex" : "flex"
              } group w-full items-baseline gap-3 border-b border-paper/15 py-3 text-left transition-colors hover:border-paper/40`}
            >
              <span aria-hidden className="text-[11px] font-bold tabular-nums text-paper/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-[13.5px] font-medium leading-snug text-paper/90 transition-colors group-hover:text-white">
                {prompt.label[lang]}
              </span>
              <IconArrowRight className="hover-arrow h-3.5 w-3.5 shrink-0 self-center text-paper/40" />
            </button>
          ))}
        </div>

        {/* Answers — newest first, right under the index */}
        <div className="mt-8 space-y-6" aria-live="polite">
          {entries.length === 0 && (
            <p className="rounded-sm border border-dashed border-paper/25 p-4 text-center text-[13.5px] text-paper/60">
              {t.ask.emptyHint}
            </p>
          )}
          {[...entries].reverse().map((entry) => (
            <div
              key={entry.id}
              ref={entry.id === newest?.id ? newestRef : undefined}
              // Clear the sticky header (taller on mobile) when auto-scrolled to.
              className="scroll-mt-[10.5rem] lg:scroll-mt-[6.5rem]"
            >
              <p className="mb-2.5 flex items-start gap-2 px-1 text-[15px] font-semibold text-paper">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-sm bg-paper/20 text-[11px] font-bold text-paper">
                  Q
                </span>
                {entry.question}
              </p>
              {entry.answer ? (
                <AnswerCard answer={entry.answer} />
              ) : (
                <LoadingSheet label={t.ask.thinking} />
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
