import type { InnerTextProps } from "../../../../../../types/innerText.types";

export function InnerText({
  title,
  paragraph,
  className,
  buttonText,
}: InnerTextProps) {
  return (
    <>
      <h2 className={`${className}__title`}>{title.toUpperCase()}</h2>

      <p className={`${className}__description`}>{paragraph}</p>

      {buttonText && (
        <a className="button button--primary" href="#">
          <span className="button__text">{buttonText}</span>

          <span className="button__icon">
            <svg width="13" height="12" viewBox="0 0 13 12" fill="none">
              <path d="M11.9893 5.58371L12.2471 5.89914L11.9893 6.21555L8.10059 10.9782L7.3252 10.3454L10.5479 6.39914L1.39941 6.39914L1.39941 5.39914L10.5479 5.39914L7.3252 1.45383L8.10059 0.821014L11.9893 5.58371Z" />
            </svg>
          </span>
        </a>
      )}
    </>
  );
}
