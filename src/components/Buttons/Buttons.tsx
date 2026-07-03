import { useState } from "react";
import { StarlinkPlansHome, StarlinkPlansGo } from "./buttons.plans";



type ButtonProps = {
  label: string;
  variant?: "primary" | "ghost";
  href?: string;
};
export const StarlinkButton = ({
  label,
  variant = "primary",
  href,
}: ButtonProps) => {
  return href ? (
    <a href={href} className={`btn btn--${variant}`}>
      {label}
    </a>
  ) : (
    <button className={`btn btn--${variant}`}>{label}</button>
  );
}; // general starlink buttons

export const StarlinkResidentialButton = () => {
  const [residential, setResidential] = useState<"home" | "go">("home");

  return (
    <>
      <div className="starlink-toggle">
        <button
          className={
            residential === "home"
              ? "starlink-toggle__btn starlink-toggle__btn--active"
              : "starlink-toggle__btn"
          }
          onClick={() => setResidential("home")}
        >
          At Home
        </button>

        <button
          className={
            residential === "go"
              ? "starlink-toggle__btn starlink-toggle__btn--active"
              : "starlink-toggle__btn"
          }
          onClick={() => setResidential("go")}
        >
          On the Go
        </button>
      </div>

      {residential === "home" && <StarlinkPlansHome />}
      {residential === "go" && <StarlinkPlansGo />}
    </>
  );
}; // Plans - home & go btns
