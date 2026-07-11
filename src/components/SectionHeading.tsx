/** Section heading: localized title with an optional one-line description. */
export function SectionHeading({
  title,
  sub,
  tone = "light",
}: {
  title: string;
  sub?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="mb-8">
      <h2
        className={`text-2xl font-bold tracking-tight sm:text-3xl ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-2 max-w-2xl text-[15px] ${dark ? "text-paper/80" : "text-ink-soft"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
