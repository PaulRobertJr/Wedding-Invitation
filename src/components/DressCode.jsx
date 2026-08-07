/**
 * Seção de traje: "Esporte Fino" com as cores da festa.
 *
 * Cores configuráveis via props:
 *  - bridesmaidsColor: cor das madrinhas (azul serenity)
 *  - groomsmenColor:   cor dos padrinhos (cinza claro)
 */
function DressBlock({ label, color, note }) {
  return (
    <div className="dress-block">
      <span
        className="dress-swatch"
        style={{ background: color }}
        aria-label={label}
      />
      <span className="dress-label">{label}</span>
      <span className="dress-note">{note}</span>
    </div>
  );
}

function DressCode({
  bridesmaidsColor = "#91A8D0",
  groomsmenColor = "#B8BDC4",
}) {
  return (
    <section className="section dress-code">
      <p className="section-script">Traje</p>
      <h2 className="dress-code-title">Esporte Fino</h2>

      <div className="dress-code-blocks">
        <DressBlock
          label="Cor das Madrinhas"
          color={bridesmaidsColor}
          note="Evite usar azul serenity"
        />
        <DressBlock
          label="Cor dos Padrinhos"
          color={groomsmenColor}
          note="Evite usar cinza claro"
        />
      </div>
    </section>
  );
}

export default DressCode;
