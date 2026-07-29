import "./Content.css";
import type { ContentProps } from "../../../../types/starlink/Content.types";

export function SectionContent({
  title,
  description,
  classNameTitle,
  classNameText,
}: ContentProps) {
  return (
    <>
      <h2 className={`section__title ${classNameTitle}`}>{title}</h2>
      <p className={`section_description ${classNameText}`}>{description}</p>
    </>
  );
}
