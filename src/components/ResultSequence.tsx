"use client";

import { useEffect, useRef } from "react";
import type { Answer, FeedbackChoice } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SafetyNotice } from "./SafetyNotice";
import { SourceCard } from "./SourceCard";
import { FeedbackButtons } from "./FeedbackButtons";
import { IconAlert, IconArrowRight } from "./icons";
import { GUIDED_UI } from "@/lib/data/guided-flow";

export type ResultCardDescriptor = { kind: "summary" | "steps" | "references"; answer: Answer };

/** Pure presentation derivation. Cards retain the original answer rather than copying civic content. */
export function deriveResultCards(answer: Answer): ResultCardDescriptor[] {
  if (answer.safety?.level === "emergency") return [{ kind: "summary", answer }, { kind: "references", answer }];
  return answer.steps.length > 0
    ? [{ kind: "summary", answer }, { kind: "steps", answer }, { kind: "references", answer }]
    : [{ kind: "summary", answer }, { kind: "references", answer }];
}

export function ResultSequence({ answer, index, onBack, onNext, onStartOver, feedback, onFeedback }: { answer: Answer; index: number; onBack: () => void; onNext: () => void; onStartOver: () => void; feedback: FeedbackChoice | null; onFeedback: (choice: FeedbackChoice) => void }) {
  const { t, lang } = useLanguage();
  const cards = deriveResultCards(answer);
  const currentIndex = Math.min(Math.max(index, 0), cards.length - 1);
  const card = cards[currentIndex];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const emergency = answer.safety?.level === "emergency";

  useEffect(() => { headingRef.current?.focus({ preventScroll: true }); }, [currentIndex, answer.lang]);

  return (
    <div aria-live="polite">
      <p className={`mb-3 text-base font-bold tabular-nums ${emergency ? "text-danger" : "text-moss"}`}>
        {currentIndex + 1} / {cards.length} <span className="sr-only">{t.answer.resultCardLabel}</span>
      </p>
      <article className={`rounded-lg border border-line border-l-4 bg-card p-5 sm:p-6 ${emergency ? "animate-fade border-l-danger" : "border-l-moss"}`}>
        {card.kind === "summary" && <Summary answer={answer} headingRef={headingRef} emergency={emergency} />}
        {card.kind === "steps" && <Steps answer={answer} headingRef={headingRef} />}
        {card.kind === "references" && <References answer={answer} headingRef={headingRef} feedback={feedback} onFeedback={onFeedback} />}
      </article>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="button-secondary">{GUIDED_UI.back[lang]}</button>
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={onStartOver} className="button-secondary">{GUIDED_UI.startOver[lang]}</button>
          {currentIndex < cards.length - 1 && <button onClick={onNext} className="button-primary">{GUIDED_UI.next[lang]}<IconArrowRight className="h-4 w-4" /></button>}
        </div>
      </div>
    </div>
  );
}

function Summary({ answer, headingRef, emergency }: { answer: Answer; headingRef: React.RefObject<HTMLHeadingElement | null>; emergency: boolean }) {
  const { t } = useLanguage();
  return <><div className="flex flex-wrap items-center justify-between gap-2"><h2 ref={headingRef} tabIndex={-1} className={`text-sm font-bold uppercase tracking-[0.12em] ${emergency ? "text-danger" : "text-moss"}`}>{t.answer.nextStep}</h2>{answer.engine === "claude" && <p className="rounded-sm border border-line bg-paper px-2 py-0.5 text-xs font-semibold text-ink-soft">{t.answer.aiBadge}</p>}</div><p className="mt-3 text-lg leading-relaxed text-ink">{answer.direct}</p>{answer.safety && <div className="mt-4"><SafetyNotice safety={answer.safety} /></div>}{emergency && <div className="mt-5"><StepsList answer={answer} /></div>}{answer.confidence === "low" && <p className="mt-4 flex items-start gap-2 text-sm font-semibold text-caution"><IconAlert className="mt-0.5 h-4 w-4 shrink-0" />{t.answer.lowConfidence}</p>}</>;
}

function Steps({ answer, headingRef }: { answer: Answer; headingRef: React.RefObject<HTMLHeadingElement | null> }) { const { t } = useLanguage(); return <><h2 ref={headingRef} tabIndex={-1} className="text-sm font-bold uppercase tracking-[0.12em] text-ink-soft">{answer.topicId === "tax-estimate" ? t.answer.important : t.answer.whatToDo}</h2><StepsList answer={answer} /></>; }
function StepsList({ answer }: { answer: Answer }) { return <ol className="mt-2 divide-y divide-line">{answer.steps.map((step, i) => <li key={i} className="flex gap-3 py-2.5 text-base leading-relaxed text-ink"><span className="w-5 shrink-0 text-right font-bold tabular-nums text-moss">{i + 1}.</span>{step}</li>)}</ol>; }
function References({ answer, headingRef, feedback, onFeedback }: { answer: Answer; headingRef: React.RefObject<HTMLHeadingElement | null>; feedback: FeedbackChoice | null; onFeedback: (choice: FeedbackChoice) => void }) { const { t } = useLanguage(); return <>{answer.sources.length > 0 ? <><h2 ref={headingRef} tabIndex={-1} className="text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">{t.answer.officialInformation}</h2><div className="mt-3 divide-y divide-line">{answer.sources.map((source) => <SourceCard key={source.id} source={source} compact />)}</div></> : <h2 ref={headingRef} tabIndex={-1} className="sr-only">{t.answer.resultCardLabel}</h2>}<div className="mt-5 border-t border-line pt-4"><FeedbackButtons value={feedback} onChange={onFeedback} /></div></>; }
