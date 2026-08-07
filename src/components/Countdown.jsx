import { useEffect, useState } from "react";

const WEDDING_DATE = new Date(2026, 10, 1, 0, 0, 0); // 01/11/2026 (local)

const getRemaining = () => {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
};

const pad = (value) => String(value).padStart(2, "0");

const UNITS = [
  { key: "days", label: "DIAS" },
  { key: "hours", label: "HORAS" },
  { key: "minutes", label: "MINUTOS" },
  { key: "seconds", label: "SEGUNDOS" },
];

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="section countdown">
      <p className="section-script">A contagem regressiva já começou</p>
      <p className="countdown-date">01 · 11 · 2026</p>

      <div className="countdown-blocks">
        {UNITS.map(({ key, label }) => (
          <div className="countdown-block" key={key}>
            <span className="countdown-num">{pad(timeLeft[key])}</span>
            <span className="countdown-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Countdown;
