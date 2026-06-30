type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
};

export function Button ({children, onClick , variant = "primary"}: ButtonProps) {
const buttonClassName = `btn btn--${variant}`
return <button className={buttonClassName}  onClick={onClick}>{children}</button>



}