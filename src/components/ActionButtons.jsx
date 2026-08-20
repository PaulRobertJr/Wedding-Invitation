import { Link } from "react-router-dom";

function MapPinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}

function PixIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

/**
 * Lista de ações principais do convite.
 *
 *  - "#localizacao"       -> âncora para a seção de localização (mesma página)
 *  - Confirmar Presença   -> abre o WhatsApp com a mensagem pré-preenchida
 *  - Lista de Presentes   -> rota /presentes (GiftList)
 *  - "/pix"               -> chave/QR code do Pix (TODO: definir rota/destino)
 */
const ACTIONS = [
  { label: "Localização", href: "#localizacao", Icon: MapPinIcon },
  {
    label: "Confirmar Presença",
    href: "https://wa.me/5541984492749?text=Confirma%C3%A7%C3%A3o%20de%20presen%C3%A7a%20%F0%9F%92%8D%F0%9F%A4%8D%0A%0AConfirmo%20minha%20presen%C3%A7a%20no%20casamento%20de%20Geibson%20%26%20Lauren%20!%20%F0%9F%A5%82%0A%0ANome%3A%0ATelefone%3A%0ACrian%C3%A7as%3A%20(nome%20e%20idade%2C%20se%20houver)%0A%0A%E2%9C%A8%20Estamos%20muito%20felizes%20em%20ter%20voc%C3%AA%20conosco%20nesse%20dia%20especial",
    Icon: CalendarCheckIcon,
    external: true,
  },
  { label: "Lista de Presentes", to: "/presentes", Icon: GiftIcon },
  { label: "Presentear pelo Pix", href: "/pix", Icon: PixIcon },
];

function ActionButtons() {
  return (
    <section className="section action-buttons">
      {ACTIONS.map(({ label, href, to, Icon, external }) =>
        to ? (
          <Link key={label} className="action-button" to={to}>
            <span className="action-button-icon">
              <Icon />
            </span>
            <span className="action-button-label">{label}</span>
          </Link>
        ) : (
          <a
            key={label}
            className="action-button"
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <span className="action-button-icon">
              <Icon />
            </span>
            <span className="action-button-label">{label}</span>
          </a>
        ),
      )}
    </section>
  );
}

export default ActionButtons;
