"use client";

import { useState } from "react";
import type { FeedbackChoice } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { IconCheck } from "./icons";

export function FeedbackButtons() {
  const { t } = useLanguage();
  // Feedback lives in local state only for v1 — no tracking, no backend.
  const [given, setGiven] = useState<FeedbackChoice | null>(null);

  if (given) {
    return (
      <p className="flex items-center gap-2 text-[14px] font-semibold text-moss" role="status">
        <IconCheck className="h-4 w-4" />
        {t.feedback.thanks}
      </p>
    );
  }

  const options: { choice: FeedbackChoice; label: string }[] = [
    { choice: "helpful", label: t.feedback.helpful },
    { choice: "confusing", label: t.feedback.confusing },
    { choice: "wrong", label: t.feedback.wrong },
    { choice: "language", label: t.feedback.language },
  ];

  return (
    <div>
      <p className="text-[13px] font-semibold text-ink-soft">{t.feedback.question}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt.choice}
            onClick={() => setGiven(opt.choice)}
            className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-[13px] font-semibold text-ink transition-colors hover:border-civic hover:text-civic"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
