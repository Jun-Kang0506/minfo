"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export type MascotVariant = "default" | "thinking" | "question" | "guide";

const MASCOT_SRC: Record<MascotVariant, string> = {
  default: "/mascot/minfo-leaf-default.png",
  thinking: "/mascot/minfo-leaf-thinking.png",
  question: "/mascot/minfo-leaf-question.png",
  guide: "/mascot/minfo-leaf-guide.png",
};

/**
 * MINFO Leaf — the guide mascot. Used sparingly (max 2 per page):
 * once in the chat area (state-driven) and once in the source-quality
 * checklist. Never shown on emergency answers, where 119/110 guidance
 * must dominate.
 */
export function Mascot({
  variant,
  size = 56,
  className = "",
}: {
  variant: MascotVariant;
  size?: number;
  className?: string;
}) {
  const { t } = useLanguage();
  return (
    <Image
      // Remounting on state change replays the soft entrance animation.
      key={variant}
      src={MASCOT_SRC[variant]}
      alt={t.mascot.alt}
      width={size}
      height={size}
      className={`animate-mascot select-none ${className}`}
    />
  );
}
