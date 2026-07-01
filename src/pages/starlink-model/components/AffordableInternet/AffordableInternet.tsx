import { content } from "../../../../content/affordableInternet.content";
import { formatPrice } from "../../../../utils/formatPrice";
import "./AffordableInternet.css";

export function AffordableInternet() {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <p>{content.priceLabel}</p>
      <p>
        {formatPrice(content.price, "en-US", "USD")}
        <span>/mo</span>
      </p>

      <picture>
        <source
          srcSet={content.starlinkBackground.desktop}
          media="(min-width: 1024px)"
        />

        <img
          src={content.starlinkBackground.mobile}
          alt={content.starlinkBackground.alt}
          className="affordable-internet__image"
        />
      </picture>
    </div>
  );
}
