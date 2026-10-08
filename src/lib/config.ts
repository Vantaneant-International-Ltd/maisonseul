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

// Where it is made. One entry per factory. Fill these in as suppliers are
// confirmed; empty fields show "Named before it ships" / "Photographs to
// follow" on the site. Put photographs in static/factories/ and list their
// file names here (for example 'aluminium-1.jpg'). `lines` are the ids in
// src/lib/lines.ts.
export type Factory = {
	lines: ('skrin' | 'ma' | 'grund' | 'qutn' | 'ovol' | 'baram' | 'si')[];
	name: string;
	city: string; // e.g. 'Ningbo, Zhejiang'
	since: string; // e.g. '2004'
	photos: { file: string; alt: string }[];
};
export const FACTORIES: Factory[] = [
	{ lines: ['skrin'], name: '', city: '', since: '', photos: [] },
	{ lines: ['ma'], name: '', city: '', since: '', photos: [] },
	{ lines: ['grund', 'qutn', 'baram'], name: '', city: '', since: '', photos: [] },
	{ lines: ['ovol'], name: '', city: '', since: '', photos: [] },
	{ lines: ['si'], name: '', city: '', since: '', photos: [] }
];
