import "./StarlinkButton.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
};

export const StarlinkButton = ({
  label,
  variant = "primary",
  href,
  onClick,
}: ButtonProps) => {
  return href ? (
    <a href={href} className={`btn btn--${variant}`}>
      {label}
    </a>
  ) : (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};