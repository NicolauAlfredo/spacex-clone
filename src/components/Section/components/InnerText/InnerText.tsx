import type { InnerTextProps } from "../../../../types/innerText.types";
import { Button } from "../../../../pages/home/components/Button/Button";

export function InnerText({
  title,
  paragraph,
  className,
  buttonText,
}: InnerTextProps) {
  return (
    <>
      <div className= {`${className}__overlay`}>
        <div className={`${className}__content`}>
          <h2 className={`${className}__title`}>{title.toUpperCase()}</h2>

          {Array.isArray(paragraph) ? (
            paragraph.map((item) => (
              <p key={item.text} className={`${className}__description`}>
                {item.text}

                {item.highlight && (
                  <strong>
                    {' '}
                    {item.highlight}
                  </strong>
                )}
              </p>
            ))
          ) : (
            <p className={`${className}__description`}>{paragraph}</p>
          )}

          {buttonText && <Button href="#" title={buttonText} />}
        </div>
      </div>
    </>
  );
}
