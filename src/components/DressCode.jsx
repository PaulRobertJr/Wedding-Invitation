/**
 * Seção de traje: "Esporte Fino" com as cores da festa.
 *
 * Cores configuráveis via props:
 *  - bridesmaidsColor: cor das madrinhas (trocar pela cor real depois)
 *  - groomsmenColor:   cor dos padrinhos (trocar pela cor real depois)
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
  bridesmaidsColor = "#7d8fb5",
  groomsmenColor = "#6f8f6a",
}) {
  return (
    <section className="section dress-code">
      <p className="section-script">Traje</p>
      <h2 className="dress-code-title">Esporte Fino</h2>

      <div className="dress-code-blocks">
        <DressBlock
          label="Cor das Madrinhas"
          color={bridesmaidsColor}
          note="Evite usar este tom"
        />
        <DressBlock
          label="Cor dos Padrinhos"
          color={groomsmenColor}
          note="Evite usar este tom"
        />
      </div>
    </section>
  );
}

export default DressCode;
