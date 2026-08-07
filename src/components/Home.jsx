import Hero from "./Hero.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Blessing from "./Blessing.jsx";
import Countdown from "./Countdown.jsx";
import CoupleImage from "./CoupleImage.jsx";
import fotoCasal2 from "../assets/images/fotocasal2.jpg";
import Location from "./Location.jsx";
import DressCode from "./DressCode.jsx";
import ActionButtons from "./ActionButtons.jsx";
import ClosingSection from "./ClosingSection.jsx";

function Home({ isOpen = false }) {
  return (
    <div className="home">
      <Hero isOpen={isOpen} />

      <main className="home-body">
        <MusicPlayer />
        <Blessing />
        <Countdown />

        <section className="section couple-photo">
          <CoupleImage src={fotoCasal2} alt="Geibson e Lauren" />
        </section>

        <Location />
        <DressCode />
        <ActionButtons />
        <ClosingSection />
      </main>
    </div>
  );
}

export default Home;
