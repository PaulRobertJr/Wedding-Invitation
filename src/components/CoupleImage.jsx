import Monogram from "./Monogram.jsx";

function CoupleImage({
  src,
  alt = "",
  initials,
  placeholderText = "Em breve, uma foto aqui",
  ...props
}) {
  return (
    <figure className="photo-frame" {...props}>
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
