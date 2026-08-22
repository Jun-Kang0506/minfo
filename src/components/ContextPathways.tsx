"use client";

import { useLanguage } from "./LanguageProvider";
import type { ContextPathwaySection } from "@/lib/data/context-pathways";
import type { ContextPathwayTarget } from "@/lib/types";

export function ContextPathways({ sections, ariaPrefix, onSelect }: { sections: ContextPathwaySection[]; ariaPrefix: string; onSelect: (target: ContextPathwayTarget) => void }) {
  const { lang } = useLanguage();
  return <div className="grid gap-7">
    {sections.map((section) => <section key={section.id} aria-labelledby={`${ariaPrefix}-${section.id}`}>
      <h2 id={`${ariaPrefix}-${section.id}`} className="text-lg font-bold text-ink">{section.title[lang]}</h2>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {section.items.map((item) => <button key={item.id} onClick={() => onSelect(item.target)} className="pressable min-h-24 rounded-lg border border-line bg-card p-4 text-left hover:border-moss hover:bg-moss-soft/50">
          <span className="block text-base font-bold text-ink">{item.title[lang]}</span>
          <span className="mt-1 block text-sm leading-relaxed text-ink-soft">{item.description[lang]}</span>
        </button>)}
      </div>
    </section>)}
  </div>;
}
