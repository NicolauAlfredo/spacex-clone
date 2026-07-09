import { moonMissions } from "../../../../content/moonMissions.content";
import { InnerText } from "../../../../components/Section/components/InnerText/InnerText";
import "./MissionsSection.css";

export function MissionsSection() {
  return (
    <section className="moon hero-section hero-section-missions">
      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={moonMissions.desktopImage}
        />

        <img
          className="hero-section-missions__img"
          src={moonMissions.mobileImage}
          alt={moonMissions.imageAlt}
        />
      </picture>

      <div className="hero-section-missions__content">
        <InnerText
          className="hero-section-missions"
          title={moonMissions.title}
          paragraph={moonMissions.paragraphs}
        />
      </div>
    </section>
  );
}
