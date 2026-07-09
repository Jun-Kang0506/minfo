/**
 * Wayfinding-style section heading — like a numbered stop on a route map.
 */
export function SectionHeading({
  num,
  en,
  ja,
  sub,
  tone = "light",
}: {
  num: string;
  en: string;
  ja: string;
  sub?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-md text-sm font-bold ${
            dark ? "bg-moss text-white" : "bg-ink text-paper"
          }`}
        >
          {num}
        </span>
        <p
          className={`text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? "text-paper/70" : "text-ink-soft"
          }`}
        >
          {ja}
        </p>
      </div>
      <h2
        className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {en}
      </h2>
      {sub && (
        <p className={`mt-2 max-w-2xl text-[15px] ${dark ? "text-paper/80" : "text-ink-soft"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
