import { describe, it, expect } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
	it('formats a date correctly with default locale', () => {
		// Create a specific date for testing (January 1, 2023)
		const testDate = new Date(2023, 0, 1);
		
		// Format the date
		const formattedDate = formatDate(testDate);
		
		// Check that it matches the expected format for en-US locale
		expect(formattedDate).toBe('January 1, 2023');
	});
	
	it('formats a date correctly with custom locale', () => {
		// Create a specific date for testing (January 1, 2023)
		const testDate = new Date(2023, 0, 1);
		
		// Format the date with fr-FR locale
		const formattedDate = formatDate(testDate, 'fr-FR');
		
		// Check that it matches the expected format for fr-FR locale
		expect(formattedDate).toBe('1 janvier 2023');
	});
});