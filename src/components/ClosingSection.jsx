import { motion } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1];

/**
 * Fechamento da página: "Esperamos você!" com animação
 * de entrada (fade + slide up) ao entrar na viewport.
 */
function ClosingSection() {
  return (
    <motion.section
      className="section closing"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <p className="closing-line">
        Esperamos <span className="closing-accent">você</span>!
      </p>
      <p className="closing-sub">
        Sua presença fará nosso dia ainda mais especial.
      </p>
    </motion.section>
  );
}

export default ClosingSection;
