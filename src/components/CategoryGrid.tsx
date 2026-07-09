"use client";

import { CATEGORIES } from "@/lib/data/categories";
import { DEMO_PROMPTS } from "@/lib/data/prompts";
import type { TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { CategoryIcon, IconArrowRight } from "./icons";

export function CategoryGrid({
  onSelect,
}: {
  onSelect: (text: string, topicId: TopicId) => void;
}) {
  const { lang, t } = useLanguage();

  return (
    <section id="categories" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading num="02" ja="カテゴリー" en={t.categories.title} sub={t.categories.sub} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CATEGORIES.map((cat) => {
          const example = DEMO_PROMPTS.find((p) => p.topicId === cat.exampleTopic);
          const exampleText = example?.label[lang] ?? "";
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(exampleText, cat.exampleTopic)}
              className="group flex flex-col rounded-2xl border border-line bg-card p-5 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-civic hover:shadow-lg active:translate-y-0 active:scale-[0.98] active:shadow-sm"
            >
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${
                  cat.id === "emergency" ? "bg-danger-soft text-danger" : "bg-civic-soft text-civic"
                }`}
              >
                <CategoryIcon name={cat.icon} className="h-6 w-6" />
              </span>
              <span className="mt-3 block text-[16px] font-bold leading-snug">
                {cat.title[lang]}
              </span>
              {cat.title[lang] !== cat.titleJa && (
                <span className="block text-[13px] font-semibold text-ink-soft">{cat.titleJa}</span>
              )}
              <span className="mt-2 block flex-1 text-[13.5px] leading-relaxed text-ink-soft">
                {cat.description[lang]}
              </span>
              <span className="mt-4 flex items-start gap-1.5 border-t border-line pt-3 text-[13px] font-semibold text-civic">
                <IconArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
                <span>
                  {t.categories.tryLabel}: “{exampleText}”
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
