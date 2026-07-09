import { moonWhySection } from "../../../../content/moonWhySection.content";
import { InfoTable } from "./components/InfoTable/InfoTable";
import { InnerText } from "../../../../components/Section/components/InnerText/InnerText";
import "./WhySection.css";

export function WhySection() {
  return (
    <section className="moon hero-section hero-section-why">
      <div className="hero-section-why__img-wrapper">
        <img
          className="hero-section-why__img"
          src={moonWhySection.image}
          alt={moonWhySection.imageAlt}
        />
      </div>

      <div className="hero-section-why__content">
        <InnerText
          className="hero-section-why"
          title={moonWhySection.title}
          paragraph={moonWhySection.paragraph}
        />

        <InfoTable className="hero-section-why" stats={moonWhySection.stats} />
      </div>
    </section>
  );
}
