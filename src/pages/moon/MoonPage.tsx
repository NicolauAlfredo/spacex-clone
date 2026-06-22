import { Footer } from "../../components/footer/Footer";
import { Header } from "../home/components/Header";
import { InfoTable } from "../../components/table/InfoTable";
import { moonStats } from "./MoonStats";
import { HeroSection } from "../../components/heroSection/HeroSection";
import { InnerText } from "../../components/innerText/InnerText";

export function MoonPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          className="moon"
          title="the moon"
          subtitle="Returning humans to lunar missions"
          mediaSrc="../../../public/assets/pages/moon/videos/moon-video.mp4"
          mediaType="video"
        />

        {/* {<!-- SECTION 2 -->
      <!-- Why The Moon? -->} */}
        <section className="hero-section hero-section-why">
          <div className="hero-section-why__img-wrapper">
            <img
              className="hero-section-why__img"
              src="../../../public/assets/pages/moon/images/moon_why.jpg"
              alt="moon image"
            />
          </div>
          <div className="hero-section-why__content">
            {/* <div className="hero-section-why__content">
            <h2 className="hero-section-why__title">WHY THE MOON?</h2>
            <p className="hero-section-why__description">
              The Moon is one of Earth's closest habitable neighbors and
              provides an opportunity to gain valuable experience for missions
              to Mars and beyond.
            </p>
            <InfoTable stats={moonStats} className="hero-section-why" />
          </div> */}
            <InnerText
              className="hero-section-why"
              title="Why the moon?"
              paragraph="The Moon is one of Earth's closest habitable neighbors and
              provides an opportunity to gain valuable experience for missions
              to Mars and beyond."
            />
            <InfoTable className="hero-section-why" stats={moonStats} />
          </div>
        </section>

        {/* { <!-- SECTION 3 -->
      <!-- Moon Missions -->} */}
        <section className="hero-section hero-section-missions">
          <picture className="hero-section-missions__img">
            <source
              media="(min-width: 1440px)"
              srcSet="../assets/pages/moon/images/starship-moon-desktop.jpg"
            />

            <img
              className="hero-section-missions__img"
              src="../assets/pages/moon/images/starship-moon.jpg"
              alt="Moon"
            />
          </picture>

          <div className="hero-section-missions__content">
            <h2 className="hero-section-missions__title">MOON MISSIONS</h2>

            <p className="hero-section-missions__description">
              Starship cargo flights to the lunar surface for research,
              development, and exploratory missions start no earlier than 2028,
              at a rate of $100 million per metric ton. <br />
              <br />
              Join a Starship human spaceflight mission now, flying around the
              Moon or landing on the lunar surface. <br />
              <br />
              For additional information on human spaceflight seat or full
              mission availability, payload masses, pricing details, and
              timeframes, please contact <br />
              <a href="#">sales@spacex.com</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
