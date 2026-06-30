import { moonHero } from "../../../../data/moonHero.data";
import "./MoonHeroSection.css";

export function MoonHeroSection() {
  const { variant, title, subtitle, mediaType, mediaSrc } = moonHero;

  return (
    <section className={`moon hero-section hero-section-${variant}`}>
      {mediaType === "video" && (
        <video
          className={`hero-section-${variant}__video`}
          autoPlay
          muted
          loop
          playsInline
          src={mediaSrc}
        />
      )}

      {mediaType === "image" && (
        <img
          className={`hero-section-${variant}__img`}
          src={mediaSrc}
          alt={title}
        />
      )}

      <div className={`hero-section-${variant}__overlay`}>
        <div className={`hero-section-${variant}__content`}>
          <h2 className={`hero-section-${variant}__title`}>
            {title.toUpperCase()}
          </h2>

          <p className={`hero-section-${variant}__description`}>
            {subtitle.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
