import { StarlinkButton } from "../../../../components/Buttons/Buttons";
import { content } from "../../../../content/InternetForTravel";
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
          <div className="starlink-section__text--container">
            <h1 className="starlink-section__inner--title">{content.title}</h1>
            <p className="starlink-section__inner--text">
              {content.description}
            </p>
            <div className="starlink-section__link--container">
              <StarlinkButton href="#" label="Learn More" variant="primary" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
