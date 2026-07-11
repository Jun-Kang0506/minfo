"use client";

import { CATEGORIES } from "@/lib/data/categories";
import { DEMO_PROMPTS } from "@/lib/data/prompts";
import type { TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { IconArrowRight } from "./icons";

/**
 * Categories as a civic directory — numbered rows like a ward-office floor
 * guide, not feature cards. Every row is one large tap target that asks
 * the category's example question.
 */
export function CategoryGrid({
  onSelect,
}: {
  onSelect: (text: string, topicId: TopicId) => void;
}) {
  const { lang, t } = useLanguage();

  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading title={t.categories.title} sub={t.categories.sub} />
      <div className="grid border-t-2 border-ink sm:grid-cols-2 sm:gap-x-12">
        {CATEGORIES.map((cat, i) => {
          const example = DEMO_PROMPTS.find((p) => p.topicId === cat.exampleTopic);
          const exampleText = example?.label[lang] ?? "";
          const emergency = cat.id === "emergency";
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(exampleText, cat.exampleTopic)}
              className="group flex w-full items-start gap-4 border-b border-line py-4 text-left transition-colors hover:bg-card"
            >
              <span
                aria-hidden
                className={`w-7 shrink-0 pt-0.5 text-[13px] font-bold tabular-nums ${
                  emergency ? "text-danger" : "text-moss"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block text-[15.5px] font-bold leading-snug ${emergency ? "text-danger" : "text-ink"}`}>
                  {cat.title[lang]}
                </span>
                <span className="mt-0.5 block text-[13.5px] leading-relaxed text-ink-soft">
                  {cat.description[lang]}
                </span>
                <span
                  className={`mt-1.5 block text-[13px] font-semibold ${
                    emergency ? "text-danger" : "text-moss"
                  }`}
                >
                  {t.categories.tryLabel}: “{exampleText}”
                </span>
              </span>
              <IconArrowRight className="hover-arrow mt-1 h-4 w-4 shrink-0 text-ink-soft/60" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
