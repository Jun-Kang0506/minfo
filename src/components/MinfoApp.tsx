"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Answer, TopicId } from "@/lib/types";
import { localAnswerEngine } from "@/lib/engine/localAnswerEngine";
import { LanguageProvider, useLanguage } from "./LanguageProvider";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { ChatPanel, type ChatEntry } from "./ChatPanel";
import { CategoryGrid } from "./CategoryGrid";
import { WhyMinfo } from "./WhyMinfo";
import { HackathonStory } from "./HackathonStory";
import { DataSourcesSection } from "./DataSourcesSection";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";

const MIN_THINK_MS = 700; // brief "checking sources" state so answers feel deliberate

function scrollToAsk() {
  document.getElementById("ask")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function AppInner() {
  const { lang } = useLanguage();
  const [entries, setEntries] = useState<ChatEntry[]>([]);
  const mainRef = useRef<HTMLElement | null>(null);

  // Language switch: replay a short opacity settle on the page content so
  // the wholesale text swap doesn't snap. No remount — chat state survives.
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    el.classList.remove("lang-fade");
    void el.offsetWidth; // restart the animation
    el.classList.add("lang-fade");
  }, [lang]);

  const ask = useCallback(
    async (text: string, topicId?: TopicId) => {
      const id = crypto.randomUUID();
      // ChatPanel scrolls the new answer area into view itself.
      setEntries((prev) => [...prev, { id, question: text, answer: null }]);

      const started = Date.now();
      let answer: Answer;
      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text, topicId, lang }),
        });
        if (!res.ok) throw new Error(`API error ${res.status}`);
        answer = (await res.json()) as Answer;
      } catch {
        // The engine is pure local data — fall back client-side so the
        // demo keeps working even if the API route is unreachable.
        answer = await localAnswerEngine.ask({ text, topicId, lang });
      }

      const remaining = MIN_THINK_MS - (Date.now() - started);
      if (remaining > 0) await new Promise((r) => setTimeout(r, remaining));

      setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, answer } : e)));
    },
    [lang]
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main ref={mainRef} className="flex-1">
        <Hero onAsk={scrollToAsk} />
        {/* Page order mirrors the nav: ask → categories → sources → why MINFO → why Shinjuku */}
        <ChatPanel entries={entries} onAsk={ask} />
        <CategoryGrid onSelect={(text, topicId) => ask(text, topicId)} />
        <DataSourcesSection />
        <WhyMinfo />
        <HackathonStory />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export function MinfoApp() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
