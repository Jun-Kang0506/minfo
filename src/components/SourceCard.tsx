import type { Source } from "@/lib/types";
import { IconCheck, IconExternal } from "./icons";

export function SourceCard({ source, compact = false }: { source: Source; compact?: boolean }) {
  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-line bg-card p-4 shadow-sm transition-colors hover:border-moss"
    >
      <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-moss">
        <span className="grid h-4 w-4 place-items-center rounded-full bg-moss-soft">
          <IconCheck className="h-2.5 w-2.5" strokeWidth={3} />
        </span>
        {source.organization}
      </span>
      <span className="mt-2 flex items-start justify-between gap-2">
        <span className="text-[14.5px] font-bold leading-snug text-ink group-hover:underline">
          {source.title}
        </span>
        <IconExternal className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
      </span>
      {source.titleJa && (
        <span className="mt-0.5 block text-[12px] text-ink-soft">{source.titleJa}</span>
      )}
      {!compact && (
        <span className="mt-2 block text-[13px] leading-relaxed text-ink-soft">{source.note}</span>
      )}
    </a>
  );
}
