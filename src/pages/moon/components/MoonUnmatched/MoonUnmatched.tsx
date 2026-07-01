import { moonUnmatchedData } from "../../../../content/MoonUnmatched.content";
import "./MoonUnmatched.css";

export function MoonUnmatched() {
  return (
    <section className="moon-unmatched">
      <div className="moon-unmatched__content">
        <h2 className="moon-unmatched__title">{moonUnmatchedData.title}</h2>

        <div className="moon-unmatched__description">
          {moonUnmatchedData.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <img
        src={moonUnmatchedData.image}
        alt={moonUnmatchedData.title}
        className="moon-unmatched__image"
      />
    </section>
  );
}
