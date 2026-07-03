/**
 * Format a number as currency.
 *
 * @param value
 * @param locale
 * @param currency
 * @returns formatted currency string
 */
export function formatPrice(
  value: number,
  locale: string = "it-IT",
  currency: string = "EUR",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    minimumFractionDigits: 0,   
    maximumFractionDigits: 0, 
    currency,
  }).format(value);
}
