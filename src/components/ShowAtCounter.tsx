"use client";

import { useId, useRef, useState } from "react";
import type { CounterPhraseId } from "@/lib/data/counter-phrases";
import { COUNTER_PHRASES, getCounterPhraseMeaning } from "@/lib/data/counter-phrases";
import { useLanguage } from "./LanguageProvider";

export function ShowAtCounter({ phraseId }: { phraseId: CounterPhraseId }) {
  const { lang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const instanceId = useId().replace(/:/g, "");
  const panelId = `counter-phrase-${instanceId}`;
  const close = () => { setOpen(false); requestAnimationFrame(() => triggerRef.current?.focus()); };
  const reveal = () => { setOpen(true); requestAnimationFrame(() => headingRef.current?.focus()); };

  return <section className="mt-5 border-t border-line pt-4" aria-labelledby={`${panelId}-label`}>
    <p id={`${panelId}-label`} className="text-sm font-semibold text-ink-soft">{t.counter.title}</p>
    <button ref={triggerRef} type="button" onClick={reveal} aria-expanded={open} aria-controls={panelId} className="button-secondary mt-2">{t.counter.show}</button>
    {open && <div id={panelId} className="mt-3 rounded-lg border-2 border-ink bg-paper p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-moss">{t.counter.japaneseLabel}</p>
          <h3 ref={headingRef} tabIndex={-1} lang="ja" className="mt-2 break-words text-2xl font-bold leading-relaxed text-ink [overflow-wrap:anywhere]">{COUNTER_PHRASES[phraseId]}</h3>
        </div>
        <button type="button" onClick={close} className="button-secondary shrink-0">{t.counter.close}</button>
      </div>
      <div className="mt-4 border-t border-line pt-3">
        <p className="text-sm font-semibold text-ink-soft">{t.counter.meaningLabel}</p>
        <p className="mt-1 text-base leading-relaxed text-ink">{getCounterPhraseMeaning(phraseId, lang)}</p>
      </div>
    </div>}
  </section>;
}
