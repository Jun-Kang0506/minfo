"use client";

import { useLanguage } from "./LanguageProvider";
import { LanguageSelector } from "./LanguageSelector";
import { IconPhone } from "./icons";

export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { href: "#ask", label: t.nav.ask },
    { href: "#categories", label: t.nav.categories },
    { href: "#sources", label: t.nav.sources },
    { href: "#open-data", label: t.nav.openData },
    { href: "#why-minfo", label: t.nav.whyMinfo },
    { href: "#why", label: t.nav.why },
  ];

  return (
    <header className="sticky top-0 z-40">
      {/* Emergency strip — always visible, never buried */}
      <div className="bg-ink px-4 py-2 text-paper">
        <p className="mx-auto flex max-w-6xl items-center gap-2 text-xs font-medium leading-relaxed sm:text-[13px]">
          <IconPhone className="h-3.5 w-3.5 shrink-0 text-shu-soft" />
          {/* Wraps to two lines on narrow screens — 110 must never be cut off */}
          <span>
            {t.emergencyBar.split(/(119|110)/).map((part, i) =>
              part === "119" || part === "110" ? (
                <strong key={i} className="rounded-sm bg-shu px-1.5 py-0.5 font-bold text-white">
                  {part}
                </strong>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </span>
        </p>
      </div>

      <div className="border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-moss text-lg font-bold text-white">
              み
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight">MINFO</span>
              <span className="block text-[11px] font-medium text-ink-soft">
                {t.brand.subtitle}
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-semibold text-ink-soft transition-colors hover:text-moss"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <LanguageSelector />
        </div>

        {/* Compact anchor nav for mobile / tablet */}
        <nav
          aria-label="Sections"
          className="flex gap-5 overflow-x-auto border-t border-line px-4 py-2 lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-[13px] font-semibold text-ink-soft"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
