import type { HomeSectionContent } from "../../../../types/home/home.types";
import { Button } from "../Button/Button";
import { MediaBackground } from "../MediaBackground/MediaBackground";

type Props = {
  content: HomeSectionContent;
};

export function HomeSection({ content }: Props) {
  const titleId = `${content.id}-title`;

  return (
    <section
      id={content.id}
      className={`hero-section hero-section--${content.modifier}`}
      aria-labelledby={titleId}
      data-position={content.position}
    >
      <MediaBackground {...content.background} />
      <div className="hero-section__overlay">
        <div className="hero-section__content">
          {content.date && (
            <span className="hero-section__date">{content.date}</span>
          )}

          <h2 id={titleId} className="hero-section__title">
            {content.title}
          </h2>

          {content.description && (
            <p className="hero-section__description">{content.description}</p>
          )}

          {content.button && <Button {...content.button} />}
        </div>
      </div>
    </section>
  );
}
