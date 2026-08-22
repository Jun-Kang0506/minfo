"use client";

import { useEffect, useRef, useState } from "react";
import type { CategoryId, ContextPathwayTarget } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { Header } from "./Header";
import { CategoryGrid } from "./CategoryGrid";
import { GuidedFlow } from "./GuidedFlow";
import { Footer } from "./Footer";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { ContextPathwayPage } from "./ContextPathwayPage";
import { ContextPathwaysHome } from "./ContextPathwaysHome";
import type { ContextPathwayId } from "@/lib/data/context-pathways";

function AppInner({ initialContext }: { initialContext?: ContextPathwayId }) {
  const { lang } = useLanguage();
  const [categoryId, setCategoryId] = useState<CategoryId | null>(null);
  const [pathwayTarget, setPathwayTarget] = useState<ContextPathwayTarget | null>(null);
  const [context, setContext] = useState<"home" | ContextPathwayId>(initialContext ?? "home");
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
      <Header onHome={() => { setCategoryId(null); setPathwayTarget(null); setContext("home"); }} />
      <main ref={mainRef} className="flex-1">
        {categoryId ? (
          <section id="categories" className="mx-auto max-w-3xl px-4 py-7 md:py-10">
            <GuidedFlow key={pathwayTarget ? JSON.stringify(pathwayTarget) : categoryId} categoryId={categoryId} initialTopicId={pathwayTarget?.type === "topic" ? pathwayTarget.topicId : undefined} initialQuestionId={pathwayTarget?.type === "guidedQuestion" ? pathwayTarget.questionId : undefined} initialDatasetCandidateId={pathwayTarget?.type === "structuredLookup" ? pathwayTarget.datasetCandidateId : undefined} onExit={() => { setCategoryId(null); setPathwayTarget(null); setContext(initialContext ?? "home"); }} />
          </section>
        ) : context !== "home" ? (
          <ContextPathwayPage pathwayId={context} onSelect={(target: ContextPathwayTarget) => { setPathwayTarget(target); setCategoryId(target.type === "category" || target.type === "guidedQuestion" || target.type === "structuredLookup" ? target.categoryId : target.categoryId ?? "consultation"); }} />
        ) : (
          <><CategoryGrid onSelect={(id) => { setPathwayTarget(null); setCategoryId(id); }} /><ContextPathwaysHome /></>
        )}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export function MinfoApp({ initialContext }: { initialContext?: ContextPathwayId }) {
  return <AppInner initialContext={initialContext} />;
}
