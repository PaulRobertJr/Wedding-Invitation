import CoupleImage from "./CoupleImage.jsx";

// TODO: trocar pelo nome e endereço reais do local.
const VENUE_NAME = "Nome do Local";
const VENUE_ADDRESS = "Rua Exemplo, 000 — Bairro, Cidade — UF";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${VENUE_NAME}, ${VENUE_ADDRESS}`,
)}`;

function Location() {
  return (
    <section className="section location">
      <p className="section-script">Cerimônia e Recepção</p>
      <h2 className="location-venue">{VENUE_NAME}</h2>
      <p className="location-address">{VENUE_ADDRESS}</p>

      <CoupleImage placeholderText="Cerimônia & Recepção" />

      <a
        className="map-link"
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        Ver no mapa
      </a>
    </section>
  );
}

export default Location;
