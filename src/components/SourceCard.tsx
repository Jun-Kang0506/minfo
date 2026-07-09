"use client";

import type { Source } from "@/lib/types";
import { localizedOrganization, localizedSourceTitle } from "@/lib/data/sourceL10n";
import { useLanguage } from "./LanguageProvider";
import { IconCheck, IconExternal } from "./icons";

export function SourceCard({ source, compact = false }: { source: Source; compact?: boolean }) {
  const { lang } = useLanguage();
  // Open the official page in the user's language when one exists;
  // otherwise fall back to the canonical official URL.
  const href = source.localizedUrls?.[lang] ?? source.url;
  const title = localizedSourceTitle(source, lang);
  const organization = localizedOrganization(source.organization, lang);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-line bg-card p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-moss hover:shadow-md active:translate-y-0 active:scale-[0.99]"
    >
      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-moss-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-moss">
        <IconCheck className="h-3 w-3" strokeWidth={3} />
        {organization}
      </span>
      <span className="mt-2.5 flex items-start justify-between gap-2">
        <span className="text-[14.5px] font-bold leading-snug text-ink group-hover:underline">
          {title}
        </span>
        <IconExternal className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      {/* Official Japanese name stays visible so the source identity is unambiguous,
          unless the displayed title already contains it (ignoring spacing) */}
      {source.titleJa &&
        !title.replace(/\s+/g, "").includes(source.titleJa.replace(/\s+/g, "")) && (
        <span className="mt-0.5 block text-[12px] text-ink-soft">{source.titleJa}</span>
      )}
      {!compact && (
        <span className="mt-2 block text-[13px] leading-relaxed text-ink-soft">
          {source.note[lang]}
        </span>
      )}
    </a>
  );
}
