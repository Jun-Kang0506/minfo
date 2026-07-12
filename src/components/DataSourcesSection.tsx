"use client";

import type { Source } from "@/lib/types";
import { SOURCES } from "@/lib/data/sources";
import { OPEN_DATA_CANDIDATES } from "@/lib/data/openDataCandidates";
import { localizedOrganization } from "@/lib/data/sourceL10n";
import { useLanguage } from "./LanguageProvider";
import { SectionHeading } from "./SectionHeading";
import { SourceCard } from "./SourceCard";
import { Mascot } from "./Mascot";
import { IconCheck, IconExternal } from "./icons";

const TOKYO_OPEN_DATA_PORTAL = "https://portal.data.metro.tokyo.lg.jp/";

/** Register tiers: ward → metropolitan → national, like a directory of offices. */
function sourceTier(source: Source): "ward" | "tokyo" | "national" {
  if (source.organization.includes("Shinjuku")) return "ward";
  if (source.organization.startsWith("Tokyo")) return "tokyo";
  return "national";
}

function Tag({ tone, children }: { tone: "moss" | "caution" | "ink"; children: string }) {
  const tones = {
    moss: "bg-moss-soft text-moss",
    caution: "bg-caution-soft text-caution",
    ink: "bg-paper text-ink-soft border border-line",
  } as const;
  return (
    <span className={`inline-block rounded-sm px-1.5 py-0.5 text-[11px] font-bold ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function DataSourcesSection() {
  const { lang, t } = useLanguage();

  const tiers = [
    { key: "ward", label: t.sources.groupWard },
    { key: "tokyo", label: t.sources.groupTokyo },
    { key: "national", label: t.sources.groupNational },
  ] as const;

  // Fixed order matches t.openData.strategy: stable / periodic / time-sensitive.
  const strategyBadges = [
    t.openData.badges.curated,
    t.openData.badges.batch,
    t.openData.badges.live,
  ];
  const strategyTones = ["moss", "caution", "caution"] as const;

  return (
    <section id="sources" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading title={t.sources.title} sub={t.sources.sub} />

      {/* Data-use status register: what runs today vs what is identified next */}
      <div className="mb-10 border-t-2 border-ink">
        {(
          [
            {
              tone: "moss",
              badge: t.openData.now.badge,
              body: t.openData.now.body.replace("{count}", String(SOURCES.length)),
            },
            { tone: "caution", badge: t.openData.next.badge, body: t.openData.next.body },
          ] as const
        ).map((row) => (
          <div
            key={row.badge}
            className="flex flex-col gap-1.5 border-b border-line py-3.5 sm:flex-row sm:items-baseline sm:gap-6"
          >
            <span className="sm:w-64 sm:shrink-0">
              <Tag tone={row.tone}>{row.badge}</Tag>
            </span>
            <p className="flex-1 text-[13.5px] leading-relaxed text-ink">{row.body}</p>
          </div>
        ))}
      </div>

      {/* Source register — grouped by office tier, a reference list, not cards */}
      <div className="grid gap-x-12 lg:grid-cols-2">
        {tiers.map((tier) => {
          const items = SOURCES.filter((s) => sourceTier(s) === tier.key);
          if (items.length === 0) return null;
          return (
            <div key={tier.key} className="mt-8 first:mt-0 lg:first:mt-0 lg:[&:nth-child(2)]:mt-0">
              <h3 className="border-b-2 border-ink pb-2 text-[13px] font-bold text-ink">
                {tier.label}
              </h3>
              <div className="divide-y divide-line">
                {items.map((source) => (
                  <SourceCard key={source.id} source={source} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* From open data to usable guidance — the final-mile story.
          Anchor target for the header "Open Data" link; scroll margin
          matches the sticky header (see section[id] in globals.css). */}
      <div
        id="open-data"
        className="mt-14 scroll-mt-[10.5rem] rounded-lg border border-line bg-card p-5 sm:p-8 lg:scroll-mt-[6.5rem]"
      >
        <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
          {t.openData.title}
        </h3>
        <p className="mt-3 max-w-3xl text-[14.5px] leading-relaxed text-ink">{t.openData.sub}</p>

        {/* official data → curated record → multilingual explanation → next action */}
        <h4 className="mt-8 text-[15px] font-bold text-ink">{t.openData.pipelineTitle}</h4>
        <ol className="mt-3 flex flex-col md:flex-row md:items-stretch">
          {t.openData.pipeline.map((step, i) => (
            <li key={step.label} className="flex flex-col md:flex-1 md:flex-row md:items-stretch">
              <div className="flex-1 rounded-sm border border-line bg-paper px-3.5 py-3">
                <span className="block text-[11px] font-bold tabular-nums text-moss">{i + 1}</span>
                <span className="mt-0.5 block text-[13.5px] font-bold leading-snug text-ink">
                  {step.label}
                </span>
                <span className="mt-0.5 block text-[12px] leading-snug text-ink-soft">
                  {step.desc}
                </span>
              </div>
              {i < t.openData.pipeline.length - 1 && (
                <span
                  aria-hidden
                  className="py-1 pl-4 text-[14px] leading-none text-ink-soft/60 md:self-center md:px-1.5 md:py-0"
                >
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Data-access pipeline: curated now → scheduled batch → live only where needed */}
        <h4 className="mt-8 text-[15px] font-bold text-ink">{t.openData.strategyTitle}</h4>
        <p className="mt-1 text-[13.5px] text-ink-soft">{t.openData.strategyIntro}</p>
        <ol className="mt-4 md:grid md:grid-cols-3">
          {t.openData.strategy.map((item, i) => (
            <li
              key={item.title}
              className="relative border-l-2 border-moss/30 py-3 pl-4 md:border-l-0 md:border-t-2 md:py-0 md:pl-0 md:pr-8 md:pt-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold tabular-nums text-moss">{i + 1}</span>
                <Tag tone={strategyTones[i]}>{strategyBadges[i]}</Tag>
                {i < 2 && (
                  <span aria-hidden className="ml-auto hidden text-ink-soft/50 md:block">
                    →
                  </span>
                )}
              </div>
              <h5 className="mt-2 text-[14.5px] font-bold text-ink">{item.title}</h5>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Tokyo Open Data candidates — a dataset registry, honestly labeled */}
      <div className="mt-12">
        <h3 className="flex flex-wrap items-center gap-2.5 text-lg font-bold tracking-tight text-ink">
          {t.openData.candidatesTitle}
          <Tag tone="caution">{t.openData.next.badge}</Tag>
        </h3>
        <p className="mt-1 max-w-3xl text-[13.5px] leading-relaxed text-ink-soft">
          {t.openData.candidatesSub}
        </p>
        <ul className="mt-4 border-t-2 border-ink">
          {OPEN_DATA_CANDIDATES.map((c) => {
            const gloss = c.titleGloss[lang];
            // Official catalog title is visible signage only in the Japanese
            // UI; other languages lead with the localized gloss and keep the
            // official name as tooltip metadata for traceability.
            const jaPrimary = lang === "ja";
            const showGlossSub =
              jaPrimary && gloss.replace(/\s+/g, "") !== c.titleJa.replace(/\s+/g, "");
            return (
              <li key={c.id}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={jaPrimary ? undefined : c.titleJa}
                  className="group flex flex-col gap-2 border-b border-line py-4 transition-colors hover:bg-card sm:flex-row sm:gap-6"
                >
                  <span className="flex flex-col gap-1.5 sm:w-56 sm:shrink-0">
                    <span className="flex flex-wrap gap-1.5">
                      <Tag tone={c.kind === "dataset" ? "moss" : "ink"}>
                        {c.kind === "dataset"
                          ? t.openData.badges.candidate
                          : t.openData.badges.searchTarget}
                      </Tag>
                      <Tag tone="caution">
                        {c.updatePlan === "live" ? t.openData.badges.live : t.openData.badges.batch}
                      </Tag>
                    </span>
                    <span className="text-[12px] text-ink-soft">
                      {localizedOrganization(c.organization, lang)}
                      {c.format ? ` · ${c.format}` : ""}
                    </span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-start justify-between gap-2">
                      <span>
                        <span className="block text-[14.5px] font-bold leading-snug text-ink group-hover:underline">
                          {jaPrimary ? c.titleJa : gloss}
                        </span>
                        {showGlossSub && (
                          <span className="mt-0.5 block text-[12.5px] text-ink-soft">{gloss}</span>
                        )}
                      </span>
                      <IconExternal className="hover-arrow mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
                    </span>
                    <span className="mt-1 block text-[13px] leading-relaxed text-ink-soft">
                      {c.note[lang]}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={TOKYO_OPEN_DATA_PORTAL}
          target="_blank"
          rel="noopener noreferrer"
          className="pressable mt-5 inline-flex items-center gap-2 rounded-sm border-2 border-moss px-4 py-2.5 text-[14px] font-bold text-moss transition-colors hover:bg-moss hover:text-white"
        >
          {t.openData.catalogCta}
          <IconExternal className="h-4 w-4" />
        </a>
      </div>

      {/* Source-quality check — a verification process every record passes */}
      <div className="mt-12 rounded-lg border border-line bg-card p-5 sm:p-8">
        <div className="flex items-start gap-4">
          <Mascot variant="thinking" size={56} className="hidden sm:block" />
          <div>
            <h3 className="text-lg font-bold tracking-tight text-ink">{t.quality.title}</h3>
            <p className="mt-1 max-w-3xl text-[13.5px] leading-relaxed text-ink-soft">
              {t.quality.sub}
            </p>
          </div>
        </div>
        <ol className="mt-5 grid gap-x-10 border-t border-line sm:grid-cols-2">
          {t.quality.items.map((item, i) => (
            <li key={item.label} className="flex items-start gap-3 border-b border-line py-3">
              <span className="w-5 shrink-0 pt-0.5 text-right text-[13px] font-bold tabular-nums text-moss">
                {i + 1}.
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 text-[14px] font-bold leading-snug text-ink">
                  {item.label}
                  <IconCheck className="h-3.5 w-3.5 shrink-0 text-moss" strokeWidth={3} />
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-relaxed text-ink-soft">
                  {item.desc}
                </span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Open-data roadmap — future plans, clearly labeled */}
      <div className="mt-12">
        <h3 className="flex flex-wrap items-center gap-2.5 text-[15px] font-bold">
          {t.sources.roadmapTitle}
          <Tag tone="caution">{t.sources.roadmapBadge}</Tag>
        </h3>
        <div className="mt-3 border-t border-dashed border-ink-soft/40">
          {t.sources.roadmap.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-1 border-b border-dashed border-ink-soft/40 py-4 sm:flex-row sm:gap-6"
            >
              <h4 className="text-[14.5px] font-bold sm:w-64 sm:shrink-0">{item.title}</h4>
              <p className="flex-1 text-[13.5px] leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
