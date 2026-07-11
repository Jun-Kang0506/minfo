"use client";

import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";

/**
 * Positioning as a comparison ledger, not feature cards: search engines /
 * general AI / MINFO in three rows, with the MINFO row emphasized. MINFO is
 * a local civic navigator, not a general-knowledge competitor.
 */
export function WhyMinfo() {
  const { t } = useLanguage();

  return (
    <section id="why-minfo" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading title={t.whyMinfo.title} sub={t.whyMinfo.sub} />

        <div className="max-w-3xl border-t-2 border-ink">
          {t.whyMinfo.cards.map((card, i) => {
            const isMinfo = i === t.whyMinfo.cards.length - 1;
            return (
              <div
                key={card.title}
                className={`flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:gap-6 ${
                  isMinfo ? "border-l-4 border-l-moss bg-moss-soft/50 px-4 sm:px-5" : ""
                }`}
              >
                <h3
                  className={`shrink-0 text-[15px] font-bold sm:w-44 ${
                    isMinfo ? "text-moss" : "text-ink"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`flex-1 text-[14px] leading-relaxed ${
                    isMinfo ? "font-medium text-ink" : "text-ink-soft"
                  }`}
                >
                  {card.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
