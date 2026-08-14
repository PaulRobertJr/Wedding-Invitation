import { Link } from "react-router-dom";
import Monogram from "./Monogram.jsx";

const GIFTS = [
  { title: "Só pra não dizer que nao dei nada", price: 49.99, image: "" },
  { title: "Jogo de Jantar", price: 429.9, image: "" },
  { title: "Air Fryer", price: 289.9, image: "" },
  { title: "Liquidificador", price: 159.9, image: "" },
  { title: "Jogo de Cama Queen", price: 219.9, image: "" },
  { title: "Jogo de Toalhas", price: 129.9, image: "" },
];

const priceFormat = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function GiftImage({ image, title }) {
  if (image) {
    return (
      <img className="gift-image" src={image} alt={title} loading="lazy" />
    );
  }

  return (
    <div
      className="gift-image gift-image-placeholder"
      role="img"
      aria-label={title}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
      </svg>
    </div>
  );
}

function GiftList() {
  return (
    <div className="gift-page">
      <Link to="/" className="gift-back">
        ← Voltar
      </Link>

      <Monogram initials="G & L" size={56} />
      <h1 className="gift-title">Lista de Presentes</h1>
      <p className="gift-sub">
        Sua presença já é o melhor presente. Se quiser nos presentear, escolha
        um item da nossa lista.
      </p>

      <div className="gift-grid">
        {GIFTS.map((gift, index) => (
          <div className="gift-card" key={index}>
            <span className="gift-card-title">{gift.title}</span>
            <GiftImage image={gift.image} title={gift.title} />
            <span className="gift-price">{priceFormat.format(gift.price)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiftList;
