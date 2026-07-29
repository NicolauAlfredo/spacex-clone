import { useEffect, useRef, useState } from "react";
import { planOptions } from "../../../../../../../content/starlink/selectPlanModal.content";
import type { PlanOption } from "../../../../../../../types/starlink/selectPlanModal.types";
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

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const previouslyFocused = document.activeElement as HTMLElement | null;

    function applyHeaderState() {
      if (!isOpen) {
        if (header) {
          header.style.filter = "";
          header.style.display = "";
        }
        return;
      }
      if (!header) return;
      if (window.innerWidth <= 767) {
        header!.style.display = "none";
        header!.style.filter = "";
      } else {
        header!.style.display = "";
        header!.style.filter = "blur(8px)";
      }
    }

    applyHeaderState();
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "instant" });
      modalRef.current?.querySelector<HTMLElement>("button, input")?.focus();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])"),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", applyHeaderState);

    return () => {
      document.body.style.overflow = "";
      if (header) {
        header.style.filter = "";
        header.style.display = "";
      }
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", applyHeaderState);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

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
