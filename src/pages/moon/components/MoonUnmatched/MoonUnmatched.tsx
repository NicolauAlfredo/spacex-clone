import { moonUnmatchedData } from "../../../../content/moon/moonUnmatched.content";
import "./MoonUnmatched.css";

export function MoonUnmatched() {
  const desktopImage =
    moonUnmatchedData.desktopImage || moonUnmatchedData.image;
  const mobileImage =
    moonUnmatchedData.mobileImage || moonUnmatchedData.image;

  return (
    <section className="moon-unmatched">
      <div className="moon-unmatched__image-container">
        <picture className="moon-unmatched__picture">
          <source media="(min-width: 768px)" srcSet={desktopImage} />
          <img
            src={mobileImage}
            alt={moonUnmatchedData.title}
            className="moon-unmatched__image"
          />
        </picture>
      </div>

      <div className="moon-unmatched__content">
        <h2 className="moon-unmatched__title">{moonUnmatchedData.title}</h2>

        <div className="moon-unmatched__description">
          {moonUnmatchedData.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
