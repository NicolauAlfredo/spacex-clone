import { useRef, useState } from "react";
import { planOptions } from "../../../../../../../content/starlink/selectPlanModal.content";
import type { PlanOption } from "../../../../../../../types/starlink/selectPlanModal.types";
import { useSelectPlanModal } from "./useSelectPlanModal";
import "./SelectPlanModal.css";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function SelectPlanModal({ isOpen, onClose }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedPlan, setSelectedPlan] =
    useState<PlanOption["id"]>("residential");
  const [address, setAddress] = useState("");

  useSelectPlanModal({ isOpen, onClose, modalRef });

  if (!isOpen) return null;

  return (
    <>
      <div className="select-plan-overlay" onClick={onClose} aria-hidden="true" />
      <div
        ref={modalRef}
        className={`select-plan-modal${selectedPlan === "roam" ? " select-plan-modal--roam" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="select-plan-title"
      >
        <button
          className="select-plan-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 id="select-plan-title" className="select-plan-modal__title">Select a plan.</h2>

        <div className="select-plan-modal__options">
          {planOptions.map((plan) => (
            <button
              key={plan.id}
              className={`select-plan-modal__option${
                selectedPlan === plan.id
                  ? " select-plan-modal__option--active"
                  : ""
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <span className="select-plan-modal__option-title">
                {plan.title}
              </span>
              <span className="select-plan-modal__option-desc">
                {plan.description}
              </span>
            </button>
          ))}
        </div>

        {selectedPlan === "residential" && (
          <>
            <h3 className="select-plan-modal__subtitle">
              Where will you use Starlink?
            </h3>

            <input
              type="text"
              className="select-plan-modal__input"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </>
        )}

        <button
          className={`select-plan-modal__submit${
            selectedPlan === "roam" ? " select-plan-modal__submit--roam" : ""
          }`}
        >
          View Plans
        </button>
      </div>
    </>
  );
}
