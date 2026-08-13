"use client";

import { CATEGORIES } from "@/lib/data/categories";
import { DEMO_PROMPTS } from "@/lib/data/prompts";
import type { TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { CategoryIcon } from "./icons";

/**
 * Categories are a compact task chooser. Every card is one large tap target
 * that asks the category's example question in the existing answer desk.
 */
export function CategoryGrid({
  onSelect,
}: {
  onSelect: (text: string, topicId: TopicId) => void;
}) {
  const { lang, t } = useLanguage();

  return (
    <section id="categories" className="mx-auto max-w-5xl px-4 py-7 md:py-10">
      <SectionHeading title={t.categories.title} sub={t.categories.sub} />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {CATEGORIES.map((cat) => {
          const example = DEMO_PROMPTS.find((p) => p.topicId === cat.exampleTopic);
          const exampleText = example?.label[lang] ?? "";
          const emergency = cat.id === "emergency";
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(exampleText, cat.exampleTopic)}
              className={`pressable group flex min-h-24 w-full flex-col items-start justify-between rounded-lg border p-4 text-left transition-colors focus-visible:z-10 ${
                emergency
                  ? "border-danger bg-danger-soft hover:bg-[#f7d8cf]"
                  : "border-line bg-card hover:border-moss hover:bg-moss-soft/50"
              }`}
            >
              <CategoryIcon
                name={cat.icon}
                className={`h-6 w-6 shrink-0 ${emergency ? "text-danger" : "text-moss"}`}
                strokeWidth={2}
              />
              <span className="min-w-0">
                <span className={`block text-[15px] font-bold leading-snug ${emergency ? "text-danger" : "text-ink"}`}>
                  {cat.title[lang]}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
