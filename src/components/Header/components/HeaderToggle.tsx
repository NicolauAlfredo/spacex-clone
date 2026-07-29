import { CloseIcon } from "./Icons/CloseIcon";
import { HamburgerIcon } from "./Icons/HamburgerIcon";

type HeaderToggleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function HeaderToggle({ isOpen, onToggle }: HeaderToggleProps) {
  return (
    <button
      className="header__toggle"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="header-navigation"
      onClick={onToggle}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
}
