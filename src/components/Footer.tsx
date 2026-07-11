"use client";

import { LANGUAGES } from "@/lib/data/languages";
import { useLanguage } from "./LanguageProvider";
import { IconPhone } from "./icons";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-moss text-lg font-bold text-white">
                み
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-tight">
                  MINFO｜{t.brand.subtitle}
                </span>
                <span className="block text-[12px] text-paper/70">{t.footer.tagline}</span>
              </span>
            </p>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-paper/70">
              {t.answer.disclaimer}
            </p>
            <p className="mt-3 text-[12px] text-paper/50">{t.footer.meta}</p>
            <p className="mt-1 text-[12px] text-paper/50">
              {LANGUAGES.map((l) => l.nativeLabel).join(", ")}
            </p>
          </div>

          <div className="rounded-lg border border-paper/20 p-5">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-paper/70">
              <IconPhone className="h-4 w-4" />
              {t.footer.emergencyTitle}
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
              <p>
                <span className="block text-3xl font-extrabold text-shu-soft">119</span>
                <span className="text-[12.5px] text-paper/70">{t.footer.fire}</span>
              </p>
              <p>
                <span className="block text-3xl font-extrabold text-shu-soft">110</span>
                <span className="text-[12.5px] text-paper/70">{t.footer.police}</span>
              </p>
            </div>
            <p className="mt-2.5 text-[12px] text-paper/60">{t.footer.freeNote}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
