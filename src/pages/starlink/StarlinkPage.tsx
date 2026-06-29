import { Header } from './header/header'
import { StarlinkResidentialButton } from '../../components/Buttons/buttons'
import { StarlinkButton } from '../../components/Buttons/buttons'
import { SectionContent } from '../../components/content/Content'
import './StarlinkPage.css'
export function StarlinkPage() {
  return (
    <>
      <Header />
    { /* SECTION 01 - Best Value */}
      <section className="starlink-section starlink-section--best-value">
  <picture>
    <source
      srcSet="/assets/pages/starlink/backgrounds/v4_night_sky_desktop.webp"
      media="(min-width: 1024px)"
    />
    <img
      className="starlink-section__img"
      src="/assets/pages/starlink/backgrounds/v4_night_sky_mobile.webp"
      alt=""
    />
  </picture>
  <div className="starlink-section__overlay"></div>
  <div className="starlink-section__content">
    <h2 className="starlink-section__title">
      Fast, affordable<br /> internet
    </h2>
    <p className="starlink-section__subtitle">STARTING AT</p>
    <p className="starlink-section__subtitle--price">
      <span className="starlink-section__price">$55</span>
      <span className="mo_class">/mo</span>
    </p>
    <div className="starlink-section__actions">
      <button className="btn btn--primary">Get Started</button>
      <button className="btn btn--ghost">View Pricing</button>
    </div>
  </div>
</section>
{/* SECTION 02 - Plans */}
<section className="starlink-section starlink-section--plans">
  <StarlinkResidentialButton />
</section>
{/* SECTION 03 - Reliable & Resilient */}
{/* SECTION 03 - Reliable & Resilient */}
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
    <StarlinkButton label="Learn More" variant="primary" href="#"/>
  </div>
</section>
    </>
  );
}

