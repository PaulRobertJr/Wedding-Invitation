import { motion } from "framer-motion";
import Monogram from "./Monogram.jsx";

const EASE = [0.22, 0.61, 0.36, 1];

function Hero({ isOpen = false }) {
  return (
    <motion.header
      className="hero-section"
      initial={{ opacity: 0, y: 30 }}
      animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.9, ease: EASE, delay: isOpen ? 0.1 : 0 }}
    >
      <Monogram size={72} />
      <p className="hero-kicker">Geibson &amp; Lauren</p>
      <h1 className="hero-title">Nosso Casamento</h1>
      <p className="hero-date">01 de Novembro de 2026</p>
    </motion.header>
  );
}

export default Hero;
