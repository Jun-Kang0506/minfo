"use client";

import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { IconCheck, IconGlobe, IconChat } from "./icons";

/**
 * Short positioning section: MINFO is a local civic navigator, not a
 * general-knowledge competitor to search engines or AI chat.
 */
export function WhyMinfo() {
  const { t } = useLanguage();
  const icons = [IconGlobe, IconChat, IconCheck];

  return (
    <section id="why-minfo" className="border-y border-line bg-civic-soft/40">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading num="04" ja="MINFOの役割" en={t.whyMinfo.title} sub={t.whyMinfo.sub} />

        <div className="grid gap-4 md:grid-cols-3">
          {t.whyMinfo.cards.map((card, i) => {
            const Icon = icons[i];
            const isMinfo = i === t.whyMinfo.cards.length - 1;
            return (
              <div
                key={card.title}
                className={`rounded-2xl border p-5 sm:p-6 ${
                  isMinfo
                    ? "border-civic bg-civic text-paper shadow-md"
                    : "border-line bg-card"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                      isMinfo ? "bg-shu text-white" : "bg-civic-soft text-civic"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-[16px] font-bold leading-tight">{card.title}</h3>
                </div>
                <p
                  className={`mt-3 text-[14px] leading-relaxed ${
                    isMinfo ? "text-paper/90" : "text-ink-soft"
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
