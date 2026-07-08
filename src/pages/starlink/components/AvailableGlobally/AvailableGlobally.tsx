import "./AvailableGlobally.css";
import { StarlinkButton } from "../StarlinkButton/StarlinkButton";
import { content } from "../../../../content/availableGlobally.content";

export function AvailableGlobally() {
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
                className="starlink-section__image-green-roof"
              />
            </picture>
            <div className="starlink-section__gradient">
              <div className="starlink-section__text--container starlink-section__text--container-available-globally">
                <h1 className="starlink-section__inner--title">{content.title}</h1>
                <p className="starlink-section__inner--text">
                  {content.description}
                </p>
                <div className="starlink-section__link--container">
                  <StarlinkButton label="Check Availability" variant="primary" />
                </div>
              </div>
            </div>
          </section>
        </>
  );
}
