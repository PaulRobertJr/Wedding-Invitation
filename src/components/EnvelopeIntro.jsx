import { useState } from "react";
import { motion } from "framer-motion";
import Monogram from "./Monogram.jsx";

const EASE = [0.22, 0.61, 0.36, 1];
const SEAL_ANCHOR = { x: "-50%", y: "-50%" };

function HandIcon() {
  return (
    <svg
      className="hand-icon"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 12V6.5a1.5 1.5 0 0 1 3 0V11m0-4.5a1.5 1.5 0 0 1 3 0V11m0-3.5a1.5 1.5 0 0 1 3 0V13a6 6 0 0 1-6 6h-.9c-2.1 0-3.5-1-4.4-2.6L3.5 13.6a1.6 1.6 0 0 1 2.6-1.9L8 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnvelopeIntro({ onOpen }) {
  const [phase, setPhase] = useState("idle");

  const handleOpen = () => {
    if (phase !== "idle") return;
    setPhase("seal");
  };

  const letterVisible = phase === "opening" || phase === "done";
  const flapVisible = phase === "opening" || phase === "done";
  const envelopeGone = phase === "done";
  const burstVisible = phase !== "idle";

  return (
    <div className="envelope-scene">
      <div
        className="envelope-stage"
        role="button"
        tabIndex={0}
        aria-label="Abrir convite"
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpen();
          }
        }}
      >
        <motion.div
          className="envelope"
          initial={{ y: 0, opacity: 1 }}
          animate={envelopeGone ? { y: 46, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: EASE }}
          onAnimationComplete={() => {
            if (phase === "done") onOpen();
          }}
        >
          <motion.div
            className="envelope-letter"
            initial={{ y: 0 }}
            animate={letterVisible ? { y: "-82%" } : { y: 0 }}
            transition={{
              duration: 0.8,
              ease: EASE,
              delay: phase === "opening" ? 0.15 : 0,
            }}
            onAnimationComplete={() => {
              if (phase === "opening") setPhase("done");
            }}
          >
            <Monogram initials="G & L" size={44} className="letter-mono" />
            <span className="letter-line" />
          </motion.div>

          <div className="envelope-body" />

          <motion.div
            className="envelope-flap"
            initial={{ rotateX: 0 }}
            animate={flapVisible ? { rotateX: 180 } : { rotateX: 0 }}
            transition={{
              duration: 0.6,
              ease: EASE,
              delay: phase === "opening" ? 0.05 : 0,
            }}
          />

          <motion.span
            className="seal-burst"
            initial={{ scale: 0, opacity: 0, ...SEAL_ANCHOR }}
            animate={
              burstVisible
                ? { scale: 2.3, opacity: 0, ...SEAL_ANCHOR }
                : { scale: 0, opacity: 0, ...SEAL_ANCHOR }
            }
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          <motion.div
            className="envelope-seal"
            initial={{ ...SEAL_ANCHOR, scale: 1, rotate: 0, opacity: 1 }}
            animate={
              phase === "idle"
                ? { ...SEAL_ANCHOR, scale: [1, 1.05, 1] }
                : { ...SEAL_ANCHOR, scale: 1.5, rotate: 20, opacity: 0 }
            }
            transition={
              phase === "idle"
                ? { repeat: Infinity, duration: 2.4, ease: "easeInOut" }
                : { duration: 0.5, ease: [0.55, 0, 0.55, 0.2] }
            }
            onAnimationComplete={() => {
              if (phase === "seal") setPhase("opening");
            }}
          >
            <Monogram initials="G & L" size={30} />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="envelope-hint"
        initial={{ opacity: 1, y: 0 }}
        animate={envelopeGone ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <span className="hint-script">clique para abrir</span>
        <HandIcon />
      </motion.div>
    </div>
  );
}

export default EnvelopeIntro;
