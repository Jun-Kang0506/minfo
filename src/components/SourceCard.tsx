"use client";

import type { Source } from "@/lib/types";
import { localizedOrganization, localizedSourceTitle } from "@/lib/data/sourceL10n";
import { useLanguage } from "./LanguageProvider";
import { IconCheck, IconExternal } from "./icons";

/**
 * A source is a reference-list row, not a marketing card. `compact` is the
 * short form used inside answers; the full form appears in the source
 * register and adds the relevance note.
 */
export function SourceCard({ source, compact = false }: { source: Source; compact?: boolean }) {
  const { lang } = useLanguage();
  // Open the official page in the user's language when one exists;
  // otherwise fall back to the canonical official URL.
  const href = source.localizedUrls?.[lang] ?? source.url;
  const title = localizedSourceTitle(source, lang);
  const organization = localizedOrganization(source.organization, lang);
  // Official Japanese name is visible signage only in the Japanese UI
  // (and only when the displayed title doesn't already contain it); other
  // languages keep it as tooltip metadata for traceability.
  const showJa =
    lang === "ja" &&
    !!source.titleJa &&
    !title.replace(/\s+/g, "").includes(source.titleJa.replace(/\s+/g, ""));
  const officialName = showJa ? undefined : source.titleJa;

  if (compact) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={officialName}
        className="group flex items-center justify-between gap-3 py-2.5"
      >
        <span className="min-w-0">
          <span className="flex items-center gap-1.5 text-[11.5px] font-bold text-moss">
            <IconCheck className="h-3 w-3 shrink-0" strokeWidth={3} />
            {organization}
          </span>
          <span className="mt-0.5 block text-[14px] font-bold leading-snug text-ink group-hover:underline">
            {title}
          </span>
          {showJa && <span className="mt-0.5 block text-[12px] text-ink-soft">{source.titleJa}</span>}
        </span>
        <IconExternal className="hover-arrow h-4 w-4 shrink-0 text-ink-soft" />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={officialName}
      className="group flex flex-col gap-1 py-4 sm:flex-row sm:gap-6"
    >
      <span className="flex items-start gap-1.5 text-[12px] font-bold text-moss sm:w-44 sm:shrink-0 sm:pt-0.5">
        <IconCheck className="mt-0.5 h-3 w-3 shrink-0" strokeWidth={3} />
        {organization}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-start justify-between gap-2">
          <span className="text-[15px] font-bold leading-snug text-ink group-hover:underline">
            {title}
          </span>
          <IconExternal className="hover-arrow mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
        </span>
        {showJa && <span className="mt-0.5 block text-[12.5px] text-ink-soft">{source.titleJa}</span>}
        <span className="mt-1 block text-[13px] leading-relaxed text-ink-soft">
          {source.note[lang]}
        </span>
      </span>
    </a>
  );
}
