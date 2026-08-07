import Monogram from "./Monogram.jsx";

function CoupleImage({
  src,
  alt = "",
  initials,
  placeholderText = "Em breve, uma foto aqui",
  className,
  ...props
}) {
  return (
    <figure
      className={["photo-frame", className].filter(Boolean).join(" ")}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <div
          className="photo-placeholder"
          role="img"
          aria-label={alt || placeholderText}
        >
          {initials && <Monogram initials={initials} size={42} />}
          <span className="photo-placeholder-script">{placeholderText}</span>
        </div>
      )}
    </figure>
  );
}

export default CoupleImage;
