"use client";

import { LANGUAGES } from "@/lib/data/languages";
import type { LanguageCode } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { IconGlobe } from "./icons";

export function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  return (
    <label className="flex items-center gap-1.5 rounded-full border border-line bg-card py-1.5 pl-2.5 pr-1 shadow-sm">
      <IconGlobe className="h-4 w-4 shrink-0 text-civic" />
      <span className="sr-only">Language / 言語</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as LanguageCode)}
        className="max-w-[9.5rem] cursor-pointer bg-transparent pr-1 text-sm font-semibold text-ink"
        aria-label="Language / 言語"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
