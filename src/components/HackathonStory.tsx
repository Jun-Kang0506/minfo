"use client";

import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { IconCheck } from "./icons";

/** Kanji markers are wayfinding glyphs (問/人/解/先), not decoration. */
const BLOCK_NUMS = ["問", "人", "解", "先"];

/**
 * The civic rationale, as an editorial narrative: problem → people →
 * approach → expansion, read top to bottom in one column.
 */
export function HackathonStory() {
  const { t } = useLanguage();

  return (
    <section id="why" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading title={t.story.title} sub={t.story.sub} />

      <div className="max-w-3xl">
        <div className="border-t-2 border-ink">
          {t.story.blocks.map((block, i) => (
            <div key={block.title} className="flex gap-4 border-b border-line py-6">
              <span
                aria-hidden
                className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border-2 border-ink text-lg font-bold text-ink"
              >
                {BLOCK_NUMS[i]}
              </span>
              <div className="min-w-0">
                <h3 className="text-[16px] font-bold leading-tight">{block.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft">{block.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-[13px] font-bold text-moss">{t.story.impactTitle}</h3>
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
