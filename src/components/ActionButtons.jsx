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
 * TODO: apontar cada href para a rota/página real quando existirem:
 *  - "#localizacao"        -> âncora para a seção de localização (mesma página)
 *  - "/confirmar-presenca" -> página/formulário de confirmação de presença
 *  - "/presentes"          -> lista de presentes (loja virtual)
 *  - "/pix"                -> chave/QR code do Pix
 */
const ACTIONS = [
  { label: "Localização", href: "#localizacao", Icon: MapPinIcon },
  { label: "Confirmar Presença", href: "/confirmar-presenca", Icon: CalendarCheckIcon },
  { label: "Lista de Presentes", href: "/presentes", Icon: GiftIcon },
  { label: "Presentear pelo Pix", href: "/pix", Icon: PixIcon },
];

function ActionButtons() {
  return (
    <section className="section action-buttons">
      {ACTIONS.map(({ label, href, Icon }) => (
        <a key={label} className="action-button" href={href}>
          <span className="action-button-icon">
            <Icon />
          </span>
          <span className="action-button-label">{label}</span>
        </a>
      ))}
    </section>
  );
}

export default ActionButtons;
