"use client";

import { LANGUAGES } from "@/lib/data/languages";
import { useLanguage } from "./LanguageProvider";
import { IconPhone } from "./icons";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-shu text-lg font-bold text-white">
                み
              </span>
              <span className="leading-tight">
                <span className="block text-lg font-extrabold tracking-tight">
                  MINFO｜みんなのインフォ
                </span>
                <span className="block text-[12px] text-paper/70">
                  Multilingual Information Navigator for Foreign-Origin Residents
                </span>
              </span>
            </p>
            <p className="mt-4 max-w-md text-[13px] leading-relaxed text-paper/70">
              {t.answer.disclaimer}
            </p>
            <p className="mt-3 text-[12px] text-paper/50">
              Hackathon prototype · 2026 · Shinjuku / Okubo pilot ·{" "}
              {LANGUAGES.map((l) => l.nativeLabel).join(" · ")}
            </p>
          </div>

          <div className="rounded-2xl border border-paper/20 p-5">
            <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-paper/70">
              <IconPhone className="h-4 w-4" />
              Emergency · 緊急
            </h3>
            <div className="mt-3 flex gap-6">
              <p>
                <span className="block text-3xl font-extrabold text-shu-soft">119</span>
                <span className="text-[12.5px] text-paper/70">Fire / Ambulance · 火事・救急</span>
              </p>
              <p>
                <span className="block text-3xl font-extrabold text-shu-soft">110</span>
                <span className="text-[12.5px] text-paper/70">Police · 警察</span>
              </p>
            </div>
            <p className="mt-2.5 text-[12px] text-paper/60">
              Free · 24 hours · interpretation available / 無料・24時間・通訳あり
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
