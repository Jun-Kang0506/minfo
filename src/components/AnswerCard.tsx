"use client";

import type { Answer } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SafetyNotice } from "./SafetyNotice";
import { SourceCard } from "./SourceCard";
import { FeedbackButtons } from "./FeedbackButtons";
import { Mascot } from "./Mascot";
import { IconAlert } from "./icons";

export function AnswerCard({
  answer,
  withMascot = false,
}: {
  answer: Answer;
  withMascot?: boolean;
}) {
  const { t } = useLanguage();

  // Emergency answers never get a mascot — 119/110 guidance must dominate.
  const emergency = answer.safety?.level === "emergency";
  const lowConfidence = answer.confidence === "low" || answer.topicId === "fallback";
  const showMascot = withMascot && !emergency;

  return (
    <article
      // Emergency answers get the reserved red accent; everything else is moss.
      className={`animate-rise rounded-2xl border border-line border-t-4 bg-card p-5 shadow-md sm:p-6 ${
        emergency ? "border-t-danger" : "border-t-moss"
      }`}
    >
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
        <h3
          className={`text-xs font-bold uppercase tracking-[0.14em] ${
            emergency ? "text-danger" : "text-moss"
          }`}
        >
          {t.answer.answerLabel}
        </h3>
        {answer.engine === "claude" && (
          <p className="inline-flex items-center gap-1.5 rounded-full bg-civic-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-civic">
            <span className="h-1.5 w-1.5 rounded-full bg-civic" aria-hidden />
            {t.answer.aiBadge}
          </p>
        )}
      </div>

      {/* Direct answer — with the guide mascot on the newest card only */}
      <div className={showMascot ? "flex items-start gap-3.5" : undefined}>
        {showMascot && (
          <Mascot
            variant={lowConfidence ? "question" : "guide"}
            size={48}
            className="mt-0.5 shrink-0"
          />
        )}
        <p className="min-w-0 text-[16px] leading-relaxed text-ink">{answer.direct}</p>
      </div>

      {/* Safety notice — never buried, right under the answer */}
      {answer.safety && (
        <div className="mt-4">
          <SafetyNotice safety={answer.safety} />
        </div>
      )}

      {/* Recommended next steps */}
      {answer.steps.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-civic">
            {t.answer.steps}
          </h3>
          <ol className="mt-2.5 space-y-2.5">
            {answer.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-civic-soft text-[12px] font-bold text-civic">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}

      {answer.confidence === "low" && (
        <p className="mt-4 flex items-start gap-2 text-[13.5px] font-semibold text-caution">
          <IconAlert className="mt-0.5 h-4 w-4 shrink-0" />
          {t.answer.lowConfidence}
        </p>
      )}

      {/* Sources — the heart of MINFO */}
      {answer.sources.length > 0 && (
        <div className="mt-5 border-t border-line pt-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-moss">
            {t.answer.sources}
          </h3>
          <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
            {answer.sources.map((source) => (
              <SourceCard key={source.id} source={source} compact />
            ))}
          </div>
        </div>
      )}

      <div className="mt-5 border-t border-line pt-4">
        <FeedbackButtons />
      </div>
    </article>
  );
}
