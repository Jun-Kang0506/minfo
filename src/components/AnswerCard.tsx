"use client";

import type { Answer } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SafetyNotice } from "./SafetyNotice";
import { SourceCard } from "./SourceCard";
import { FeedbackButtons } from "./FeedbackButtons";
import { IconAlert } from "./icons";

/**
 * An answer is a structured guidance document: label → direct answer →
 * safety → numbered steps → sources → feedback. Non-emergency answers
 * reveal group by group (70ms apart) so the structure reads top-down;
 * emergency answers appear in a single sober fade — never staggered,
 * never playful.
 */
export function AnswerCard({ answer }: { answer: Answer }) {
  const { t } = useLanguage();

  const emergency = answer.safety?.level === "emergency";
  // Group reveal classes; emergencies get everything at once.
  const g = (n: 1 | 2 | 3 | 4) => (emergency ? "" : `reveal-${n}`);

  return (
    <article
      className={`rounded-lg border border-line border-l-4 bg-card p-5 sm:p-6 ${
        emergency ? "animate-fade border-l-danger" : "border-l-moss"
      }`}
    >
      <div className={`flex flex-wrap items-center justify-between gap-2 ${g(1)}`}>
        <h3
          className={`text-xs font-bold uppercase tracking-[0.12em] ${
            emergency ? "text-danger" : "text-moss"
          }`}
        >
          {t.answer.answerLabel}
        </h3>
        {answer.engine === "claude" && (
          <p className="rounded-sm border border-line bg-paper px-2 py-0.5 text-[11px] font-semibold text-ink-soft">
            {t.answer.aiBadge}
          </p>
        )}
      </div>

      {/* Direct answer, then the safety notice — never buried */}
      <div className={g(2)}>
        <p className="mt-3 text-[16px] leading-relaxed text-ink">{answer.direct}</p>
        {answer.safety && (
          <div className="mt-4">
            <SafetyNotice safety={answer.safety} />
          </div>
        )}
      </div>

      {/* Recommended next steps */}
      <div className={g(3)}>
        {answer.steps.length > 0 && (
          <div className="mt-5">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-ink-soft">
              {t.answer.steps}
            </h3>
            <ol className="mt-1 divide-y divide-line">
              {answer.steps.map((step, i) => (
                <li key={i} className="flex gap-3 py-2.5 text-[15px] leading-relaxed text-ink">
                  <span className="w-5 shrink-0 text-right font-bold tabular-nums text-moss">
                    {i + 1}.
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
      </div>

      {/* Sources — the heart of MINFO, a reference list, not cards */}
      <div className={g(4)}>
        {answer.sources.length > 0 && (
          <div className="mt-5">
            <h3 className="border-b-2 border-ink pb-1.5 text-xs font-bold uppercase tracking-[0.12em] text-ink">
              {t.answer.sources}
            </h3>
            <div className="divide-y divide-line">
              {answer.sources.map((source) => (
                <SourceCard key={source.id} source={source} compact />
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 border-t border-line pt-4">
          <FeedbackButtons />
        </div>
      </div>
    </article>
  );
}
