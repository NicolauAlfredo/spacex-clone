import type { LanguageOption } from "../types/language.types";
import { getPublicAssetPath } from "../utils/getPublicAssetPath";

export const languageOptions: LanguageOption[] = [
  {
    country: "Italy",
    label: "Italy (EUR €)",
    currencyShort: "EUR €",
    flag: getPublicAssetPath("assets/pages/shopx/languages/italiano.jfif"),
  },
  {
    country: "Australia",
    label: "Australia (AUD $)",
    currencyShort: "AUD $",
    flag: getPublicAssetPath("assets/pages/shopx/languages/australia.jfif"),
  },
  {
    country: "Austria",
    label: "Austria (EUR €)",
    currencyShort: "EUR €",
    flag: getPublicAssetPath("assets/pages/shopx/languages/austria.jfif"),
  },
  {
    country: "Belgium",
    label: "Belgium (EUR €)",
    currencyShort: "EUR €",
    flag: getPublicAssetPath("assets/pages/shopx/languages/belgio.jfif"),
  },
  {
    country: "United States",
    label: "United States (USD $)",
    currencyShort: "USD $",
    flag: getPublicAssetPath("assets/pages/shopx/languages/america.jfif"),
  },
];
