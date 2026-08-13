"use client";

import { useEffect, useRef, useState } from "react";
import { GUIDED_FLOWS, GUIDED_QUESTIONS, GUIDED_UI } from "@/lib/data/guided-flow";
import { STRUCTURED_LOOKUP_METADATA } from "@/lib/data/intent-delivery";
import { localAnswerEngine } from "@/lib/engine/localAnswerEngine";
import type { Answer, CategoryId, TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { AnswerCard } from "./AnswerCard";
import { IconArrowRight } from "./icons";

type View = "question" | "loading" | "result" | "unsupported" | "structuredLookup";
type ActiveQuestion = { questionId: string; selectedOptionId?: string };
type SemanticResolution = {
  questionId: string;
  optionId: string;
  intentId: string;
  topicId?: TopicId;
  datasetCandidateId?: string;
  deliveryKind?: "structured_lookup";
};

function LoadingCard({ label }: { label: string }) {
  return (
    <section className="rounded-lg border border-line border-l-4 border-l-moss bg-card p-5 sm:p-6" role="status" aria-live="polite">
      <p className="text-[15px] font-bold tabular-nums text-moss">2 / 2</p>
      <p className="mt-3 text-[16px] font-semibold text-moss">{label}</p>
      <div className="mt-5 space-y-3" aria-hidden>
        <div className="h-4 w-11/12 animate-pulse rounded-sm bg-paper" />
        <div className="h-4 w-4/5 animate-pulse rounded-sm bg-paper" />
        <div className="h-4 w-3/5 animate-pulse rounded-sm bg-paper" />
      </div>
    </section>
  );
}

export function GuidedFlow({ categoryId, onExit }: { categoryId: CategoryId; onExit: () => void }) {
  const { lang, t } = useLanguage();
  const [history, setHistory] = useState<ActiveQuestion[]>([
    { questionId: GUIDED_FLOWS[categoryId].startQuestionId },
  ]);
  const [view, setView] = useState<View>("question");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [resolution, setResolution] = useState<SemanticResolution | null>(null);
  const headingRef = useRef<HTMLHeadingElement | HTMLLegendElement | null>(null);
  const hasFocused = useRef(false);

  const active = history[history.length - 1];
  const question = GUIDED_QUESTIONS[active.questionId];
  const selected = question.options.find((option) => option.id === active.selectedOptionId);

  useEffect(() => {
    if (!hasFocused.current) { hasFocused.current = true; return; }
    headingRef.current?.focus({ preventScroll: true });
  }, [view, active.questionId]);

  const selectOption = (optionId: string) => {
    setHistory((items) => items.map((item, index) => index === items.length - 1 ? { ...item, selectedOptionId: optionId } : item));
  };

  const resolvedOption = resolution
    ? GUIDED_QUESTIONS[resolution.questionId]?.options.find((option) => option.id === resolution.optionId)
    : undefined;

  useEffect(() => {
    if (!resolution?.topicId || !resolvedOption) return;

    const controller = new AbortController();
    let current = true;
    const request = resolvedOption.request[lang];

    void (async () => {
      try {
        const res = await fetch("/api/ask", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: request, topicId: resolution.topicId, lang }),
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Answer request failed");
        const nextAnswer = (await res.json()) as Answer;
        if (current) {
          setAnswer(nextAnswer);
          setView("result");
        }
      } catch {
        if (!current || controller.signal.aborted) return;
        const nextAnswer = await localAnswerEngine.ask({ text: request, topicId: resolution.topicId, lang });
        if (current) {
          setAnswer(nextAnswer);
          setView("result");
        }
      }
    })();

    return () => {
      current = false;
      controller.abort();
    };
  }, [lang, resolution, resolvedOption]);

  const advance = () => {
    if (!selected) return;
    const { outcome } = selected;
    if (outcome.type === "nextQuestion") {
      setHistory((items) => [...items, { questionId: outcome.questionId }]);
      return;
    }
    if (outcome.type === "unsupported") {
      setResolution({ questionId: question.id, optionId: selected.id, intentId: selected.intentId });
      setView("unsupported");
      return;
    }
    if (outcome.type === "structuredLookup") {
      setResolution({ questionId: question.id, optionId: selected.id, intentId: selected.intentId, datasetCandidateId: outcome.datasetCandidateId, deliveryKind: "structured_lookup" });
      setView("structuredLookup");
      return;
    }
    setAnswer(null);
    setView("loading");
    setResolution({ questionId: question.id, optionId: selected.id, intentId: selected.intentId, topicId: outcome.topicId });
  };

  const goBack = () => {
    if (view === "question") {
      if (history.length === 1) onExit();
      else setHistory((items) => items.slice(0, -1));
      return;
    }
    if (view === "result" || view === "unsupported" || view === "structuredLookup") {
      setResolution(null);
      setAnswer(null);
      setView("question");
    }
  };

  if (view === "loading") return <LoadingCard label={GUIDED_UI.loading[lang]} />;

  if (view === "result" && answer?.lang === lang) {
    return <div aria-live="polite"><h2 ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="mb-3 text-[24px] font-bold tracking-tight text-ink">2 / 2 <span className="sr-only">{t.answer.answerLabel}</span></h2><AnswerCard answer={answer} /><FlowActions lang={lang} onBack={goBack} onStartOver={onExit} /></div>;
  }

  if (view === "result") return <LoadingCard label={GUIDED_UI.loading[lang]} />;

  if (view === "unsupported" && resolution && resolvedOption) {
    return (
      <section className="rounded-lg border border-line border-l-4 border-l-caution-line bg-card p-5 sm:p-6" aria-live="polite">
        <p className="text-[15px] font-bold tabular-nums text-caution">2 / 2</p>
        <h2 ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="mt-3 text-[24px] font-bold tracking-tight text-ink">{GUIDED_UI.unsupportedTitle[lang]}</h2>
        <p className="mt-4 text-[18px] leading-relaxed text-ink">{GUIDED_UI.unsupportedNeed[lang].replace("{need}", resolvedOption.label[lang])}</p>
        <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
          <button onClick={() => { setAnswer(null); setView("loading"); setResolution((current) => current ? { ...current, topicId: "consultation" } : current); }} className="pressable min-h-12 rounded-sm bg-moss px-5 text-[16px] font-bold text-white hover:bg-moss-deep">{GUIDED_UI.consultation[lang]}</button>
          <button onClick={goBack} className="pressable min-h-12 rounded-sm border border-line bg-card px-5 text-[16px] font-bold text-ink hover:border-moss">{GUIDED_UI.back[lang]}</button>
          <button onClick={onExit} className="pressable min-h-12 rounded-sm px-3 text-[16px] font-bold text-moss hover:underline">{GUIDED_UI.startOver[lang]}</button>
        </div>
      </section>
    );
  }

  if (view === "structuredLookup" && resolution?.datasetCandidateId) {
    const lookup = STRUCTURED_LOOKUP_METADATA[resolution.datasetCandidateId];
    // Static IDs never trigger a fetch. Missing metadata remains an honest preparing state.
    return <StructuredLookupCard lang={lang} lookup={lookup} headingRef={headingRef} onBack={goBack} onStartOver={onExit} />;
  }

  return (
    <section className="rounded-lg border border-line border-l-4 border-l-moss bg-card p-5 sm:p-6">
      <p className="text-[15px] font-bold tabular-nums text-moss">{history.length === 1 ? "1 / 2" : "2 / 2"}</p>
      <fieldset className="mt-3">
        <legend ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="text-[24px] font-bold tracking-tight text-ink">{question.title[lang]}</legend>
        <div className="mt-5 grid gap-3">
          {question.options.map((option) => {
            const checked = option.id === active.selectedOptionId;
            return <label key={option.id} className={`pressable flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border p-3 text-[16px] font-semibold leading-snug ${checked ? "border-moss bg-moss-soft text-ink" : "border-line bg-card text-ink hover:border-moss"}`}>
              <input type="radio" name={question.id} checked={checked} onChange={() => selectOption(option.id)} className="h-5 w-5 shrink-0 accent-moss" />
              <span>{option.label[lang]}</span>
            </label>;
          })}
        </div>
      </fieldset>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={goBack} className="pressable min-h-12 rounded-sm px-3 text-[16px] font-bold text-moss hover:underline">{GUIDED_UI.back[lang]}</button>
        <button onClick={advance} disabled={!selected} className="pressable flex min-h-12 items-center gap-2 rounded-sm bg-moss px-5 text-[16px] font-bold text-white enabled:hover:bg-moss-deep disabled:cursor-not-allowed disabled:opacity-45">{GUIDED_UI.next[lang]} <IconArrowRight className="h-4 w-4" /></button>
      </div>
    </section>
  );
}

function StructuredLookupCard({ lang, lookup, headingRef, onBack, onStartOver }: { lang: "en" | "ja" | "zh" | "ko" | "vi" | "ne"; lookup?: typeof STRUCTURED_LOOKUP_METADATA[string]; headingRef: React.RefObject<HTMLHeadingElement | HTMLLegendElement | null>; onBack: () => void; onStartOver: () => void }) {
  const title = lookup?.display.title[lang] ?? GUIDED_UI.unsupportedTitle[lang];
  const body = lookup?.display.body[lang] ?? GUIDED_UI.unsupportedNeed[lang];
  return (
    <section className="rounded-lg border border-line border-l-4 border-l-caution-line bg-card p-5 sm:p-6" aria-live="polite">
      <p className="text-[15px] font-bold tabular-nums text-caution">2 / 2</p>
      <h2 ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="mt-3 text-[24px] font-bold tracking-tight text-ink">{title}</h2>
      <p className="mt-4 text-[18px] leading-relaxed text-ink">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="pressable min-h-12 rounded-sm px-3 text-[16px] font-bold text-moss hover:underline">{GUIDED_UI.back[lang]}</button>
        <button onClick={onStartOver} className="pressable min-h-12 rounded-sm border border-line bg-card px-5 text-[16px] font-bold text-ink hover:border-moss">{GUIDED_UI.startOver[lang]}</button>
      </div>
    </section>
  );
}

function FlowActions({ lang, onBack, onStartOver }: { lang: "en" | "ja" | "zh" | "ko" | "vi" | "ne"; onBack: () => void; onStartOver: () => void }) {
  return <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><button onClick={onBack} className="pressable min-h-12 rounded-sm px-3 text-[16px] font-bold text-moss hover:underline">{GUIDED_UI.back[lang]}</button><button onClick={onStartOver} className="pressable min-h-12 rounded-sm border border-line bg-card px-5 text-[16px] font-bold text-ink hover:border-moss">{GUIDED_UI.startOver[lang]}</button></div>;
}
