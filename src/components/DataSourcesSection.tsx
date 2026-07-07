import { SOURCES } from "@/lib/data/sources";
import { SectionHeading } from "./SectionHeading";
import { SourceCard } from "./SourceCard";

const ROADMAP = [
  {
    title: "Tokyo Open Data Catalog connection",
    body: "Link answers to live public datasets (facilities, consultation desks, disaster info) instead of static entries.",
  },
  {
    title: "Ward-by-ward expansion",
    body: "The category + source structure is ward-agnostic: swap in each ward's official pages to cover all of Tokyo.",
  },
  {
    title: "Anonymized question trends",
    body: "Understand what information residents actually need — shared with wards as a public-interest signal, never as personal data.",
  },
];

export function DataSourcesSection() {
  return (
    <section id="sources" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
      <SectionHeading
        num="04"
        ja="公式情報にもとづく"
        en="Built on official & public information"
        sub="MINFO answers only from a curated set of official and public organizations — every answer links back to them."
      />

      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {SOURCES.map((source) => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>

      <div className="mt-10">
        <h3 className="flex flex-wrap items-center gap-2.5 text-[15px] font-bold">
          Open-data roadmap
          <span className="rounded-full bg-caution-soft px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.1em] text-caution">
            Future — not yet implemented
          </span>
        </h3>
        <div className="mt-3.5 grid gap-3.5 md:grid-cols-3">
          {ROADMAP.map((item) => (
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
