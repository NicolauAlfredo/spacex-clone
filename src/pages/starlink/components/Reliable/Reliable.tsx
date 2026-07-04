import { StarlinkButton } from "../../../starlink-model/components/Plans/components/StarlinkPlansButtons/StarlinkPlansButtons";
import { SectionContent } from "../../../../components/content/Content";

export function Reliable() {
  return (
    <section className="starlink-section starlink-section--reliable">
      <picture>
        <source
          srcSet="/assets/pages/starlink/backgrounds/v4_lightning_desktop.webp"
          media="(min-width: 1024px)"
        />
        <img
          className="starlink-section__img"
          src="/assets/pages/starlink/backgrounds/v4_lightning_mobile.webp"
          alt=""
        />
      </picture>
      <div className="starlink-section__overlay"></div>
      <div className="starlink-section__content">
        <SectionContent
          title="Reliable & resilient"
          description="Extreme weather conditions can cause significant disruptions to traditional internet networks. Starlink is engineered to melt snow and withstand sleet, heavy rain, and harsh winds—keeping you connected with reliable, high-speed service when you need it most."
          classNameTitle="starlink-section__title"
          classNameText="starlink-section__label"
        />
        <StarlinkButton label="Learn More" variant="primary" href="#" />
      </div>
    </section>
  );
}
