"use client";

import { CATEGORIES } from "@/lib/data/categories";
import { DEFAULT_CATEGORY_ORDER } from "@/lib/data/guided-flow";
import type { CategoryId } from "@/lib/types";
import { getMessages } from "@/i18n/messages";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { CategoryIcon } from "./icons";

/**
 * Categories emit only their stable ID. The guided flow owns all questions
 * and outcomes, so translated visible labels never act as routing keys.
 */
export function CategoryGrid({
  onSelect,
}: {
  onSelect: (categoryId: CategoryId) => void;
}) {
  const { lang, t } = useLanguage();

  return (
    <section id="categories" className="mx-auto max-w-5xl px-4 py-7 md:py-10">
      <SectionHeading title={t.categories.title} sub={t.categories.sub} />
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {DEFAULT_CATEGORY_ORDER.map((categoryId) => {
          const cat = CATEGORIES.find((item) => item.id === categoryId);
          if (!cat) return null;
          const emergency = cat.id === "emergency";
          return (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
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
                <span className={`block text-base font-bold leading-snug ${emergency ? "text-danger" : "text-ink"}`}>
                  {getMessages(lang).categories[cat.id].title}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
