import Hero from "./Hero.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Blessing from "./Blessing.jsx";
import Countdown from "./Countdown.jsx";
import CoupleImage from "./CoupleImage.jsx";
import Location from "./Location.jsx";

function Home({ isOpen = false }) {
  return (
    <div className="home">
      <Hero isOpen={isOpen} />

      <main className="home-body">
        <MusicPlayer />
        <Blessing />
        <Countdown />

        <section className="section couple-photo">
          <CoupleImage initials="G & L" placeholderText="Nosso momento" />
        </section>

        <Location />
      </main>
    </div>
  );
}

export default Home;
