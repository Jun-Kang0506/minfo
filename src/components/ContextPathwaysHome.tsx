"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { getMessages } from "@/i18n/messages";
export function ContextPathwaysHome() { const { lang } = useLanguage(); const copy = (getMessages(lang).pages as { contextPathwaysHome: { title: string; sub: string; newToJapan: string; students: string } }).contextPathwaysHome; return <section className="mx-auto max-w-5xl px-4 pb-8"><div className="rounded-lg border border-line bg-card p-4"><h2 className="text-base font-bold text-ink">{copy.title}</h2><p className="mt-1 text-sm text-ink-soft">{copy.sub}</p><div className="mt-3 flex flex-wrap gap-2"><Link className="button-secondary" href="/new-to-japan">{copy.newToJapan}</Link><Link className="button-secondary" href="/students">{copy.students}</Link></div></div></section>; }
