"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useLanguage } from "./LanguageProvider";

type TextSize = "standard" | "large";
const storageKey = "minfo-text-size";
const subscribe = () => () => undefined;
const getStoredSize = (): TextSize => {
  try {
    return window.localStorage.getItem(storageKey) === "large" ? "large" : "standard";
  } catch {
    return "standard";
  }
};

/** A local preference only: it never leaves the visitor's device. */
export function TextSizeControl() {
  const { t } = useLanguage();
  const copy = t.textSize!;
  const storedSize = useSyncExternalStore(subscribe, getStoredSize, () => "standard");
  const [selectedSize, setSelectedSize] = useState<TextSize | null>(null);
  const size = selectedSize ?? storedSize;

  useEffect(() => {
    document.documentElement.dataset.textSize = size;
  }, [size]);

  const selectSize = (nextSize: TextSize) => {
    try { window.localStorage.setItem(storageKey, nextSize); } catch { /* local-only preference; fail safely */ }
    setSelectedSize(nextSize);
  };

  return (
    <fieldset className="flex min-h-11 items-center rounded-sm border border-line bg-card p-0.5">
      <legend className="sr-only">{copy.label}</legend>
      <button type="button" aria-pressed={size === "standard"} onClick={() => selectSize("standard")} className={`pressable min-h-10 rounded-sm px-2 text-sm font-bold ${size === "standard" ? "bg-moss text-white" : "text-ink-soft hover:text-moss"}`}>
        {copy.standard}
      </button>
      <button type="button" aria-pressed={size === "large"} onClick={() => selectSize("large")} className={`pressable min-h-10 rounded-sm px-2 text-sm font-bold ${size === "large" ? "bg-moss text-white" : "text-ink-soft hover:text-moss"}`}>
        {copy.large}
      </button>
    </fieldset>
  );
}
