"use client";

import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { IconCheck } from "./icons";

/** Kanji markers are a design motif (route-map stop signs), not content. */
const BLOCK_NUMS = ["問", "人", "解", "先"];

export function HackathonStory() {
  const { t } = useLanguage();

  return (
    <section id="why" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading num="05" ja="なぜ新宿・大久保？" en={t.story.title} sub={t.story.sub} />

        <div className="grid gap-4 md:grid-cols-2">
          {t.story.blocks.map((block, i) => (
            <div key={block.title} className="rounded-2xl border border-line bg-paper p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-civic text-lg font-bold text-white"
                >
                  {BLOCK_NUMS[i]}
                </span>
                <h3 className="text-[17px] font-bold leading-tight">{block.title}</h3>
              </div>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-soft">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-moss-soft p-5 sm:p-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-moss">
            {t.story.impactTitle}
          </h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {t.story.impact.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14.5px] font-medium text-ink">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
