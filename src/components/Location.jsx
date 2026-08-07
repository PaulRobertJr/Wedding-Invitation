import CoupleImage from "./CoupleImage.jsx";
import fotoLugar1 from "../assets/images/fotolugar1.jpg";

const VENUE_NAME = "Florença Festas";
const VENUE_ADDRESS =
  "R. Júlio César Setenareski, 2493 - Colônia Murici, São José dos Pinhais - PR, 83085-290";

// Link exato do Google Maps (rota a partir da localização atual).
const MAPS_URL =
  "https://www.google.com/maps/dir//Floren%C3%A7a+Festas,+R.+J%C3%BAlio+C%C3%A9sar+Setenareski,+2493+-+Col%C3%B4nia+Murici,+S%C3%A3o+Jos%C3%A9+dos+Pinhais+-+PR,+83085-290/@-25.4616658,-49.334863,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94dcf75eb19682ed:0x759d7db2cf7d6100!2m2!1d-49.1194195!2d-25.5642801?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D";

function Location() {
  return (
    <section className="section location" id="localizacao">
      <p className="section-script">Cerimônia e Recepção</p>
      <h2 className="location-venue">{VENUE_NAME}</h2>
      <p className="location-address">{VENUE_ADDRESS}</p>

      <CoupleImage src={fotoLugar1} alt={VENUE_NAME} />

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
