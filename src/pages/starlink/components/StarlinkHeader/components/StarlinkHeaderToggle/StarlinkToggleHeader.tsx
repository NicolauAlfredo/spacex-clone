import { starlinkHeaderToggles } from "../../../../../../content/starlinkheadertoggle.content";
import "./StarlinkToggleHeader.css";

export const HeaderToggle = () => {
  return (
    <div className="header__toggles">
      {starlinkHeaderToggles.map((toggle, index) => (
        <a
          key={toggle.label}
          className={`header__toggles-btn${index === 0 ? " header__toggles-btn--active" : ""}`}
          href={toggle.link}
        >
          {toggle.label}
        </a>
      ))}
    </div>
  );
};
