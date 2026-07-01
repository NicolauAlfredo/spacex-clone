type ChevronDownIconProps = {
  isOpen?: boolean;
};

export function ChevronDownIcon({ isOpen = false }: ChevronDownIconProps) {
  return (
    <svg
      className={`menu__item-chevron-down ${
        isOpen ? "menu__item-chevron-down--open" : ""
      }`}
      aria-hidden="true"
      focusable="false"
      fill="none"
      width="10"
      viewBox="0 0 10 10"
    >
      <path d="m1 3 4 4 4-4" stroke="currentColor" strokeLinecap="square" />
    </svg>
  );
}
