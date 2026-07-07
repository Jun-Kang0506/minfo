import { SectionHeading } from "./SectionHeading";
import { IconCheck } from "./icons";

const BLOCKS = [
  {
    num: "問",
    title: "The problem",
    ja: "課題",
    body: "Official life information in Japan is reliable — but scattered across dozens of sites, written in dense administrative Japanese, and hard to act on. For residents navigating an unfamiliar system in a second language, even simple questions (\"which counter?\", \"which form?\") become barriers.",
  },
  {
    num: "人",
    title: "The people",
    ja: "対象",
    body: "Foreign-origin residents and multilingual communities: newly arrived residents, international students, workers, families — and the community supporters who help them. People facing language and information-access barriers, not a lack of ability.",
  },
  {
    num: "解",
    title: "The approach",
    ja: "解決",
    body: "MINFO is not a translation chatbot. It is a civic information navigator: it explains daily-life systems simply, in six languages including やさしい日本語, always shows its official sources, and guides people to the right real-world office — never replacing it.",
  },
  {
    num: "先",
    title: "Pilot → expansion",
    ja: "展開",
    body: "Shinjuku / Okubo is the pilot: one of Japan's most visibly multilingual neighborhoods, dense with students, workers, and families who need daily-life information. The same category + trusted-source structure can then roll out ward by ward across Tokyo.",
  },
];

const IMPACT = [
  "Healthcare access in your own language",
  "Disaster preparedness that reaches everyone",
  "Garbage, tax, and housing rules made clear",
  "Consultation desks that people actually find",
];

export function HackathonStory() {
  return (
    <section id="why" className="border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <SectionHeading
          num="03"
          ja="なぜ新宿・大久保？"
          en="Why Shinjuku / Okubo — and why MINFO"
          sub="A civic-tech pilot for multilingual information access, designed to expand across Tokyo."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {BLOCKS.map((block) => (
            <div key={block.title} className="rounded-2xl border border-line bg-paper p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-civic text-lg font-bold text-white">
                  {block.num}
                </span>
                <div>
                  <h3 className="text-[17px] font-bold leading-tight">{block.title}</h3>
                  <p className="text-[12px] font-semibold text-ink-soft">{block.ja}</p>
                </div>
              </div>
              <p className="mt-3.5 text-[14.5px] leading-relaxed text-ink-soft">{block.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-moss-soft p-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-moss">
            What better information access changes
          </h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {IMPACT.map((item) => (
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
