import { useState } from "react";
import { StarlinkPlansGroup } from "../../Plans";
import { starlinkPlansHome, starlinkPlansGo } from "../../../../../../content/starlinkplans.content";
import "./StarlinkPlansButtons.css";

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

      {residential === "home" && (
        <StarlinkPlansGroup group="home" content={starlinkPlansHome} />
      )}
      {residential === "go" && (
        <StarlinkPlansGroup group="go" content={starlinkPlansGo} />
      )}
    </>
  );
};