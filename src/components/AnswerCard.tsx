"use client";

import type { Answer } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SafetyNotice } from "./SafetyNotice";
import { SourceCard } from "./SourceCard";
import { FeedbackButtons } from "./FeedbackButtons";
import { IconAlert } from "./icons";

export function AnswerCard({ answer }: { answer: Answer }) {
  const { t } = useLanguage();

  return (
    <article className="rounded-2xl border border-line bg-card p-5 shadow-sm sm:p-6">
      {/* Direct answer */}
      <p className="text-[16px] leading-relaxed text-ink">{answer.direct}</p>

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
