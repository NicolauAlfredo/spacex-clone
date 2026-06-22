// Componente HeroSection per aggiungere hero alla pagina
import "./HeroSection.css";

type HeroSectionProps = {
  className: string;
  title: string;
  subtitle: string;
  mediaType: "video" | "image";
  mediaSrc: string;
};

export function HeroSection({
  className,
  title,
  subtitle,
  mediaType,
  mediaSrc,
}: HeroSectionProps) {
  return (
    <section className={`hero-section hero-section-${className}`}>
      {mediaType === "video" && (
        <video
          className={`hero-section-${className}__video`}
          autoPlay
          muted
          loop
          playsInline
          src={mediaSrc}
        ></video>
      )}

      {mediaType === "image" && (
        <img className={`hero-section-${className}__img`} src={mediaSrc} />
      )}

      <div className={`hero-section-${className}__overlay`}>
        <div className={`hero-section-${className}__content`}>
          <h2 className={`hero-section-${className}__title`}>
            {title.toUpperCase()}
          </h2>

          <p className={`hero-section-${className}__subtitle`}>
            {subtitle.toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
