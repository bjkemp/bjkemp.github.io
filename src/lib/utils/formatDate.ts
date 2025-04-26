/**
 * Formats a date into a readable string
 * @param date - Date to format
 * @param locale - Locale to use for formatting (defaults to 'en-US')
 * @returns Formatted date string
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
	return new Intl.DateTimeFormat(locale, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}).format(date);
}