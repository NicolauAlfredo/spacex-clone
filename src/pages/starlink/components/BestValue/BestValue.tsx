export function BestValue() {
  return (
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
          Fast, affordable
          <br /> internet
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
  );
}
