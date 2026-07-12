"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { IconArrowUp } from "./icons";

/** How far down (px) before the button appears — roughly past the hero. */
const SHOW_AFTER = 600;

export function ScrollToTopButton() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={t.nav.backToTop}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      // No behavior option: the html scroll-behavior rule keeps this smooth,
      // and its reduced-motion override switches it to an instant jump.
      onClick={() => window.scrollTo({ top: 0 })}
      className={`pressable fixed bottom-4 right-4 z-30 grid h-11 w-11 place-items-center rounded-sm border border-line bg-paper/95 text-ink-soft shadow-md backdrop-blur transition-opacity duration-200 hover:text-moss ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <IconArrowUp className="h-5 w-5" strokeWidth={2.2} />
    </button>
  );
}
