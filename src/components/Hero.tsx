"use client";

import { useLanguage } from "./LanguageProvider";
import { IconCheck } from "./icons";

/** Transit-style route map — MINFO's visual motif: trusted navigation. */
function RouteMap() {
  const { t } = useLanguage();

  return (
    <div className="relative rounded-2xl border border-line bg-card p-6 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">
        {t.hero.routeTitle}
      </p>
      <p className="mt-0.5 text-[13px] font-semibold text-ink-soft">新宿・大久保から始める</p>
      <svg
        viewBox="0 0 300 190"
        className="mt-3 w-full"
        role="img"
        aria-label={t.hero.routeAria}
      >
        {/* route line */}
        <path d="M40 150 L40 95 L40 40" stroke="#c73e1d" strokeWidth="6" strokeLinecap="round" />
        <path
          d="M40 40 C40 20, 70 14, 95 14"
          stroke="#c73e1d"
          strokeWidth="6"
          strokeDasharray="2 10"
          strokeLinecap="round"
          fill="none"
        />
        {/* stops */}
        <circle cx="40" cy="150" r="10" fill="#fffdf8" stroke="#c73e1d" strokeWidth="5" />
        <circle cx="40" cy="95" r="10" fill="#fffdf8" stroke="#c73e1d" strokeWidth="5" />
        <circle cx="95" cy="14" r="8" fill="#fffdf8" stroke="#29486b" strokeWidth="4" strokeDasharray="3 4" />
        {/* labels */}
        <text x="62" y="148" fontSize="15" fontWeight="700" fill="#23201a">Shinjuku</text>
        <text x="62" y="164" fontSize="11" fill="#5c564a">新宿 — {t.hero.routeNow}</text>
        <text x="62" y="93" fontSize="15" fontWeight="700" fill="#23201a">Okubo</text>
        <text x="62" y="109" fontSize="11" fill="#5c564a">大久保 — {t.hero.routeNow}</text>
        <text x="112" y="14" fontSize="15" fontWeight="700" fill="#29486b">{t.hero.routeGoal}</text>
        <text x="112" y="30" fontSize="11" fill="#5c564a">東京 — {t.hero.routeNext}</text>
      </svg>
      {/* vertical Japanese accent */}
      <span
        aria-hidden
        className="absolute right-5 top-1/2 -translate-y-1/2 select-none text-sm font-semibold tracking-widest text-ink-soft/50"
        style={{ writingMode: "vertical-rl" }}
      >
        みんなのインフォ
      </span>
    </div>
  );
}

export function Hero({ onAsk }: { onAsk: () => void }) {
  const { t } = useLanguage();

  const trust = [t.hero.trustSources, t.hero.trustLanguages, t.hero.trustPilot];

  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-[13px] font-semibold text-civic">
            <span className="h-2 w-2 rounded-sm bg-shu" aria-hidden />
            {t.hero.kicker}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {t.hero.headline}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-soft">{t.hero.sub}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={onAsk}
              className="rounded-xl bg-shu px-6 py-3.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-shu-deep"
            >
              {t.hero.ctaAsk}
            </button>
            <a
              href="#categories"
              className="rounded-xl border-2 border-ink px-6 py-3 text-base font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {t.hero.ctaExplore}
            </a>
          </div>

          <ul className="mt-8 space-y-2.5">
            {trust.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] font-medium text-ink">
                <IconCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-moss" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <RouteMap />
      </div>
    </section>
  );
}
