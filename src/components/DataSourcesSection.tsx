"use client";

import { SOURCES } from "@/lib/data/sources";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { SourceCard } from "./SourceCard";

export function DataSourcesSection() {
  const { t } = useLanguage();

  return (
    <section id="sources" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading num="03" ja="公式情報にもとづく" en={t.sources.title} sub={t.sources.sub} />

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {SOURCES.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="flex flex-wrap items-center gap-2.5 text-[15px] font-bold">
          {t.sources.roadmapTitle}
          <span className="rounded-full bg-caution-soft px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-caution">
            {t.sources.roadmapBadge}
          </span>
        </h3>
        <div className="mt-3.5 grid gap-3.5 md:grid-cols-3">
          {t.sources.roadmap.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-dashed border-ink-soft/40 bg-paper p-5"
            >
              <h4 className="text-[14.5px] font-bold">{item.title}</h4>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
