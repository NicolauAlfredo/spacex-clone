import "./Content.css";
import type { ContentProps } from "../../types/Content.types";

export function SectionContent({title, description, className}: ContentProps) {
    return (
        <>
                <h1 className={`section__title ${className}`}>{title}</h1>
                <p className={`section_description ${className}`}>{description}</p>
        </>
    )
}