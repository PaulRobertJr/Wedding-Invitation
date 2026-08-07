/**
 * Foto com moldura em formato de arco: topo arredondado (semicírculo),
 * base reta, borda fina off-white e sombra suave.
 *
 * Props:
 *  - src:       caminho da imagem
 *  - alt:       texto alternativo da imagem
 *  - className: classes extras (ex: limitação de largura no Hero)
 */
function ArchPhoto({ src, alt = "", className, ...props }) {
  return (
    <figure
      className={["arch-photo", className].filter(Boolean).join(" ")}
      {...props}
    >
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  );
}

export default ArchPhoto;
