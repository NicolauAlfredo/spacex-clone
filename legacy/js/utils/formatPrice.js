/**
 * Format a number as currency.
 *
 * @param {number} value
 * @param {string} locale
 * @param {string} currency
 * @returns {string}
 */
export function formatPrice(
    value,
    locale = "it-IT",
    currency = "EUR",
) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(value);
}