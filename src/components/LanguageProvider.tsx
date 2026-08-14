"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { LanguageCode } from "@/lib/types";
import { UI_STRINGS, type UIStrings } from "@/lib/data/ui-strings";
import { LANGUAGES } from "@/lib/data/languages";

interface LanguageContextValue {
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
  t: UIStrings;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_COOKIE = "minfo-lang";
const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function isSupportedLanguage(value: string): value is LanguageCode {
  return LANGUAGES.some((language) => language.code === value);
}

export function LanguageProvider({
  children,
  initialLang = "en",
}: {
  children: ReactNode;
  initialLang?: LanguageCode;
}) {
  const [lang, setLangState] = useState<LanguageCode>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (nextLang: LanguageCode) => {
    if (!isSupportedLanguage(nextLang)) return;

    setLangState(nextLang);
    document.documentElement.lang = nextLang;
    document.cookie = `${LANGUAGE_COOKIE}=${nextLang}; Path=/; Max-Age=${LANGUAGE_COOKIE_MAX_AGE}; SameSite=Lax`;
  };

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
