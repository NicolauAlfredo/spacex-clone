import "./Plans.css";

import { SectionContent } from "../content/Content";
import { formatPrice } from "../../../../utils/formatPrice";
import type { StarlinkPlanGroup } from "../../../../types/starlink/starlinkplans.types";

type Props = {
  group: "home" | "go";
  content: StarlinkPlanGroup;
};

export function StarlinkPlansGroup({ group, content }: Props) {
  return (
    <div className="starlink-plans__group" data-group={group}>
      <div className="starlink-plans__background" />

      <div className="starlink-plans__cards">
        {content.plans.map((plan) => (
          <div className="starlink-section__content" key={plan.title}>
            <SectionContent
              title={plan.title}
              description={plan.description}
              classNameTitle="starlink-section__title"
              classNameText="starlink-section__label"
            />
            {plan.features && (
              <ul className="starlink-section__list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="starlink-section__price-container">
              <p className="starlink-section__subtitle">{plan.priceLabel}</p>
              <p className="starlink-section__subtitle--price">
                <span className="starlink-section__price">
                  {formatPrice(plan.price, "en-US", "USD")}
                </span>
                <span className="mo_class">/mo</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="starlink-section--plans__footer">{content.footer}</p>
    </div>
  );
}
