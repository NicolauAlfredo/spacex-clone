import { moonContactData } from "../../../../content/MoonContact.content";
import "./MoonContact.css";

export function MoonContact() {
  return (
    <section className="moon-contact">
      <div className="moon-contact__divider" />

      <p className="moon-contact__message">{moonContactData.message}</p>

      <a
        className="moon-contact__email"
        href={`mailto:${moonContactData.email}`}
      >
        {moonContactData.email}
      </a>

      <button>{moonContactData.buttonText}</button>
    </section>
  );
}
