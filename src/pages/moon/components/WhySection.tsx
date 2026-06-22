import { InnerText } from "../../../components/innerText/InnerText";
import { InfoTable } from "../../../components/table/InfoTable";
import { moonStats } from "../MoonStats";
import "./WhySection.css";

export function WhySection() {
  return (
    <section className="hero-section hero-section-why">
      <div className="hero-section-why__img-wrapper">
        <img
          className="hero-section-why__img"
          src="../../../public/assets/pages/moon/images/moon_why.jpg"
          alt="moon image"
        />
      </div>
      <div className="hero-section-why__content">
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
  );
}
