import { content } from "../../../../content/plugItIn.content";
import { StarlinkButton } from "../StarlinkButton/StarlinkButton";
import { FadeInSection } from "../FadeInSection/FadeInSection";
import "./PlugItInPoint.css";

export function PlugItInPoint() {
  return (
    <>
          <section className="starlink-section starlink-section--plug-it-in">
            <picture>
              <img
                src={content.background.desktop}
                alt = {content.background.alt}
                className="starlink-section__image-yard"
              />
    
              <img
                src={content.background.mobile}
                alt={content.background.alt}
                className="starlink-section__image-sun-roof"
              />
            </picture>
            <div className="starlink-section__gradient">
              <FadeInSection className="starlink-section__text--container">
                <h1 className="starlink-section__inner--title fade-in-child">{content.title}</h1>
                <p className="starlink-section__inner--text fade-in-child">{content.description}</p>
                <div className="starlink-section__link--container fade-in-child">
                  <StarlinkButton label="Learn More" variant="primary" />
                </div>
                </FadeInSection>
              </div>
            
          </section>
        </>
  );
}
