"use client";
import { useLanguage } from "./LanguageProvider";
import { ContextPathways } from "./ContextPathways";
import { CONTEXT_PATHWAYS, type ContextPathwayId } from "@/lib/data/context-pathways";
import type { ContextPathwayTarget } from "@/lib/types";
import { getMessages } from "@/i18n/messages";
export function ContextPathwayPage({ pathwayId, onSelect }: { pathwayId: ContextPathwayId; onSelect: (target: ContextPathwayTarget) => void }) { const { lang } = useLanguage(); const pathway = CONTEXT_PATHWAYS[pathwayId]; const copy = (getMessages(lang).pages as unknown as Record<string, { title: string; sub: string }>)[pathway.messageKey]; return <section className="mx-auto max-w-5xl px-4 py-7 md:py-10"><div className="max-w-2xl"><h1 className="text-3xl font-extrabold tracking-tight text-ink">{copy.title}</h1><p className="mt-3 text-base leading-relaxed text-ink-soft">{copy.sub}</p></div><div className="mt-8"><ContextPathways sections={pathway.sections} ariaPrefix={pathway.id} onSelect={onSelect} /></div></section>; }
