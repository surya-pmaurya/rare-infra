export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}) {
  return (
    <div className={light ? "text-paper" : ""}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-7 ${light ? "text-accent" : "text-gold"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
