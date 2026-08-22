"use client";

import { useId, useState } from "react";
import type { NextActionChoice } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";

export function NextActionCheck({ hasPreviousCard, hasSources, onReviewGuidance, onViewOfficial, onChooseAnother }: { hasPreviousCard: boolean; hasSources: boolean; onReviewGuidance?: () => void; onViewOfficial?: () => void; onChooseAnother?: () => void }) {
  const { t } = useLanguage();
  const [choice, setChoice] = useState<NextActionChoice | null>(null);
  const questionId = `next-action-${useId().replace(/:/g, "")}`;
  const recovery = [
    hasPreviousCard && onReviewGuidance ? { label: t.nextAction.reviewGuidance, onClick: onReviewGuidance } : null,
    hasSources && onViewOfficial ? { label: t.nextAction.viewOfficial, onClick: onViewOfficial } : null,
    onChooseAnother ? { label: t.nextAction.chooseAnother, onClick: onChooseAnother } : null,
  ].filter(Boolean).slice(0, 2) as Array<{ label: string; onClick: () => void }>;

  return <section className="mt-5 border-t border-line pt-4" aria-labelledby={questionId}>
    <p id={questionId} className="text-sm font-semibold text-ink-soft">{t.nextAction.question}</p>
    {!choice ? <div className="mt-2 flex flex-wrap gap-2">
      <button type="button" onClick={() => setChoice("yes")} className="button-secondary">{t.nextAction.yes}</button>
      <button type="button" onClick={() => setChoice("not-yet")} className="button-secondary">{t.nextAction.notYet}</button>
    </div> : choice === "yes" ? <p className="mt-2 text-sm font-semibold text-moss" role="status">{t.nextAction.yesStatus}</p> : <div className="mt-3" role="status">
      <p className="text-sm font-semibold text-ink">{t.nextAction.recoveryIntro}</p>
      <div className="mt-2 flex flex-wrap gap-2">{recovery.map((item) => <button key={item.label} type="button" onClick={item.onClick} className="button-secondary">{item.label}</button>)}</div>
    </div>}
  </section>;
}
