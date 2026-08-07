import { useEffect, useState } from "react";
import Hero from "./Hero.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Blessing from "./Blessing.jsx";
import Countdown from "./Countdown.jsx";
import ArchPhoto from "./ArchPhoto.jsx";
import fotoCasal2 from "../assets/images/fotocasal2.jpg";
import Location from "./Location.jsx";
import DressCode from "./DressCode.jsx";
import ActionButtons from "./ActionButtons.jsx";
import ClosingSection from "./ClosingSection.jsx";
import EnvelopeIntro from "./EnvelopeIntro.jsx";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="home">
        <Hero isOpen={isOpen} />

        <main className="home-body">
          <MusicPlayer />
          <Blessing />
          <Countdown />

          <section className="section couple-photo">
            <ArchPhoto src={fotoCasal2} alt="Geibson e Lauren" />
          </section>

          <Location />
          <DressCode />
          <ActionButtons />
          <ClosingSection />
        </main>
      </div>

      {!isOpen && <EnvelopeIntro onOpen={() => setIsOpen(true)} />}
    </>
  );
}

export default Home;
