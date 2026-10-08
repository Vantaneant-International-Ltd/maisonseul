// Site-wide settings.
//
// Founding backer checkout links, one per object and currency (for example
// Revolut Business payment links). Each language uses the link for its own currency (euro for English, German;
// yen for Japanese; and so on). While a link is empty, that object's backing
// is taken by email and nothing is charged.
import type { Currency } from '$lib/prices';
export const PAYMENT_LINKS: Record<'case01' | 'ma', Partial<Record<Currency, string>>> = {
	case01: { eur: '', jpy: '' },
	ma: { eur: '', jpy: '' }
};

// Founding backers, as they will appear: initials, up to three letters, in
// the order they backed. 100 per object.
export const BACKERS: { case01: string[]; ma: string[] } = {
	case01: [],
	ma: []
};
export const BACKER_CAP = 100;

export const STUDIO_EMAIL = 'studio@maisonseul.com';
