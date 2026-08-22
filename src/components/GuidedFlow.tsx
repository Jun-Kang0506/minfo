"use client";

import { useEffect, useRef, useState } from "react";
import { GUIDED_FLOWS, GUIDED_QUESTIONS, GUIDED_UI } from "@/lib/data/guided-flow";
import { STRUCTURED_LOOKUP_METADATA } from "@/lib/data/intent-delivery";
import { localAnswerEngine } from "@/lib/engine/localAnswerEngine";
import type { Answer, CategoryId, FeedbackChoice, LanguageCode, TopicId } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { deriveResultCards, ResultSequence } from "./ResultSequence";
import { IconArrowRight } from "./icons";
import { StructuredLookup } from "./StructuredLookup";
import { isLookupDatasetId } from "@/lib/lookups";
import { getMessages } from "@/i18n/messages";

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
      <p className="text-base font-bold tabular-nums text-moss">2 / 2</p>
      <p className="mt-3 text-base font-semibold text-moss">{label}</p>
      <div className="mt-5 space-y-3" aria-hidden>
        <div className="h-4 w-11/12 animate-pulse rounded-sm bg-paper" />
        <div className="h-4 w-4/5 animate-pulse rounded-sm bg-paper" />
        <div className="h-4 w-3/5 animate-pulse rounded-sm bg-paper" />
      </div>
    </section>
  );
}

export function GuidedFlow({ categoryId, onExit, initialTopicId, initialQuestionId, initialDatasetCandidateId }: { categoryId: CategoryId; onExit: () => void; initialTopicId?: TopicId; initialQuestionId?: string; initialDatasetCandidateId?: string }) {
  const { lang } = useLanguage();
  const [history, setHistory] = useState<ActiveQuestion[]>([
    { questionId: initialQuestionId ?? GUIDED_FLOWS[categoryId].startQuestionId },
  ]);
  const [view, setView] = useState<View>(initialTopicId ? "loading" : initialDatasetCandidateId ? "structuredLookup" : "question");
  const [answer, setAnswer] = useState<Answer | null>(null);
  const [resolution, setResolution] = useState<SemanticResolution | null>(initialTopicId ? { questionId: "context", optionId: initialTopicId, intentId: initialTopicId, topicId: initialTopicId } : initialDatasetCandidateId ? { questionId: "context", optionId: initialDatasetCandidateId, intentId: initialDatasetCandidateId, datasetCandidateId: initialDatasetCandidateId, deliveryKind: "structured_lookup" } : null);
  const [resultCardIndex, setResultCardIndex] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackChoice | null>(null);
  const headingRef = useRef<HTMLHeadingElement | HTMLLegendElement | null>(null);
  const hasFocused = useRef(false);
  const latestResolution = useRef<SemanticResolution | null>(null);
  const latestLang = useRef(lang);

  const active = history[history.length - 1];
  const question = GUIDED_QUESTIONS[active.questionId];
  const selected = question.options.find((option) => option.id === active.selectedOptionId);
  const semanticKey = resolution?.topicId ? [resolution.questionId, resolution.optionId, resolution.intentId, resolution.topicId].join(":") : null;

  useEffect(() => { latestResolution.current = resolution; latestLang.current = lang; }, [lang, resolution]);
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
    if (!resolution?.topicId) return;

    const controller = new AbortController();
    let current = true;
    const request = resolvedOption?.request[lang] ?? resolution.topicId;
    const capturedKey = semanticKey;
    const capturedLang = lang;
    const isCurrent = () => current && latestLang.current === capturedLang && latestResolution.current?.topicId && [latestResolution.current.questionId, latestResolution.current.optionId, latestResolution.current.intentId, latestResolution.current.topicId].join(":") === capturedKey;

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
        if (isCurrent()) {
          setAnswer(nextAnswer);
          setView("result");
        }
      } catch {
        if (!isCurrent() || controller.signal.aborted) return;
        const nextAnswer = await localAnswerEngine.ask({ text: request, topicId: resolution.topicId, lang });
        if (isCurrent()) {
          setAnswer(nextAnswer);
          setView("result");
        }
      }
    })();

    return () => {
      current = false;
      controller.abort();
    };
  }, [lang, resolution, resolvedOption, semanticKey]);

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
    setResultCardIndex(0);
    setFeedback(null);
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
    const cards = deriveResultCards(answer);
    const index = Math.min(resultCardIndex, cards.length - 1);
    return <ResultSequence answer={answer} index={index} feedback={feedback} onFeedback={setFeedback} onBack={() => { if (index > 0) setResultCardIndex(index - 1); else goBack(); }} onNext={() => setResultCardIndex(index + 1)} onStartOver={onExit} />;
  }

  if (view === "result") return <LoadingCard label={GUIDED_UI.loading[lang]} />;

  if (view === "unsupported" && resolution && resolvedOption) {
    return (
      <section className="rounded-lg border border-line border-l-4 border-l-caution-line bg-card p-5 sm:p-6" aria-live="polite">
        <p className="text-base font-bold tabular-nums text-caution">2 / 2</p>
        <h2 ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="mt-3 text-2xl font-bold tracking-tight text-ink">{GUIDED_UI.unsupportedTitle[lang]}</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink">{GUIDED_UI.unsupportedNeed[lang].replace("{need}", resolvedOption.label[lang])}</p>
        <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
          <button onClick={() => { setAnswer(null); setResultCardIndex(0); setFeedback(null); setView("loading"); setResolution((current) => current ? { ...current, topicId: "consultation" } : current); }} className="button-primary">{GUIDED_UI.consultation[lang]}</button>
          <button onClick={goBack} className="button-secondary">{GUIDED_UI.back[lang]}</button>
          <button onClick={onExit} className="button-secondary">{GUIDED_UI.startOver[lang]}</button>
        </div>
      </section>
    );
  }

  if (view === "structuredLookup" && resolution?.datasetCandidateId) {
    const lookup = STRUCTURED_LOOKUP_METADATA[resolution.datasetCandidateId];
    if (isLookupDatasetId(resolution.datasetCandidateId)) return <StructuredLookup key={resolution.datasetCandidateId} datasetId={resolution.datasetCandidateId} onBack={goBack} onStartOver={onExit} />;
    // Static IDs never trigger a fetch. Missing metadata remains an honest preparing state.
    return <StructuredLookupCard lang={lang} lookup={lookup} headingRef={headingRef} onBack={goBack} onStartOver={onExit} />;
  }

  return (
    <section className="rounded-lg border border-line border-l-4 border-l-moss bg-card p-5 sm:p-6">
      <p className="text-base font-bold tabular-nums text-moss">{history.length === 1 ? "1 / 2" : "2 / 2"}</p>
      <fieldset className="mt-3">
        <legend ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="text-2xl font-bold tracking-tight text-ink">{question.title[lang]}</legend>
        <div className="mt-5 grid gap-3">
          {question.options.map((option) => {
            const checked = option.id === active.selectedOptionId;
            return <label key={option.id} className={`pressable flex min-h-12 cursor-pointer items-center gap-3 rounded-sm border p-3 text-base font-semibold leading-snug ${checked ? "border-moss bg-moss-soft text-ink" : "border-line bg-card text-ink hover:border-moss"}`}>
              <input type="radio" name={question.id} checked={checked} onChange={() => selectOption(option.id)} className="h-5 w-5 shrink-0 accent-moss" />
              <span>{option.label[lang]}</span>
            </label>;
          })}
        </div>
      </fieldset>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={goBack} className="button-secondary">{GUIDED_UI.back[lang]}</button>
        <button onClick={advance} disabled={!selected} className="button-primary disabled:cursor-not-allowed disabled:opacity-45">{GUIDED_UI.next[lang]} <IconArrowRight className="h-4 w-4" /></button>
      </div>
    </section>
  );
}

function StructuredLookupCard({ lang, lookup, headingRef, onBack, onStartOver }: { lang: LanguageCode; lookup?: typeof STRUCTURED_LOOKUP_METADATA[string]; headingRef: React.RefObject<HTMLHeadingElement | HTMLLegendElement | null>; onBack: () => void; onStartOver: () => void }) {
  const preparingById = getMessages(lang).lookup.preparing as Record<string, { title: string; body: string }>;
  const preparing = lookup ? preparingById[lookup.id] : undefined;
  const title = preparing?.title ?? GUIDED_UI.unsupportedTitle[lang];
  const body = preparing?.body ?? GUIDED_UI.unsupportedNeed[lang];
  return (
    <section className="rounded-lg border border-line border-l-4 border-l-caution-line bg-card p-5 sm:p-6" aria-live="polite">
      <p className="text-base font-bold tabular-nums text-caution">2 / 2</p>
      <h2 ref={(node) => { headingRef.current = node; }} tabIndex={-1} className="mt-3 text-2xl font-bold tracking-tight text-ink">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-ink">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <button onClick={onBack} className="button-secondary">{GUIDED_UI.back[lang]}</button>
        <button onClick={onStartOver} className="button-secondary">{GUIDED_UI.startOver[lang]}</button>
      </div>
    </section>
  );
}
