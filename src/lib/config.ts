// Site-wide settings.
//
// Founding backer checkout links, one per object and currency (for example
// Revolut Business payment links). English and German use the euro links;
// Japanese uses the yen links. While a link is empty, that object's backing
// is taken by email and nothing is charged.
export const PAYMENT_LINKS = {
	case01: { eur: '', jpy: '' },
	ma: { eur: '', jpy: '' }
} as const;

// Founding backers, as they will appear: initials, up to three letters, in
// the order they backed. 100 per object.
export const BACKERS: { case01: string[]; ma: string[] } = {
	case01: [],
	ma: []
};
export const BACKER_CAP = 100;

export const STUDIO_EMAIL = 'studio@maisonseul.com';
