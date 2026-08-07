function Blessing() {
  return (
    <section className="section blessing">
      <p className="blessing-text">Com as bênçãos de Deus e de nossos pais</p>

      <div className="blessing-columns">
        <div className="blessing-side">
          <span className="blessing-role">Família da Noiva</span>
          <span className="blessing-name">Nome do Pai</span>
          <span className="blessing-name">Nome da Mãe</span>
        </div>

        <span className="blessing-divider" aria-hidden="true" />

        <div className="blessing-side">
          <span className="blessing-role">Família do Noivo</span>
          <span className="blessing-name">Nome do Pai</span>
          <span className="blessing-name">Nome da Mãe</span>
        </div>
      </div>
    </section>
  );
}

export default Blessing;
