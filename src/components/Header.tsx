"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { LanguageSelector } from "./LanguageSelector";
import { IconPhone } from "./icons";

export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { href: "/about", label: t.nav.whyMinfo },
    { href: "/sources", label: t.nav.sources },
    { href: "/data", label: t.nav.openData },
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
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-moss text-lg font-bold text-white">
              み
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-extrabold tracking-tight">MINFO</span>
              <span className="block text-[11px] font-medium text-ink-soft">
                {t.brand.subtitle}
              </span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-semibold text-ink-soft transition-colors hover:text-moss"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/about"
              aria-label={t.nav.whyMinfo}
              title={t.nav.whyMinfo}
              className="grid min-h-11 min-w-11 place-items-center rounded-sm border border-line bg-card text-sm font-bold text-ink transition-colors hover:border-moss hover:text-moss lg:hidden"
            >
              <span aria-hidden>i</span>
            </Link>
            <LanguageSelector />
          </div>
        </div>

      </div>
    </header>
  );
}
