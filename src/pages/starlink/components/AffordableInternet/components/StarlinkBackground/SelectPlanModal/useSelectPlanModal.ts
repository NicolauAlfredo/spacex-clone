import { useEffect, type RefObject } from "react";

type UseSelectPlanModalOptions = {
  isOpen: boolean;
  onClose: () => void;
  modalRef: RefObject<HTMLDivElement | null>;
};

export function useSelectPlanModal({
  isOpen,
  onClose,
  modalRef,
}: UseSelectPlanModalOptions) {
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
        header.style.display = "none";
        header.style.filter = "";
      } else {
        header.style.display = "";
        header.style.filter = "blur(8px)";
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
        modalRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex='-1'])",
        ),
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
  }, [isOpen, modalRef, onClose]);
}
