export default function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}) {
  return (
    <div className={light ? "text-white" : ""}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      {text && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-7 ${light ? "text-white/60" : "text-black/60"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
