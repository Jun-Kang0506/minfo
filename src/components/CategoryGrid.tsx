"use client";

import Image from "next/image";
import Link from "next/link";
import minfoLeafDefault from "../../public/mascot/minfo-leaf-default.png";
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
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <SectionHeading title={t.categories.title} sub={t.categories.sub} />
        </div>
        <Image
          src={minfoLeafDefault}
          alt=""
          width={1254}
          height={1254}
          className="h-auto w-20 shrink-0 select-none sm:w-24 md:w-28"
        />
      </div>
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
              <span className="w-full min-w-0">
                <span className={`block break-words text-lg font-bold leading-snug ${emergency ? "text-danger" : "text-ink"}`}>
                  {getMessages(lang).categories[cat.id].title}
                </span>
              </span>
            </button>
          );
        })}
      </div>
      <section className="mt-8 rounded-lg border border-line bg-card p-5">
        <h2 className="text-lg font-bold text-ink">{getMessages(lang).pages.students.homeTitle}</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">{getMessages(lang).pages.students.homeSub}</p>
        <Link href="/students" className="button-secondary mt-4">{getMessages(lang).pages.students.homeCta}</Link>
      </section>
    </section>
  );
}
