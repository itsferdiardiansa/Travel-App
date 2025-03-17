/**
 * Converts a given text into a URL-friendly slug.
 *
 * @param {string} text - The input text to convert.
 * @param {object} [options] - Optional configurations for slug generation.
 * @param {boolean} [options.lowercase=true] - Whether to convert the text to lowercase.
 * @param {boolean} [options.removeStopWords=false] - Whether to remove common stop words.
 * @param {number} [options.maxLength=100] - Maximum length of the slug.
 * @returns {string} - The generated slug.
 *
 * @example
 * generateSlug("HARRIS Hotel & Conventions Bundaran Satelit Surabaya")
 * // Output: "harris-hotel-conventions-bundaran-satelit-surabaya"
 *
 * generateSlug("Café de l'Étoile! #Paris", { maxLength: 20 })
 * // Output: "cafe-de-letoile"
 */
export default function generateSlug(
  text: string,
  options?: {
    lowercase?: boolean
    removeStopWords?: boolean
    maxLength?: number
  }
): string {
  const {
    lowercase = true,
    removeStopWords = false,
    maxLength = 100,
  } = options || {}

  const stopWords = new Set([
    'and',
    'or',
    'but',
    'the',
    'a',
    'an',
    'of',
    'in',
    'to',
    'with',
    'on',
    'for',
    'at',
    'by',
    'from',
  ])

  let slug = text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .trim()
    .split(/\s+/)

    // Optional: Remove stop words
    .filter(word => !removeStopWords || !stopWords.has(word.toLowerCase()))

    .join('-')
    .replace(/-+/g, '-')
    .slice(0, maxLength)

  return lowercase ? slug.toLowerCase() : slug
}
