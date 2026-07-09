"use client";

import { SOURCES } from "@/lib/data/sources";
import { OPEN_DATA_CANDIDATES } from "@/lib/data/openDataCandidates";
import { localizedOrganization } from "@/lib/data/sourceL10n";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { SourceCard } from "./SourceCard";
import { Mascot } from "./Mascot";
import { IconCheck, IconExternal } from "./icons";

const TOKYO_OPEN_DATA_PORTAL = "https://portal.data.metro.tokyo.lg.jp/";

function Badge({ tone, children }: { tone: "moss" | "civic" | "caution"; children: string }) {
  const tones = {
    moss: "bg-moss-soft text-moss",
    civic: "bg-civic-soft text-civic",
    caution: "bg-caution-soft text-caution",
  } as const;
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function DataSourcesSection() {
  const { lang, t } = useLanguage();

  // Fixed order matches t.openData.strategy: stable / periodic / time-sensitive.
  const strategyBadges = [
    t.openData.badges.curated,
    t.openData.badges.batch,
    t.openData.badges.live,
  ];
  const strategyTones = ["moss", "caution", "caution"] as const;

  return (
    <section id="sources" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading num="03" ja="公式・公共の情報源" en={t.sources.title} sub={t.sources.sub} />

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {SOURCES.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>

      {/* From open data to usable guidance — the final-mile story */}
      <div className="mt-12 rounded-2xl border border-line bg-card p-5 shadow-sm sm:p-7">
        <h3 className="font-display text-2xl leading-tight text-ink sm:text-3xl">
          {t.openData.title}
        </h3>
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink">{t.openData.sub}</p>
        <p className="mt-3 max-w-3xl text-[13.5px] leading-relaxed text-ink-soft">
          {t.openData.positioning}
        </p>

        <h4 className="mt-7 text-[15px] font-bold text-ink">{t.openData.strategyTitle}</h4>
        <p className="mt-1 text-[13.5px] text-ink-soft">{t.openData.strategyIntro}</p>
        <div className="mt-3.5 grid gap-3.5 md:grid-cols-3">
          {t.openData.strategy.map((item, i) => (
            <div key={item.title} className="rounded-xl border border-line bg-paper p-4">
              <Badge tone={strategyTones[i]}>{strategyBadges[i]}</Badge>
              <h5 className="mt-2.5 text-[14.5px] font-bold text-ink">{item.title}</h5>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tokyo Open Data candidates — verified catalog entries, honestly labeled */}
      <div className="mt-10">
        <h3 className="text-[17px] font-bold text-ink">{t.openData.candidatesTitle}</h3>
        <p className="mt-1 max-w-3xl text-[13.5px] leading-relaxed text-ink-soft">
          {t.openData.candidatesSub}
        </p>
        <ul className="mt-4 grid gap-2.5 md:grid-cols-2">
          {OPEN_DATA_CANDIDATES.map((c) => (
            <li key={c.id}>
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-xl border border-line bg-card p-4 shadow-sm transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-0.5 hover:border-moss hover:shadow-md focus-visible:border-moss active:translate-y-0 active:scale-[0.99]"
              >
                <span className="flex flex-wrap items-center gap-1.5">
                  <Badge tone={c.kind === "dataset" ? "moss" : "civic"}>
                    {c.kind === "dataset"
                      ? t.openData.badges.candidate
                      : t.openData.badges.searchTarget}
                  </Badge>
                  <Badge tone="caution">
                    {c.updatePlan === "live" ? t.openData.badges.live : t.openData.badges.batch}
                  </Badge>
                </span>
                <span className="mt-2.5 flex items-start justify-between gap-2">
                  <span className="text-[14.5px] font-bold leading-snug text-ink group-hover:underline">
                    {c.titleJa}
                  </span>
                  <IconExternal className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
                </span>
                <span className="mt-0.5 text-[12.5px] text-ink-soft">
                  {/* The English gloss only helps English readers; other UIs get the note in their language */}
                  {lang === "en" ? `${c.titleEn} · ` : ""}
                  {localizedOrganization(c.organization, lang)}
                  {c.format ? ` · ${c.format}` : ""}
                </span>
                <span className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  {c.note[lang]}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={TOKYO_OPEN_DATA_PORTAL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-moss px-4 py-2.5 text-[14px] font-bold text-moss transition-colors hover:bg-moss hover:text-white"
        >
          {t.openData.catalogCta}
          <IconExternal className="h-4 w-4" />
        </a>
      </div>

      {/* Source-quality check — inspired by public open-data guidance */}
      <div className="mt-10 rounded-2xl border border-line bg-card p-5 shadow-sm sm:p-7">
        <div className="flex items-start gap-4">
          <Mascot variant="thinking" size={56} className="hidden shrink-0 sm:block" />
          <div>
            <h3 className="text-[17px] font-bold text-ink">{t.quality.title}</h3>
            <p className="mt-1 max-w-3xl text-[13.5px] leading-relaxed text-ink-soft">
              {t.quality.sub}
            </p>
          </div>
        </div>
        <ul className="mt-5 grid gap-x-6 gap-y-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {t.quality.items.map((item) => (
            <li key={item.label} className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-moss-soft">
                <IconCheck className="h-3 w-3 text-moss" strokeWidth={3} />
              </span>
              <span>
                <span className="block text-[14px] font-bold leading-snug text-ink">
                  {item.label}
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-relaxed text-ink-soft">
                  {item.desc}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Open-data roadmap — future plans, clearly labeled */}
      <div className="mt-10">
        <h3 className="flex flex-wrap items-center gap-2.5 text-[15px] font-bold">
          {t.sources.roadmapTitle}
          <span className="rounded-full bg-caution-soft px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-caution">
            {t.sources.roadmapBadge}
          </span>
        </h3>
        <div className="mt-3.5 grid gap-3.5 md:grid-cols-3">
          {t.sources.roadmap.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-dashed border-ink-soft/40 bg-paper p-5"
            >
              <h4 className="text-[14.5px] font-bold">{item.title}</h4>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
