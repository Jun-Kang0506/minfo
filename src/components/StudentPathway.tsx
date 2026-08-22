"use client";

import { useLanguage } from "./LanguageProvider";
import { ContextPathways } from "./ContextPathways";
import type { ContextPathwayTarget } from "@/lib/types";
import { getMessages } from "@/i18n/messages";
import { STUDENT_PATHWAY_SECTIONS } from "@/lib/data/context-pathways";

export function StudentPathway({ onSelect }: { onSelect: (target: ContextPathwayTarget) => void }) {
  const { lang } = useLanguage();
  const pages = (getMessages(lang).pages as { students: { title: string; sub: string } }).students;
  return <section className="mx-auto max-w-5xl px-4 py-7 md:py-10">
    <div className="max-w-2xl">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">{pages.title}</h1>
      <p className="mt-3 text-base leading-relaxed text-ink-soft">{pages.sub}</p>
    </div>
    <div className="mt-8"><ContextPathways sections={STUDENT_PATHWAY_SECTIONS} ariaPrefix="student" onSelect={onSelect} /></div>
  </section>;
}
