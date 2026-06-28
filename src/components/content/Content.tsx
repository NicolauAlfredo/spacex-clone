import "./Content.css";
import type { ContentProps } from "../../types/Content.types";

export function SectionContent({title, description, classNameTitle, classNameText}: ContentProps) {
    return (
        <>
                <h1 className={`section__title ${classNameTitle}`}>{title}</h1>
                <p className={`section_description ${classNameText}`}>{description}</p>
        </>
    )
}