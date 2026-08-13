"use client";

import { useEffect, useRef, useState } from "react";
import type { CategoryId } from "@/lib/types";
import { LanguageProvider, useLanguage } from "./LanguageProvider";
import { Header } from "./Header";
import { CategoryGrid } from "./CategoryGrid";
import { GuidedFlow } from "./GuidedFlow";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";

function AppInner() {
  const { lang } = useLanguage();
  const [categoryId, setCategoryId] = useState<CategoryId | null>(null);
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

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main ref={mainRef} className="flex-1">
        {categoryId ? (
          <section id="categories" className="mx-auto max-w-3xl px-4 py-7 md:py-10">
            <GuidedFlow categoryId={categoryId} onExit={() => setCategoryId(null)} />
          </section>
        ) : (
          <CategoryGrid onSelect={setCategoryId} />
        )}
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
