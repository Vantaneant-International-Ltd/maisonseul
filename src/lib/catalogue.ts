import type { Copy } from '$lib/i18n';
import { LINE, type LineName } from '$lib/lines';
import {
	CASE, MA_LOOSE, MA_BAGGY, MA_BARREL, TEE, LONG, SHIRT, OVERSHIRT, SHELL, PUFFER, JOGGER,
	PJ_SHIRT, PJ_TROUSER, type Drawing
} from '$lib/drawings';

// Everything the house makes, in one list. The inventory grid and the
// product pages both read from here, so a piece is described once.

export type Cat = 'objects' | 'tops' | 'outer' | 'bottoms' | 'lounge';
export type Piece = { name: string; line: string; price: string; drawing: Drawing };
export type Line = {
	id: string;
	name: LineName;
	cat: Cat;
	href: string; // product page, language-free
	edition: boolean; // numbered edition (SKRIN) or permanent
	oneCard: boolean; // one card in the grid for all pieces (MA fits)
	cardName: string;
	lead: string;
	lead2: string;
	pieces: Piece[];
	colours: string[];
	details: string[];
	backing?: 'case01' | 'ma';
};

export const PRODUCT_IDS = ['ma', 'grund', 'qutn', 'ovol', 'baram', 'si'] as const;

export function catalogue(c: Copy): Line[] {
	const p = c.prices;
	const page = (id: string) => `/inventory/${id}`;
	return [
		{
			id: 'skrin', name: LINE.skrin, cat: 'objects', href: '/skrin', edition: true, oneCard: true,
			cardName: 'Graphite', lead: c.case01.intro ?? '', lead2: '',
			pieces: [{ name: 'Graphite', line: c.case01.variant, price: p.case01, drawing: CASE }],
			colours: ['Graphite'], details: [], backing: 'case01'
		},
		{
			id: 'ma', name: LINE.ma, cat: 'bottoms', href: page('ma'), edition: false, oneCard: true,
			cardName: c.ma.denim, lead: c.ma.lead, lead2: c.ma.lead2,
			pieces: [MA_LOOSE, MA_BAGGY, MA_BARREL].map((drawing, i) => ({
				name: `${['一', '二', '三'][i]} ${c.ma.fits[i]}`, line: c.ma.styles[i], price: p.ma, drawing
			})),
			colours: [], details: [c.ma.fitNote]
		},
		{
			id: 'grund', name: LINE.grund, cat: 'tops', href: page('grund'), edition: false, oneCard: false,
			cardName: '', lead: c.ji.lead, lead2: c.ji.lead2,
			pieces: [
				{ ...c.ji.pieces[0], price: p.jiTee, drawing: TEE },
				{ ...c.ji.pieces[1], price: p.jiLong, drawing: LONG }
			],
			colours: c.ji.colours, details: c.ji.details
		},
		{
			id: 'qutn', name: LINE.qutn, cat: 'tops', href: page('qutn'), edition: false, oneCard: false,
			cardName: '', lead: c.qutn.lead, lead2: c.qutn.lead2,
			pieces: [
				{ ...c.qutn.pieces[0], price: p.qutnPoplin, drawing: SHIRT },
				{ ...c.qutn.pieces[1], price: p.qutnCanvas, drawing: OVERSHIRT }
			],
			colours: c.qutn.colours, details: c.qutn.details
		},
		{
			id: 'ovol', name: LINE.ovol, cat: 'outer', href: page('ovol'), edition: false, oneCard: false,
			cardName: '', lead: c.ovol.lead, lead2: c.ovol.lead2,
			pieces: [
				{ ...c.ovol.pieces[0], price: p.ovolLight, drawing: SHELL },
				{ ...c.ovol.pieces[1], price: p.ovolHeavy, drawing: PUFFER }
			],
			colours: c.ovol.colours, details: c.ovol.details
		},
		{
			id: 'baram', name: LINE.baram, cat: 'bottoms', href: page('baram'), edition: false, oneCard: false,
			cardName: '', lead: c.baram.lead, lead2: c.baram.lead2,
			pieces: [{ ...c.baram.pieces[0], price: p.baram, drawing: JOGGER }],
			colours: c.baram.colours, details: c.baram.details
		},
		{
			id: 'si', name: LINE.si, cat: 'lounge', href: page('si'), edition: false, oneCard: true,
			cardName: c.si.set, lead: c.si.lead, lead2: c.si.lead2,
			pieces: [
				{ ...c.si.pieces[0], price: p.si, drawing: PJ_SHIRT },
				{ ...c.si.pieces[1], price: p.si, drawing: PJ_TROUSER }
			],
			colours: c.si.colours, details: c.si.details
		}
	];
}
