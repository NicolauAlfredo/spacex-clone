import "./HorizontalDivider.css";

type HorizontalDividerProps = {
  className?: string;
};

function HorizontalDivider({ className = "" }: HorizontalDividerProps) {
  return (
    <div className={`horizontal-divider ${className}`} aria-hidden="true" />
  );
}

export default HorizontalDivider;
