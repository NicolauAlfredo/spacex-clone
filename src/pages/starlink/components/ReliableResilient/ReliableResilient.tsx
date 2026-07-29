import { FadeInSection } from "../FadeInSection/FadeInSection";
import { reliableContent } from "../../../../content/starlink/reliablecontent.content";
import { StarlinkButton } from "../StarlinkButton/StarlinkButton";
import "./ReliableResilient.css";
import "./ReliableResilientBackground/ReliableBackground.css";

export function ReliableResilient() {
  return (
    <FadeInSection className="starlink-section__content">
      <h2 className="starlink-section__title fade-in-child">
        {reliableContent.title}
      </h2>
      <p className="starlink-section__lable fade-in-child">
        {reliableContent.description}
      </p>
      <div className="starlink-section__actions fade-in-child">
        <StarlinkButton
          label="Learn More"
          href="https://www.starlink.com/technology"
          variant="primary"
        />
      </div>
    </FadeInSection>
  );
}
