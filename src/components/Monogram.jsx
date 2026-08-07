function Monogram({ initials = "G & L", size = 72, className = "", ...props }) {
  const ampIndex = initials.indexOf("&");
  const hasAmp = ampIndex !== -1;
  const left = hasAmp ? initials.slice(0, ampIndex).trim() : null;
  const right = hasAmp ? initials.slice(ampIndex + 1).trim() : null;

  return (
    <span
      className={["monogram", className].filter(Boolean).join(" ")}
      style={{ "--mono-size": `${size}px` }}
      role="img"
      aria-label={`Monograma ${initials}`}
      {...props}
    >
      {left && <span className="monogram-letter">{left}</span>}
      {hasAmp && (
        <span className="monogram-amp" aria-hidden="true">
          &amp;
        </span>
      )}
      {right && <span className="monogram-letter">{right}</span>}
    </span>
  );
}

export default Monogram;
