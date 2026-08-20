import { Link } from "react-router-dom";
import Monogram from "./Monogram.jsx";
import coberta1 from "../assets/images/coberta1.jpg";
import pedicure from "../assets/images/pedicure.png";
import laurenBuffet from "../assets/images/laurenbuffet.jpg";
import geibsonCalvo from "../assets/images/geibsoncalvo.jpg";
import deus from "../assets/images/deus.jpg";
import amigosVelhinhos from "../assets/images/amigos_velhinhos.jpg";
import buque from "../assets/images/buque.jpeg";
import papelhigienico from "../assets/images/papelhigienico.jpg";
import tampaoouvido from "../assets/images/tampaoouvido.jpg";
import despedidanoivo from "../assets/images/despedidanoivo.jpg";
import despedidanoiva from "../assets/images/despedidanoiva.png";
import cueca from "../assets/images/cueca.webp";
import ajudamobilia from "../assets/images/ajudamobilia.png";
import coral from "../assets/images/coral.jpg";
import vaquinha from "../assets/images/vaquinha.jpg";
import rica from "../assets/images/rica.jpg";

const GIFTS = [
  {
    title: "Cobertor para a noiva estar sempre coberta de razão",
    price: 49.99,
    image: coberta1,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/K6wmbNlHyH",
  },
  {
    title: "1 ano de papel higiênico para o noivo",
    price: 270.0,
    image: papelhigienico,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/K6wmbNlHyH",
  },
  {
    title: "Tampão de ouvido para Lauren não ouvir o Geibson roncar ",
    price: 99.9,
    image: tampaoouvido,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/88dMJH8Q7H",
  },
  {
    title: "Patrocine a despedida do Noivo",
    price: 499.9,
    image: despedidanoivo,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/QI14cod5zw",
  },
  {
    title: "Patrocine a despedida da Noiva",
    price: 499.9,
    image: despedidanoiva,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/TPcDsuI3l3",
  },
  {
    title: "Cueca sexy para a noite de núpcia",
    price: 159.9,
    image: cueca,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/TPcDsuI3l3",
  },
  {
    title: "Ajuda para mobiliar a casa",
    price: 799.9,
    image: ajudamobilia,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/O79Rm3QzBN",
  },
  {
    title: "Acessório para pedicure do noivo",
    price: 429.9,
    image: pedicure,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/xVUelRkK71",
  },
  {
    title: "Primeiro lugar na fila do buffet",
    price: 289.9,
    image: laurenBuffet,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/fcnkFHVjrj",
  },
  {
    title: "Um ano de corte de cabelo para o noivo",
    price: 159.9,
    image: geibsonCalvo,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/r1IDZjthLu",
  },
  {
    title: "Deus tocou no seu coração",
    price: 219.9,
    image: deus,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/SW49WXmSM1",
  },
  {
    title: "Amigos para sempre",
    price: 129.9,
    image: amigosVelhinhos,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/JmihQOxNeb",
  },
  {
    title: "Coral pra cantar 'aleluia' na entrada do noivo",
    price: 329.9,
    image: coral,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/ReFFCodWTZ",
  },
  {
    title: "vaquinha para ajudar os noivos",
    price: 99.9,
    image: vaquinha,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/fd8RXuWT95",
  },
  {
    title: "Taxa para não jogar o buquê na sua namorada",
    price: 149.9,
    image: buque,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/d8lQUSDMFA",
  },
  {
    title: "Taxa para jogar o buquê na sua namorada",
    price: 199.9,
    image: buque,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/QoDjlRcQC2",
  },
  {
    title: "Eu dei o melhor presente",
    price: 1999.9,
    image: rica,
    link: "https://checkout.infinitepay.io/lauren_izadora_vicente/NdjTKo1hko",
  },
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
            {gift.link && (
              <a
                className="gift-link"
                href={gift.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Presentear
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiftList;
