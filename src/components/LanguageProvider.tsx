"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { LanguageCode } from "@/lib/types";
import { UI_STRINGS, type UIStrings } from "@/lib/data/ui-strings";

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: UIStrings;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<LanguageCode>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: UI_STRINGS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
