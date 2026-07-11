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
 * MINFO Leaf — the guide mascot, always framed in a round paper badge
 * (the source PNGs have no alpha channel, so the badge makes the white
 * ground deliberate on any surface — like a staff pin on a counter).
 *
 * Used sparingly (max 2 per page): once in the ask desk header, where it
 * is state-driven (default / thinking / guide / question), and once in
 * the source-quality checklist. Never shown on emergency answers, where
 * 119/110 guidance must dominate.
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
    <span
      className={`inline-block shrink-0 select-none overflow-hidden rounded-full bg-card ring-1 ring-line ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        // Remounting on state change replays the crossfade-and-settle.
        key={variant}
        src={MASCOT_SRC[variant]}
        alt={t.mascot.alt}
        width={size}
        height={size}
        className="animate-mascot h-full w-full scale-[1.18] object-cover"
      />
    </span>
  );
}
