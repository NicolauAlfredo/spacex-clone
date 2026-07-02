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

     
    </div>
  );
}
