import { useState } from "react";
import { affordableInternetContent as content } from "../../../../content/starlink/affordableInternet.content";
import { formatPrice } from "../../../../utils/formatPrice";
import { StarlinkButton } from "../StarlinkButton/StarlinkButton";
import "./AffordableInternet.css";
import { SelectPlanModal } from "./components/StarlinkBackground/SelectPlanModal/SelectPlanModal";

export function AffordableInternet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="starlink-section__content">
      <h1 className="starlink-section__title">{content.title}</h1>
      <p className="starlink-section__label">{content.priceLabel}</p>
      <p className="starlink-section__price">
        {formatPrice(content.price, "en-US", "USD")}
        <span className="starlink-section__subtitle--price">/mo</span>
      </p>
      <div className="starlink-section__actions" id="hero-actions">
        <StarlinkButton
          label="Get Started"
          variant="primary"
          onClick={() => setIsModalOpen(true)}
        />
        <StarlinkButton label="View Pricing" href="/pricing" variant="ghost" />
      </div>
      <SelectPlanModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
