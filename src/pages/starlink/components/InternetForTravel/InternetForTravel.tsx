import { StarlinkButton } from "../StarlinkButton/StarlinkButton";
import { content } from "../../../../content/starlink/InternetForTravel";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import "./InternetForTravel.css";

export function InternetForTravel() {
  return (
    <>
      <section className="starlink-section starlink-section-Coverage">
        <picture>
          <source
            srcSet={content.background.desktop}
            media="(min-width: 1024px)"
          />

          <img
            src={content.background.mobile}
            alt={content.background.alt}
            className="starlink-section__image-car"
          />
        </picture>
        <div className="starlink-section__gradient">
          <FadeInSection className="starlink-section__text--container">
            <h2 className="starlink-section__inner--title fade-in-child">
              {content.title}
            </h2>
            <p className="starlink-section__inner--text fade-in-child">
              {content.description}
            </p>
            <div className="starlink-section__link--container fade-in-child">
              <StarlinkButton label="Learn More" variant="primary" />
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}
