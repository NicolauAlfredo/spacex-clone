import { InnerText } from "../../../../components/innerText/InnerText";
import "./MissionsSection.css";

export function MissionsSection() {
  return (
    <section className="hero-section hero-section-missions">
      <picture className="hero-section-missions__img">
        <source
          media="(min-width: 1440px)"
          srcSet="/assets/pages/moon/images/starship-moon-desktop.jpg"
        />

        <img
          className="hero-section-missions__img"
          srcSet="/assets/pages/moon/images/starship-moon.jpg"
          alt="Moon"
        />
      </picture>

      <div className="hero-section-missions__content">
        <InnerText
          className="hero-section-missions"
          title="moon missions"
          paragraph={
            <>
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
            </>
          }
        />
      </div>
    </section>
  );
}
