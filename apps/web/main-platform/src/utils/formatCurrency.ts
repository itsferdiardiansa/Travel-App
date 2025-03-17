type FormatCurrencyParams = {
  amount: number
  showCurrencyLabel?: boolean
  currency?: string
  locale?: string
  compact?: boolean
  decimalDigits?: number
}

/**
 * Gets the best locale match for a given currency.
 *
 * @param {string} currency - The currency code (e.g., "IDR", "USD", "EUR").
 * @returns {string} - The detected locale (e.g., "id-ID" for IDR, "en-US" for USD).
 */
const getLocaleFromCurrency = (currency: string): string => {
  try {
    const displayNames = new Intl.DisplayNames(['en'], { type: 'currency' })
    const currencyName = displayNames.of(currency)

    if (currencyName) {
      return new Intl.Locale(navigator.language).toString()
    }
  } catch (error) {
    console.warn(`Could not detect locale for currency: ${currency}`, error)
  }
  return 'en-US'
}

/**
 * Formats a given number into a currency string based on locale and currency settings.
 *
 * @param {object} options - The configuration object for formatting.
 * @param {number} options.amount - The numerical amount to format.
 * @param {string} [options.currency="IDR"] - The currency code (e.g., "IDR", "USD", "EUR").
 * @param {boolean} [options.compact=false] - Whether to use compact notation (e.g., "Rp1,5M").
 * @returns {string} - The formatted currency string.
 *
 * @example
 * formatCurrency({ amount: 1200000 }) // "Rp1.200.000"
 *
 */
export default function formatCurrency({
  amount,
  currency = 'IDR',
  compact = false,
  decimalDigits = 0,
  showCurrencyLabel = true,
  locale,
}: FormatCurrencyParams): string {
  const resolvedLocale = locale || getLocaleFromCurrency(currency)

  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency,
    minimumFractionDigits: decimalDigits ?? (amount % 1 === 0 ? 0 : 2),
    maximumFractionDigits: decimalDigits ?? 2,
    ...(compact && { notation: 'compact', compactDisplay: 'short' }),
  }

  let formattedAmount = new Intl.NumberFormat(resolvedLocale, options).format(
    amount
  )

  // Remove only the currency symbol, keeping compact notation intact
  if (!showCurrencyLabel) {
    const currencySymbol = new Intl.NumberFormat(resolvedLocale, {
      style: 'currency',
      currency,
    })
      .format(0)
      .replace(/[\d.,\s]/g, '')
      .trim()

    formattedAmount = formattedAmount.replace(currencySymbol, '').trim()
  }

  return formattedAmount
}
