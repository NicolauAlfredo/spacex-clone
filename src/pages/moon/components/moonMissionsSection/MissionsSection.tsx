import { InnerText } from "../monnWhySection/components/moonInnerText/InnerText";
import { moonMissions } from "../../../../data/moonMissions.data";

import "./MissionsSection.css";

export function MissionsSection() {
  return (
    <section className="moon hero-section hero-section-missions">
      <picture className="hero-section-missions__img">
        <source media="(min-width: 1440px)" src={moonMissions.desktopImage} />

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
