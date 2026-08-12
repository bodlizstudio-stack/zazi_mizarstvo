type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`measure-line inline-block text-xs uppercase tracking-[0.2em] mb-4 ${
            light ? "text-sand" : "text-oak"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl sm:text-4xl md:text-5xl ${
          light ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? "text-ivory/70" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
