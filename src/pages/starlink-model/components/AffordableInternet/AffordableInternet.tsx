import { affordableInternetContent as content } from "../../../../content/affordableInternet.content";
import { formatPrice } from "../../../../utils/formatPrice";
import "./AffordableInternet.css";

export function AffordableInternet() {
  return (
    <div className="starlink-section__content">
      <h1 className="starlink-section__title">{content.title}</h1>
      <p className="starlink-section__label">{content.priceLabel}</p>
      <p className="starlink-section__price">
        {formatPrice(content.price, "en-US", "USD")}
        <span className="starlink-section__subtitle--price">/mo</span>
      </p>
    </div>
  );
}