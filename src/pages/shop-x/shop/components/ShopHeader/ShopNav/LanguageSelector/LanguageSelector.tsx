import { useState } from "react";
import { ChevronDownIcon } from "../ShopIcons/ChevronDownIcon";
import { languageOptions, type LanguageOption } from "./languages";

type LanguageSelectorProps = {
  showFullLabel?: boolean;
};

export function LanguageSelector({
  showFullLabel = false,
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(
    languageOptions[0],
  );

  function handleSelectLanguage(language: LanguageOption) {
    setSelectedLanguage(language);
    setIsOpen(false);
  }

  return (
    <div className="language-selector">
      <button
        className="menu__item-lang"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        onClick={() => setIsOpen((current) => !current)}
      >
        <img
          src={selectedLanguage.flag}
          alt={selectedLanguage.country}
          className="currency-flag"
        />

        <span className="currency-money">
          {showFullLabel
            ? selectedLanguage.label
            : selectedLanguage.currencyShort}
        </span>

        <ChevronDownIcon isOpen={isOpen} />
      </button>

      {isOpen && (
        <ul className="currency-country" role="listbox">
          {languageOptions.map((language) => (
            <li className="currency-country__item" key={language.country}>
              <button
                type="button"
                role="option"
                aria-selected={language.country === selectedLanguage.country}
                onClick={() => handleSelectLanguage(language)}
              >
                <img src={language.flag} alt={language.country} />
                <span>{language.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
