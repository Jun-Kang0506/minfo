"use client";

import { useLanguage } from "./LanguageProvider";
import { IconCheck } from "./icons";

/**
 * Civic masthead — a short service statement, not a marketing hero.
 * Kept deliberately compact so the ask desk (the actual product) starts
 * inside the first viewport on desktop and right below the fold on mobile.
 */
export function Hero({ onAsk }: { onAsk: () => void }) {
  const { t } = useLanguage();

  const facts = [t.hero.trustSources, t.hero.trustLanguages, t.hero.trustPilot];

  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-16">
        <div>
          <p className="text-[13px] font-semibold text-moss">{t.hero.kicker}</p>
          <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            {t.hero.headline}
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-soft">{t.hero.sub}</p>
          <button
            onClick={onAsk}
            className="pressable mt-6 rounded-sm bg-moss px-6 py-3 text-[15px] font-bold text-white transition-colors hover:bg-moss-deep"
          >
            {t.hero.ctaAsk}
          </button>
        </div>

        {/* Service facts — a counter information board, not a decorative panel */}
        <ul className="hidden border-t-2 border-ink md:block">
          {facts.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 border-b border-line py-3.5 text-[14px] font-medium text-ink"
            >
              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" strokeWidth={2.5} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
