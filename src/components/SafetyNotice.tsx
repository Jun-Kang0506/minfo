"use client";

import type { SafetyInfo } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { IconAlert, IconPhone } from "./icons";

export function SafetyNotice({ safety }: { safety: SafetyInfo }) {
  const { t } = useLanguage();
  const emergency = safety.level === "emergency";

  return (
    <div
      role="alert"
      className={`flex gap-3 rounded-sm border-l-4 p-4 ${
        emergency
          ? "border-danger bg-danger-soft"
          : "border-caution-line bg-caution-soft"
      }`}
    >
      {emergency ? (
        <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
      ) : (
        <IconAlert className="mt-0.5 h-5 w-5 shrink-0 text-caution" />
      )}
      <div>
        <p
          className={`text-xs font-bold uppercase tracking-[0.12em] ${
            emergency ? "text-danger" : "text-caution"
          }`}
        >
          {emergency ? t.answer.emergency : t.answer.caution}
        </p>
        <p className="mt-1 text-[15px] font-medium leading-relaxed text-ink">{safety.text}</p>
      </div>
    </div>
  );
}
