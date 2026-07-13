import { FadeInSection } from "../FadeInSection/FadeInSection";
import { reliableContent } from "../../../../content/starlink/reliablecontent.content";
import { StarlinkButton } from "../StarlinkButton/StarlinkButton";
import "./ReliableResilient.css";
import "./ReliableResilientBackground/ReliableBackground.css";

export function ReliableResilient() {
  return (
    <FadeInSection className="starlink-section__content">
      <h1 className="starlink-section__title fade-in-child">
        {reliableContent.title}
      </h1>
      <p className="starlink-section__lable fade-in-child">
        {reliableContent.description}
      </p>
      <div className="starlink-section__actions fade-in-child">
        <StarlinkButton
          label="Learn More"
          href="/learn-more"
          variant="primary"
        />
      </div>
    </FadeInSection>
  );
}
