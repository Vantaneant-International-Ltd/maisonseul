// Languages and all page text. English, German and Japanese are written by
// hand here; Korean, Chinese, Arabic, Mongolian and Swedish are machine
// translations in src/lib/copy/ and need a native read before promotion.
//
// English is the source. German and Japanese were written alongside it and
// should be read by a native speaker before they are promoted.

import { LANGS, P, type Lang } from '$lib/prices';
import { ko } from '$lib/copy/ko';
import { zh } from '$lib/copy/zh';
import { ar } from '$lib/copy/ar';
import { mn } from '$lib/copy/mn';
import { sv } from '$lib/copy/sv';

export { LANGS, type Lang };

// Native names, shown in the language menu.
export const LANG_LABEL: Record<Lang, string> = {
	en: 'English',
	de: 'Deutsch',
	ja: '日本語',
	ko: '한국어',
	zh: '中文',
	ar: 'العربية',
	mn: 'Монгол',
	sv: 'Svenska'
};
// Short codes for the closed menu button.
export const LANG_CODE: Record<Lang, string> = { en: 'EN', de: 'DE', ja: 'JA', ko: 'KO', zh: 'ZH', ar: 'AR', mn: 'MN', sv: 'SV' };
// Machine-translated languages, flagged in the menu until a native speaker has read them.
export const MACHINE: Lang[] = ['ko', 'zh', 'ar', 'mn', 'sv'];
export const RTL: Lang[] = ['ar'];
export const SITE = 'https://maisonseul.com';

// Pages that exist in every language. Anything else (shipping, register) is
// English only and hidden until sales open.
export const TRANSLATED = ['/', '/skrin', '/inventory', '/permanent', '/house', '/care', '/backers', '/contact'];

export function langOf(param: string | undefined): Lang {
	return (LANGS as string[]).includes(param ?? '') ? (param as Lang) : 'en';
}

/** A path in the given language: /skrin -> /de/skrin */
export function lp(lang: Lang, path: string): string {
	if (lang === 'en') return path;
	return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** The language-free path of a URL: /de/skrin -> /skrin */
export function basePath(pathname: string): string {
	const m = pathname.match(/^\/(de|ja|ko|zh|ar|mn|sv)(\/.*)?$/);
	const p = m ? (m[2] ?? '/') : pathname;
	return p.replace(/\/$/, '') || '/';
}

/** Where the language switch should go from the current page. */
export function switchHref(pathname: string, target: Lang): string {
	const b = basePath(pathname);
	return lp(target, TRANSLATED.includes(b) ? b : '/');
}

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------
const en = {
	prices: P.en,
	taxNote: 'VAT included',
	bar: 'Designed in Dublin. Made in China.',
	photo: 'Photograph to follow',
	nav: { inventory: 'Inventory', permanent: 'Permanent', house: 'The house', care: 'Care', contact: 'Contact', back: 'Backers', language: 'Language' },
	foot: {
		objects: 'Objects',
		lines: 'The lines',
		permanent: 'Permanent',
		ma: 'MA, denim',
		ji: 'GRUND, T-shirts',
		ovol: 'ÖVÖL, jackets',
		baram: 'BARAM, joggers',
		qutn: 'QUTN, shirts',
		house: 'The house',
		care: 'Care and repair',
		back: 'Founding backers',
		contact: 'Contact',
		tagline: 'A VNTA house. Dublin.',
		legal:
			'Apple, MacBook, MacBook Air, MacBook Pro, AirPods and AirTag are trademarks of Apple Inc. Maison Seul is not affiliated with or endorsed by Apple.'
	},
	home: {
		title: 'Maison Seul',
		description: 'Maison Seul. Singular objects. Designed in Dublin.',
		tagline: 'Singular objects.'
	},
	case01: {
		title: 'SKRIN / Maison Seul',
		description: 'SKRIN. An aluminium cabin case. Edition 001, one hundred pieces. One hundred founding backers.',
		kicker: 'Object 01 / Cabin case',
		variant: 'Graphite / Edition 001 / 100 pieces',
		status: 'Not on sale yet.',
		backNote: 'One hundred founding backers make SKRIN possible. Each receives a case, and their initials are engraved inside every SKRIN ever made.',
		cta: `Become a founding backer, ${P.en.case01Back}`,
		backersTitle: 'Founding backers',
		backersText: 'Their initials are engraved on a plate inside the lid of every SKRIN ever made. Every ownership card names them and says why.',
		note: 'Made once in this finish. Numbered 001 to 100 inside the lid.',
		viewsLabel: 'Views',
		views: ['Front', 'Three-quarter', 'Raw corner', 'Interior', 'Serial plate'],
		followSuffix: 'Photograph to follow.',
		introTitle: 'One case. Nothing else.',
		intro:
			'An aluminium cabin case with no logo, one raw corner, and room built in for what you already carry. It is the first object from Maison Seul.',
		carryTitle: 'Made for what you carry',
		carrySub: 'MacBook, AirTag, charger. Each has its place.',
		carry: [
			{ title: 'MacBook sleeve', text: 'A padded sleeve in the lid, sized for MacBook Pro 16-inch and anything smaller.' },
			{ title: 'AirTag pocket', text: 'A hidden pocket inside the frame. Drop an AirTag in once and forget it is there.' },
			{ title: 'Cable pocket', text: 'A flat zip pocket for a charger, cables and AirPods, so nothing rolls loose.' }
		],
		reasonsLabel: 'Details',
		reasons: [
			{ title: 'One raw corner.', text: 'Seven corners in graphite. One left in raw aluminium.' },
			{ title: 'Four screws.', text: 'Every wheel comes off with a screwdriver.' },
			{ title: 'It will mark.', text: 'Aluminium keeps every trip. That is the point.' },
			{ title: 'No logo.', text: 'Your number, engraved small beside the handle.' }
		],
		specsTitle: 'Details',
		specs: [
			{
				label: 'Details',
				lines: [
					'Aluminium frame, two latches, no zip',
					'TSA-accepted combination locks',
					'Four double spinner wheels, replaceable',
					'Telescopic handle, replaceable'
				]
			},
			{
				label: 'Size and weight',
				lines: [
					'55 × 40 × 20 cm (21.7 × 15.7 × 7.9 in), wheels and handles included',
					'Weight and capacity confirmed with the first sample'
				]
			},
			{
				label: 'Compatibility',
				lines: [
					'MacBook Pro 16-inch, 14-inch and MacBook Air in the lid sleeve',
					'One AirTag in the frame pocket. AirTag not included',
					'Cabin size limits of Ryanair (paid cabin bag), Aer Lingus, Lufthansa and British Airways',
					'Lufthansa allows 8 kg in total, which leaves about 3.7 kg for your things. Airline rules change, so check before you fly'
				]
			},
			{ label: 'Finish', lines: ['Graphite, matte anodised', 'One corner in raw aluminium'] },
			{ label: 'Materials', lines: ['Aluminium-magnesium shell and frame', 'Polyester lining, pale grey'] },
			{ label: 'In the box', lines: ['SKRIN', 'Dust cover', 'Ownership card with your number', 'Care and repair card'] },
			{
				label: 'Returns and warranty',
				lines: [
					'14 days to return it unused, for a full refund',
					'5 years on shell, frame, wheels, handle and latches. Dents and scratches are not covered'
				]
			}
		],
		faqTitle: 'Questions',
		faq: [
			{
				q: 'Where is it made?',
				a: 'Designed in Dublin. Made in China, by one specialist aluminium factory, which we will name here before anything ships. Every batch is inspected before it leaves.'
			},
			{
				q: 'What happens when the hundred are gone?',
				a: 'Graphite is not made again. SKRIN continues in a new finish, and parts stay in stock for every edition.'
			},
			{
				q: 'What is a founding backer?',
				a: `One of 100 people who fund SKRIN before it exists. For ${P.en.case01Back} you receive a case when it is ready, your initials are engraved inside every SKRIN ever made, and your name is on every ownership card. If it never ships, you get your money back.`
			},
			{
				q: 'Is Maison Seul part of Apple?',
				a: 'No. We design around Apple devices because most of the people we design for carry them.'
			}
		],
		trustLabel: 'Promises',
		trust: ['Designed in Dublin, made in China', 'Numbered editions', 'Repairable', '14-day returns']
	},
	ma: {
		title: 'Permanent / Maison Seul',
		description: 'The permanent collection. MA, denim in three fits: 一, 二, 三. GRUND, a T-shirt and longsleeve. ÖVÖL, a light and a heavy jacket. QUTN, poplin and canvas shirts. BARAM, balloon joggers. SĪ, a silk lounge set.',
		kicker: 'Permanent collection',
		lead: 'Denim in three fits, numbered by how much space they leave: 一, 二 and 三. Ma is the Japanese word for the space between things. Here it is the space between the cloth and you.',
		lead2: 'Nineties Tokyo proportions, redrawn with the lines of a building. Not an edition. Made continuously, and always there.',
		stylesLabel: 'The three fits',
		denim: 'Denim',
		fitLabel: 'Fit',
		fits: ['Straight', 'Wide', 'Barrel'],
		fitNote: 'The number is the amount of ma: the space between the cloth and you.',
		styles: [
			'Straight from hip to hem, with room all the way down.',
			'Low and wide. The hem breaks over the shoe.',
			'Curved out through the knee, drawn back in at the hem.'
		],
		outline: 'outline',
		price: 'Price',
		status: 'Status',
		statusValue: 'In development',
		arrives: 'Arrives',
		arrivesValue: 'When it is ready.',
		edition: 'Edition',
		editionValue: 'None. Permanent.',
		cta: `Become a founding backer, ${P.en.maBack}`,
		backersTitle: 'Founding backers',
		backersText: 'One hundred founding backers make MA possible. Their initials are woven into a pattern we design, inside every pair of MA ever made. Each backer receives a pair, in the style and size they choose, when it is ready.'
	},
	ji: {
		title: 'GRUND',
		lead: 'A T-shirt and a longsleeve. Grund is German for ground, and for foundation. The layer everything else stands on.',
		lead2: 'The proportions of a nineties jeans T-shirt: boxy, a dropped shoulder, a short straight body. Cut with German restraint: exact lengths, a close neck, nothing printed on the outside.',
		pieces: [
			{ name: 'Tee', line: 'Short sleeve to the elbow. Hem sits at the hip.' },
			{ name: 'Longsleeve', line: 'Long cuff that stacks at the wrist. Same body.' }
		],
		coloursLabel: 'Three colours',
		colours: ['Unlit', 'Concrete', 'Blinding White'],
		detailsLabel: 'Made like this',
		details: [
			'240 g heavy cotton jersey, knitted as a tube: no side seams.',
			'Narrow ribbed neck that keeps its shape.',
			'No logo outside. The name is printed inside, at the neck.'
		],
		priceTee: 'Tee',
		priceLong: 'Longsleeve'
	},
	ovol: {
		lead: 'Two jackets. Övöl is Mongolian for winter, written ӨВӨЛ. Ulaanbaatar is the coldest capital on earth; these are cut for days like its days.',
		lead2: 'Light keeps out wind and rain and packs into its own pocket. Heavy is filled with down, for real cold. Same boxy shoulders, same long back, nothing printed on the outside.',
		pieces: [
			{ name: 'Light', line: 'A hooded shell. Taped seams, two-way zip.' },
			{ name: 'Heavy', line: 'Down-filled, with a high collar and wide baffles.' }
		],
		coloursLabel: 'Two colours',
		colours: ['Unlit', 'Concrete'],
		details: [
			'Light: a waterproof, breathable three-layer shell.',
			'Heavy: down fill under a water-repellent face.',
			'Pockets sized for a phone and gloves. The name is printed inside.'
		]
	},
	baram: {
		lead: 'Joggers. Baram is Korean for wind, written 바람. The leg fills with air like a sail.',
		lead2: 'Wide through the thigh and knee, then narrowing to an open hem, so the leg balloons and falls over the shoe. No cuff. A drawcord waist that sits low.',
		pieces: [{ name: 'Jogger', line: 'One cut. Balloon leg, open hem.' }],
		coloursLabel: 'Two colours',
		colours: ['Unlit', 'Concrete'],
		details: [
			'400 g cotton fleece, brushed inside.',
			'Deep side pockets and one back pocket.',
			'No logo outside. The name is printed inside the waistband.'
		]
	},
	qutn: {
		lead: 'Shirts. Qutn is Arabic for cotton, written قطن. The English word cotton comes from it, and the long-staple cotton that makes the finest poplin grows along the Nile.',
		lead2: 'The proportions of a nineties shirt: boxy, a dropped shoulder, a long straight hem worn in or out. Buttons hidden under a plain placket. No pocket, no logo.',
		pieces: [
			{ name: 'Poplin', line: 'Crisp and light. Worn on its own.' },
			{ name: 'Canvas', line: 'Heavier, worn open as an overshirt.' }
		],
		coloursLabel: 'Three colours',
		colours: ['Blinding White', 'Unlit', 'Concrete'],
		details: [
			'Poplin: tightly woven two-ply cotton.',
			'Canvas: a dense cotton canvas that softens with wear.',
			'Concealed placket. The name is printed inside the yoke.'
		]
	},
	inventory: {
		title: 'Inventory / Maison Seul',
		description: 'Everything Maison Seul makes, in one place. One object in a numbered edition, and garments that stay.',
		kicker: 'Inventory',
		h1: 'Everything, in one place.',
		lead: 'One object in a numbered edition. Garments that stay, in sizes for men and women. Nothing is on sale yet.',
		filterLabel: 'Show',
		cats: { all: 'All', objects: 'Objects', tops: 'Tops', outer: 'Outerwear', bottoms: 'Bottoms', lounge: 'Loungewear' },
		edition: 'Edition 001 / 100',
		permanent: 'Permanent',
		pieces: '{n} pieces',
		sortLabel: 'Order',
		sortNo: 'By number',
		sortLow: 'Price ↑',
		sortHigh: 'Price ↓'
	},
	si: {
		lead: 'Loungewear. Sī is Chinese for silk, written 絲. Silk was first woven in China, more than five thousand years ago.',
		lead2: 'One set, for men and women: a shirt with an open collar and a drawstring trouser, piped at every edge. One colour, graphite, the grey-black of a room before the lights come on.',
		pieces: [
			{ name: 'Shirt', line: 'Open collar, one chest pocket, piped edges.' },
			{ name: 'Trouser', line: 'Drawstring waist, straight relaxed leg.' }
		],
		coloursLabel: 'One colour',
		colours: ['Graphite'],
		details: [
			'Sand-washed silk: soft and matte rather than shiny.',
			'Sold as a set. Sizes for men and women.',
			'The name is printed inside the collar.'
		],
		set: 'Set'
	},
	house: {
		title: 'The house / Maison Seul',
		description: 'Maison Seul is a design house in Dublin. One object at a time.',
		kicker: 'The house',
		h1: 'Fewer things. Better things.',
		lead: 'Maison Seul is a design house in Dublin. We make one object at a time, and keep each one repairable for as long as you own it.',
		sections: [
			{
				h: 'One object at a time',
				p: ['Nothing is made to fill a catalogue. SKRIN is the first object. MA (denim), GRUND (T-shirts), QUTN (shirts), ÖVÖL (jackets), BARAM (joggers) and SĪ (loungewear) follow, each named in the language of the place that shaped it.']
			},
			{
				h: 'Editions and the permanent collection',
				p: [
					'Some objects come in numbered editions. Each finish is made once, in a set number, and every piece carries its number inside. The design stays; the next edition comes in a new finish.',
					'Others are permanent. They are made continuously, never numbered and never discontinued, so the pair you buy now is still there when you need another.'
				]
			},
			{
				h: 'Kept longer',
				p: [
					'Every part that wears can be replaced, and we keep those parts in stock for every edition. Dents and scratches are not faults. Aluminium keeps a record of where it has been.'
				]
			},
			{
				h: 'Where it is made',
				p: [
					'Designed in Dublin. Made in China. For now, everything we make is made there: SKRIN by one specialist aluminium factory, MA and GRUND by garment makers we will choose with the same care. We will name each factory here before anything ships, and we inspect every batch before it leaves.', 'We would rather tell you where it is made than leave you to guess. If that changes, this page changes first.'
				]
			},
			{ h: 'Part of VNTA', p: ['Maison Seul is a VNTA house.'] }
		]
	},
	care: {
		title: 'Care and repair / Maison Seul',
		description: 'How to care for SKRIN, replace its parts, and get it repaired.',
		kicker: 'Care and repair',
		h1: 'Four screws, and the parts to go with them.',
		lead: 'The wheels, handle and latches come off with a screwdriver. We keep the parts for every edition, so SKRIN can be kept going rather than replaced.',
		everydayTitle: 'Everyday care',
		everyday: [
			'Wipe the shell with a soft damp cloth. A little mild soap if needed. Nothing abrasive.',
			'Wipe the lining with a damp cloth. Let it dry open.',
			'Store it empty, closed and upright, out of direct sun.',
			'Dents and scratches are part of aluminium. They are not covered as faults, and we will not pretend they will not happen.'
		],
		wheelTitle: 'Replace a wheel',
		wheel: [
			'Empty the case and lay it on its back.',
			'Undo the four screws that hold the wheel, using a screwdriver.',
			'Lift the old wheel away.',
			'Fit the new wheel and tighten the four screws evenly. Do not overtighten.'
		],
		wheelAfter: 'The handle, latches and feet come off the same way. A full guide comes with the case.',
		partsTitle: 'Spare parts',
		partsHead: ['Part', 'Note'],
		parts: [
			['Double spinner wheel', 'One corner. Four screws.'],
			['Telescopic handle', 'Complete unit.'],
			['Latch with combination lock', 'One latch.'],
			['Corner guard', 'Graphite or raw aluminium.'],
			['Foot', 'Set of two.']
		],
		partsAfter: 'Free within the 5-year warranty. After that, sold at cost plus postage. Prices are published when sales open.',
		repairTitle: 'Repair by us',
		repairBefore: 'Email',
		repairAfter: 'with your serial number and a photo of the problem. We will send the part, or arrange a repair if it needs one.'
	},
	backers: {
		title: 'Founding backers / Maison Seul',
		description: 'One hundred founding backers per object. Your object when it is ready, and your initials in every one ever made.',
		kicker: 'Founding backers',
		h1: 'Make it possible.',
		lead: 'Maison Seul is funded by the people who want its objects to exist. One hundred founding backers per object. In return, you become part of the object, for good.',
		count: '{n} of 100 backers',
		noneYet: 'None yet. Be the first.',
		items: {
			case01: {
				sub: 'Aluminium cabin case. Edition 001.',
				gives: [
					'A SKRIN, when it is ready',
					"Your initials, up to three letters, engraved on the backers' plate inside every SKRIN ever made",
					'Your name and the reason on every ownership card'
				],
				cta: `Back SKRIN, ${P.en.case01Back}`
			},
			ma: {
				sub: 'Denim in three styles. Permanent.',
				gives: [
					'A pair of MA in your style and size, when it is ready',
					'Your initials woven into the MA pattern, inside every pair ever made',
					'Your name and the reason on every ownership card'
				],
				cta: `Back MA, ${P.en.maBack}`
			}
		},
		amountLabel: 'Founding backer',
		termsTitle: 'The terms, plainly',
		terms: [
			'When: when it is ready. No date is promised, and we write to backers at every stage.',
			'If it never ships, you get all your money back.',
			'You can ask for a full refund at any time before your object ships. If production has started, your initials may already be in made pieces.',
			'Backing is a pre-order at a founding price, not an investment. It gives no share in the company.',
			'One hundred backers per object. One backing per person, per object.',
			`Normal prices when sales open: SKRIN ${P.en.case01}, MA ${P.en.ma}.`
		],
		paidNote: 'Payment is handled on a secure checkout page.',
		emailNote: 'Checkout opens shortly. Until then, email us to put your name down. Nothing is charged.',
		emailCta: 'Put my name down',
		emailSubject: 'Founding backer',
		emailBody: 'I would like to become a founding backer.\n\nObject: SKRIN / MA (delete one)\nInitials (up to 3 letters):\nName:\n'
	},
	contact: {
		title: 'Contact / Maison Seul',
		description: 'Contact Maison Seul.',
		kicker: 'Contact',
		h1: 'One address.',
		reply: 'Answered by a person.',
		repairTitle: 'For a repair or a part',
		repair: 'Include your serial number and a photo. It is on the plate inside the lid.'
	}
};

export type Copy = typeof en;

// ---------------------------------------------------------------------------
// German
// ---------------------------------------------------------------------------
const de: Copy = {
	prices: P.de,
	taxNote: 'inkl. MwSt.',
	bar: 'Entworfen in Dublin. Gefertigt in China.',
	photo: 'Foto folgt',
	nav: { inventory: 'Inventar', permanent: 'Permanent', house: 'Das Haus', care: 'Pflege', contact: 'Kontakt', back: 'Unterstützer', language: 'Sprache' },
	foot: {
		objects: 'Objekte',
		lines: 'Die Linien',
		permanent: 'Ständige Kollektion',
		ma: 'MA, Denim',
		ji: 'GRUND, T-Shirts',
		ovol: 'ÖVÖL, Jacken',
		baram: 'BARAM, Jogger',
		qutn: 'QUTN, Hemden',
		house: 'Das Haus',
		care: 'Pflege und Reparatur',
		back: 'Gründungsunterstützer',
		contact: 'Kontakt',
		tagline: 'Ein Haus von VNTA. Dublin.',
		legal:
			'Apple, MacBook, MacBook Air, MacBook Pro, AirPods und AirTag sind Marken der Apple Inc. Maison Seul ist nicht mit Apple verbunden und wird nicht von Apple unterstützt.'
	},
	home: {
		title: 'Maison Seul',
		description: 'Maison Seul. Einzigartige Objekte. Entworfen in Dublin.',
		tagline: 'Einzigartige Objekte.'
	},
	case01: {
		title: 'SKRIN / Maison Seul',
		description: 'SKRIN. Ein Kabinenkoffer aus Aluminium. Edition 001, hundert Stück. Hundert Gründungsunterstützer.',
		kicker: 'Objekt 01 / Handgepäck',
		variant: 'Graphit / Edition 001 / 100 Stück',
		status: 'Noch nicht im Verkauf.',
		backNote: 'Hundert Gründungsunterstützer machen SKRIN möglich. Jeder erhält einen Koffer, und ihre Initialen werden in jeden SKRIN graviert, der je gefertigt wird.',
		cta: `Gründungsunterstützer werden, ${P.de.case01Back}`,
		backersTitle: 'Gründungsunterstützer',
		backersText: 'Ihre Initialen sind auf einer Plakette im Deckel jedes je gefertigten SKRIN graviert. Jede Eigentümerkarte nennt sie und sagt, warum.',
		note: 'In dieser Ausführung nur einmal gefertigt. Im Deckel nummeriert, 001 bis 100.',
		viewsLabel: 'Ansichten',
		views: ['Vorne', 'Dreiviertel', 'Rohe Ecke', 'Innen', 'Seriennummer'],
		followSuffix: 'Foto folgt.',
		introTitle: 'Ein Koffer. Sonst nichts.',
		intro:
			'Ein Kabinenkoffer aus Aluminium, ohne Logo, mit einer rohen Ecke und Platz für das, was Sie ohnehin dabeihaben. Das erste Objekt von Maison Seul.',
		carryTitle: 'Gemacht für das, was Sie tragen',
		carrySub: 'MacBook, AirTag, Ladegerät. Alles hat seinen Platz.',
		carry: [
			{ title: 'MacBook-Fach', text: 'Ein gepolstertes Fach im Deckel, passend für MacBook Pro 16 Zoll und kleiner.' },
			{ title: 'AirTag-Tasche', text: 'Eine verborgene Tasche im Rahmen. Einmal ein AirTag hinein, dann vergessen.' },
			{ title: 'Kabeltasche', text: 'Eine flache Reißverschlusstasche für Ladegerät, Kabel und AirPods. Nichts rollt lose herum.' }
		],
		reasonsLabel: 'Details',
		reasons: [
			{ title: 'Eine rohe Ecke.', text: 'Sieben Ecken in Graphit. Eine bleibt rohes Aluminium.' },
			{ title: 'Vier Schrauben.', text: 'Jedes Rad lässt sich mit einem Schraubendreher abnehmen.' },
			{ title: 'Er wird Spuren tragen.', text: 'Aluminium behält jede Reise. Genau darum geht es.' },
			{ title: 'Kein Logo.', text: 'Ihre Nummer, klein neben dem Griff graviert.' }
		],
		specsTitle: 'Details',
		specs: [
			{
				label: 'Details',
				lines: [
					'Aluminiumrahmen, zwei Verschlüsse, kein Reißverschluss',
					'TSA-zugelassene Zahlenschlösser',
					'Vier Doppel-Spinnerrollen, austauschbar',
					'Teleskopgriff, austauschbar'
				]
			},
			{
				label: 'Größe und Gewicht',
				lines: [
					'55 × 40 × 20 cm, inklusive Rollen und Griffen',
					'Gewicht und Volumen werden mit dem ersten Muster bestätigt'
				]
			},
			{
				label: 'Kompatibilität',
				lines: [
					'MacBook Pro 16 Zoll, 14 Zoll und MacBook Air im Deckelfach',
					'Ein AirTag in der Rahmentasche. AirTag nicht enthalten',
					'Handgepäckmaße von Ryanair (kostenpflichtiges Kabinengepäck), Aer Lingus, Lufthansa und British Airways',
					'Lufthansa erlaubt insgesamt 8 kg, es bleiben also etwa 3,7 kg für Ihre Sachen. Die Regeln der Airlines ändern sich, prüfen Sie sie vor dem Flug'
				]
			},
			{ label: 'Oberfläche', lines: ['Graphit, matt eloxiert', 'Eine Ecke aus rohem Aluminium'] },
			{ label: 'Material', lines: ['Schale und Rahmen aus Aluminium-Magnesium', 'Innenfutter aus Polyester, hellgrau'] },
			{ label: 'Lieferumfang', lines: ['SKRIN', 'Staubhülle', 'Eigentümerkarte mit Ihrer Nummer', 'Pflege- und Reparaturkarte'] },
			{
				label: 'Rückgabe und Garantie',
				lines: [
					'14 Tage Rückgabe, unbenutzt, mit voller Erstattung',
					'5 Jahre auf Schale, Rahmen, Rollen, Griff und Verschlüsse. Dellen und Kratzer sind nicht abgedeckt'
				]
			}
		],
		faqTitle: 'Fragen',
		faq: [
			{
				q: 'Wo wird er hergestellt?',
				a: 'Entworfen in Dublin. Gefertigt in China, von einer spezialisierten Aluminiummanufaktur, die wir hier nennen, bevor etwas versendet wird. Jede Charge wird vor dem Versand geprüft.'
			},
			{
				q: 'Was passiert, wenn alle hundert vergeben sind?',
				a: 'Graphit wird nicht wieder hergestellt. SKRIN geht in einer neuen Ausführung weiter, und Ersatzteile bleiben für jede Edition auf Lager.'
			},
			{
				q: 'Was ist ein Gründungsunterstützer?',
				a: `Einer von 100 Menschen, die SKRIN finanzieren, bevor es ihn gibt. Für ${P.de.case01Back} erhalten Sie einen Koffer, sobald er fertig ist, Ihre Initialen werden in jeden je gefertigten SKRIN graviert, und Ihr Name steht auf jeder Eigentümerkarte. Wird er nie ausgeliefert, erhalten Sie Ihr Geld zurück.`
			},
			{
				q: 'Gehört Maison Seul zu Apple?',
				a: 'Nein. Wir gestalten rund um Apple-Geräte, weil die meisten Menschen, für die wir gestalten, sie dabeihaben.'
			}
		],
		trustLabel: 'Versprechen',
		trust: ['Entworfen in Dublin, gefertigt in China', 'Nummerierte Editionen', 'Reparierbar', '14 Tage Rückgabe']
	},
	ma: {
		title: 'Ständige Kollektion / Maison Seul',
		description: 'Die ständige Kollektion. MA, Denim in drei Passformen: 一, 二, 三. GRUND, T-Shirt und Longsleeve. ÖVÖL, eine leichte und eine schwere Jacke. QUTN, Hemden aus Popeline und Canvas. BARAM, Ballon-Jogger. SĪ, ein Lounge-Set aus Seide.',
		kicker: 'Ständige Kollektion',
		lead: 'Denim in drei Passformen, nummeriert nach dem Raum, den sie lassen: 一, 二 und 三. Ma ist das japanische Wort für den Raum zwischen den Dingen. Hier ist es der Raum zwischen dem Stoff und Ihnen.',
		lead2: 'Proportionen aus dem Tokio der Neunziger, neu gezeichnet mit den Linien eines Gebäudes. Keine Edition. Fortlaufend gefertigt und immer erhältlich.',
		stylesLabel: 'Die drei Passformen',
		denim: 'Denim',
		fitLabel: 'Passform',
		fits: ['Gerade', 'Weit', 'Barrel'],
		fitNote: 'Die Zahl ist die Menge an Ma: der Raum zwischen Stoff und Ihnen.',
		styles: [
			'Gerade von der Hüfte bis zum Saum, mit Raum bis ganz nach unten.',
			'Tief und weit. Der Saum fällt über den Schuh.',
			'An den Knien nach außen gewölbt, zum Saum hin wieder eingezogen.'
		],
		outline: 'Umriss',
		price: 'Preis',
		status: 'Status',
		statusValue: 'In Entwicklung',
		arrives: 'Erscheint',
		arrivesValue: 'Wenn sie fertig ist.',
		edition: 'Edition',
		editionValue: 'Keine. Dauerhaft.',
		cta: `Gründungsunterstützer werden, ${P.de.maBack}`,
		backersTitle: 'Gründungsunterstützer',
		backersText: 'Hundert Gründungsunterstützer machen MA möglich. Ihre Initialen werden in ein Muster eingewebt, das wir gestalten, innen in jedem je gefertigten MA. Jeder erhält ein Paar, in Schnitt und Größe seiner Wahl, sobald es fertig ist.'
	},
	ji: {
		title: 'GRUND',
		lead: 'Ein T-Shirt und ein Longsleeve. Grund: der Boden, auf dem alles andere steht.',
		lead2: 'Die Proportionen eines Jeans-T-Shirts der Neunziger: kastig, tiefe Schulter, kurzer gerader Körper. Geschnitten mit deutscher Zurückhaltung: genaue Längen, enger Kragen, außen nichts gedruckt.',
		pieces: [
			{ name: 'Tee', line: 'Kurzer Ärmel bis zum Ellbogen. Der Saum endet an der Hüfte.' },
			{ name: 'Longsleeve', line: 'Langes Bündchen, das sich am Handgelenk staut. Gleicher Körper.' }
		],
		coloursLabel: 'Drei Farben',
		colours: ['Unlit', 'Concrete', 'Blinding White'],
		detailsLabel: 'So gemacht',
		details: [
			'240 g schwerer Baumwolljersey, als Schlauch gestrickt: keine Seitennähte.',
			'Schmaler Rippkragen, der seine Form hält.',
			'Kein Logo außen. Der Name steht innen, am Nacken.'
		],
		priceTee: 'Tee',
		priceLong: 'Longsleeve'
	},
	ovol: {
		lead: 'Zwei Jacken. Övöl ist Mongolisch für Winter, geschrieben ӨВӨЛ. Ulaanbaatar ist die kälteste Hauptstadt der Welt; diese Jacken sind für Tage wie dort geschnitten.',
		lead2: 'Light hält Wind und Regen ab und lässt sich in die eigene Tasche packen. Heavy ist mit Daunen gefüllt, für echte Kälte. Dieselben kastigen Schultern, derselbe lange Rücken, außen nichts gedruckt.',
		pieces: [
			{ name: 'Light', line: 'Eine Shell mit Kapuze. Getapte Nähte, Zwei-Wege-Reißverschluss.' },
			{ name: 'Heavy', line: 'Mit Daunen gefüllt, hoher Kragen, breite Kammern.' }
		],
		coloursLabel: 'Zwei Farben',
		colours: ['Unlit', 'Concrete'],
		details: [
			'Light: eine wasserdichte, atmungsaktive Dreilagen-Shell.',
			'Heavy: Daunenfüllung unter wasserabweisendem Obermaterial.',
			'Taschen für Telefon und Handschuhe. Der Name steht innen.'
		]
	},
	baram: {
		lead: 'Jogger. Baram ist Koreanisch für Wind, geschrieben 바람. Das Bein füllt sich mit Luft wie ein Segel.',
		lead2: 'Weit an Oberschenkel und Knie, dann schmaler zu einem offenen Saum, sodass das Bein bauscht und über den Schuh fällt. Kein Bündchen. Ein tief sitzender Bund mit Kordel.',
		pieces: [{ name: 'Jogger', line: 'Eine Form. Ballonbein, offener Saum.' }],
		coloursLabel: 'Zwei Farben',
		colours: ['Unlit', 'Concrete'],
		details: [
			'400 g Baumwollfleece, innen angeraut.',
			'Tiefe Seitentaschen und eine Gesäßtasche.',
			'Kein Logo außen. Der Name steht innen im Bund.'
		]
	},
	qutn: {
		lead: 'Hemden. Qutn ist Arabisch für Baumwolle, geschrieben قطن. Das englische Wort cotton stammt davon, und die langstapelige Baumwolle für den feinsten Popeline wächst am Nil.',
		lead2: 'Die Proportionen eines Hemdes der Neunziger: kastig, tiefe Schulter, langer gerader Saum, drinnen oder draußen getragen. Knöpfe unter einer schlichten Leiste verdeckt. Keine Tasche, kein Logo.',
		pieces: [
			{ name: 'Poplin', line: 'Knackig und leicht. Für sich getragen.' },
			{ name: 'Canvas', line: 'Schwerer, offen als Overshirt getragen.' }
		],
		coloursLabel: 'Drei Farben',
		colours: ['Blinding White', 'Unlit', 'Concrete'],
		details: [
			'Poplin: dicht gewebte, zweifach gezwirnte Baumwolle.',
			'Canvas: ein dichter Baumwoll-Canvas, der mit dem Tragen weicher wird.',
			'Verdeckte Knopfleiste. Der Name steht innen an der Passe.'
		]
	},
	inventory: {
		title: 'Inventar / Maison Seul',
		description: 'Alles, was Maison Seul macht, an einem Ort. Ein Objekt in nummerierter Edition und Kleidung, die bleibt.',
		kicker: 'Inventar',
		h1: 'Alles, an einem Ort.',
		lead: 'Ein Objekt in nummerierter Edition. Kleidung, die bleibt, in Größen für Herren und Damen. Noch ist nichts im Verkauf.',
		filterLabel: 'Zeigen',
		cats: { all: 'Alle', objects: 'Objekte', tops: 'Oberteile', outer: 'Jacken', bottoms: 'Hosen', lounge: 'Loungewear' },
		edition: 'Edition 001 / 100',
		permanent: 'Dauerhaft',
		pieces: '{n} Stücke',
		sortLabel: 'Reihenfolge',
		sortNo: 'Nach Nummer',
		sortLow: 'Preis ↑',
		sortHigh: 'Preis ↓'
	},
	si: {
		lead: 'Loungewear. Sī ist Chinesisch für Seide, geschrieben 絲. Seide wurde zuerst in China gewebt, vor mehr als fünftausend Jahren.',
		lead2: 'Ein Set, für Herren und Damen: ein Hemd mit offenem Kragen und eine Hose mit Kordelzug, an jeder Kante paspeliert. Eine Farbe, Graphit, das Grauschwarz eines Raums, bevor das Licht angeht.',
		pieces: [
			{ name: 'Shirt', line: 'Offener Kragen, eine Brusttasche, paspelierte Kanten.' },
			{ name: 'Trouser', line: 'Kordelzug, gerades, lockeres Bein.' }
		],
		coloursLabel: 'Eine Farbe',
		colours: ['Graphite'],
		details: [
			'Sandgewaschene Seide: weich und matt statt glänzend.',
			'Als Set verkauft. Größen für Herren und Damen.',
			'Der Name steht innen am Kragen.'
		],
		set: 'Set'
	},
	house: {
		title: 'Das Haus / Maison Seul',
		description: 'Maison Seul ist ein Designhaus in Dublin. Ein Objekt nach dem anderen.',
		kicker: 'Das Haus',
		h1: 'Weniger Dinge. Bessere Dinge.',
		lead: 'Maison Seul ist ein Designhaus in Dublin. Wir machen ein Objekt nach dem anderen und halten jedes reparierbar, solange Sie es besitzen.',
		sections: [
			{
				h: 'Ein Objekt nach dem anderen',
				p: ['Nichts wird gemacht, um einen Katalog zu füllen. SKRIN ist das erste Objekt. MA (Denim), GRUND (T-Shirts), QUTN (Hemden), ÖVÖL (Jacken), BARAM (Jogger) und SĪ (Loungewear) folgen, jedes benannt in der Sprache des Ortes, der es geprägt hat.']
			},
			{
				h: 'Editionen und die ständige Kollektion',
				p: [
					'Manche Objekte erscheinen in nummerierten Editionen. Jede Ausführung wird einmal in einer festen Stückzahl gefertigt, und jedes Stück trägt seine Nummer. Das Design bleibt; die nächste Edition kommt in einer neuen Ausführung.',
					'Andere sind dauerhaft. Sie werden fortlaufend gefertigt, nie nummeriert und nie eingestellt, damit das Paar, das Sie jetzt kaufen, noch da ist, wenn Sie ein weiteres brauchen.'
				]
			},
			{
				h: 'Länger behalten',
				p: [
					'Jedes Teil, das sich abnutzt, lässt sich ersetzen, und wir halten diese Teile für jede Edition auf Lager. Dellen und Kratzer sind keine Mängel. Aluminium bewahrt, wo es gewesen ist.'
				]
			},
			{
				h: 'Wo gefertigt wird',
				p: [
					'Entworfen in Dublin. Gefertigt in China. Derzeit wird alles, was wir machen, dort gefertigt: SKRIN von einer spezialisierten Aluminiummanufaktur, MA und GRUND von Bekleidungsherstellern, die wir mit derselben Sorgfalt auswählen. Wir nennen jede Fabrik hier, bevor etwas versendet wird, und prüfen jede Charge vor dem Versand.', 'Wir sagen Ihnen lieber, wo gefertigt wird, als Sie raten zu lassen. Wenn sich das ändert, ändert sich zuerst diese Seite.'
				]
			},
			{ h: 'Teil von VNTA', p: ['Maison Seul ist ein Haus von VNTA.'] }
		]
	},
	care: {
		title: 'Pflege und Reparatur / Maison Seul',
		description: 'So pflegen Sie SKRIN, tauschen Teile aus und lassen ihn reparieren.',
		kicker: 'Pflege und Reparatur',
		h1: 'Vier Schrauben und die passenden Teile dazu.',
		lead: 'Rollen, Griff und Verschlüsse lassen sich mit einem Schraubendreher abnehmen. Wir halten die Teile für jede Edition bereit, damit SKRIN weiterlebt, statt ersetzt zu werden.',
		everydayTitle: 'Alltägliche Pflege',
		everyday: [
			'Die Schale mit einem weichen, feuchten Tuch abwischen. Bei Bedarf etwas milde Seife. Nichts Scheuerndes.',
			'Das Futter mit einem feuchten Tuch abwischen und offen trocknen lassen.',
			'Leer, geschlossen und aufrecht lagern, ohne direkte Sonne.',
			'Dellen und Kratzer gehören zu Aluminium. Sie gelten nicht als Mängel, und wir tun nicht so, als würden sie nicht entstehen.'
		],
		wheelTitle: 'Ein Rad tauschen',
		wheel: [
			'Den Koffer leeren und auf den Rücken legen.',
			'Die vier Schrauben, die das Rad halten, mit einem Schraubendreher lösen.',
			'Das alte Rad abnehmen.',
			'Das neue Rad ansetzen und die vier Schrauben gleichmäßig anziehen. Nicht überdrehen.'
		],
		wheelAfter: 'Griff, Verschlüsse und Füße lassen sich genauso abnehmen. Eine vollständige Anleitung liegt dem Koffer bei.',
		partsTitle: 'Ersatzteile',
		partsHead: ['Teil', 'Hinweis'],
		parts: [
			['Doppel-Spinnerrolle', 'Eine Ecke. Vier Schrauben.'],
			['Teleskopgriff', 'Komplette Einheit.'],
			['Verschluss mit Zahlenschloss', 'Ein Verschluss.'],
			['Eckschutz', 'Graphit oder rohes Aluminium.'],
			['Fuß', 'Zweierset.']
		],
		partsAfter: 'Innerhalb der 5-jährigen Garantie kostenlos. Danach zum Selbstkostenpreis zuzüglich Porto. Preise werden zum Verkaufsstart veröffentlicht.',
		repairTitle: 'Reparatur durch uns',
		repairBefore: 'Schreiben Sie an',
		repairAfter: 'mit Ihrer Seriennummer und einem Foto des Problems. Wir senden das Teil oder organisieren eine Reparatur, falls nötig.'
	},
	backers: {
		title: 'Gründungsunterstützer / Maison Seul',
		description: 'Hundert Gründungsunterstützer pro Objekt. Ihr Objekt, sobald es fertig ist, und Ihre Initialen in jedem, das je gefertigt wird.',
		kicker: 'Gründungsunterstützer',
		h1: 'Machen Sie es möglich.',
		lead: 'Maison Seul wird von den Menschen finanziert, die wollen, dass seine Objekte existieren. Hundert Gründungsunterstützer pro Objekt. Dafür werden Sie Teil des Objekts, für immer.',
		count: '{n} von 100 Unterstützern',
		noneYet: 'Noch niemand. Seien Sie der Erste.',
		items: {
			case01: {
				sub: 'Kabinenkoffer aus Aluminium. Edition 001.',
				gives: [
					'Ein SKRIN, sobald er fertig ist',
					'Ihre Initialen, bis zu drei Buchstaben, auf der Unterstützerplakette im Deckel jedes je gefertigten SKRIN',
					'Ihr Name und der Grund auf jeder Eigentümerkarte'
				],
				cta: `SKRIN unterstützen, ${P.de.case01Back}`
			},
			ma: {
				sub: 'Denim in drei Schnitten. Dauerhaft.',
				gives: [
					'Ein Paar MA in Schnitt und Größe Ihrer Wahl, sobald es fertig ist',
					'Ihre Initialen, eingewebt in das MA-Muster, innen in jedem je gefertigten Paar',
					'Ihr Name und der Grund auf jeder Eigentümerkarte'
				],
				cta: `MA unterstützen, ${P.de.maBack}`
			}
		},
		amountLabel: 'Gründungsunterstützer',
		termsTitle: 'Die Bedingungen, klar gesagt',
		terms: [
			'Wann: wenn es fertig ist. Wir versprechen kein Datum und schreiben den Unterstützern bei jedem Schritt.',
			'Wird es nie ausgeliefert, erhalten Sie Ihr gesamtes Geld zurück.',
			'Sie können jederzeit vor dem Versand Ihres Objekts die volle Erstattung verlangen. Hat die Produktion begonnen, sind Ihre Initialen womöglich schon in gefertigten Stücken.',
			'Die Unterstützung ist eine Vorbestellung zum Gründungspreis, keine Geldanlage. Sie verschafft keinen Anteil am Unternehmen.',
			'Hundert Unterstützer pro Objekt. Eine Unterstützung pro Person und Objekt.',
			`Reguläre Preise zum Verkaufsstart: SKRIN ${P.de.case01}, MA ${P.de.ma}.`
		],
		paidNote: 'Die Zahlung erfolgt auf einer sicheren Bezahlseite.',
		emailNote: 'Die Bezahlseite öffnet bald. Bis dahin schreiben Sie uns, um sich vormerken zu lassen. Es wird nichts berechnet.',
		emailCta: 'Mich vormerken',
		emailSubject: 'Gründungsunterstützer',
		emailBody: 'Ich möchte Gründungsunterstützer werden.\n\nObjekt: SKRIN / MA (bitte eines löschen)\nInitialen (bis zu 3 Buchstaben):\nName:\n'
	},
	contact: {
		title: 'Kontakt / Maison Seul',
		description: 'Kontakt zu Maison Seul.',
		kicker: 'Kontakt',
		h1: 'Eine Adresse.',
		reply: 'Es antwortet ein Mensch.',
		repairTitle: 'Für eine Reparatur oder ein Teil',
		repair: 'Geben Sie Ihre Seriennummer an und legen Sie ein Foto bei. Sie steht auf der Plakette im Deckel.'
	}
};

// ---------------------------------------------------------------------------
// Japanese
// ---------------------------------------------------------------------------
const ja: Copy = {
	prices: P.ja,
	taxNote: '関税・輸入消費税は含まれません',
	bar: 'ダブリンでデザイン。中国で製造。',
	photo: '写真は後日掲載',
	nav: { inventory: '一覧', permanent: '常設', house: 'メゾン', care: 'ケア', contact: 'お問い合わせ', back: '支援', language: '言語' },
	foot: {
		objects: 'オブジェ',
		lines: 'ライン',
		permanent: '常設コレクション',
		ma: 'MA デニム',
		ji: 'GRUND Tシャツ',
		ovol: 'ÖVÖL ジャケット',
		baram: 'BARAM ジョガー',
		qutn: 'QUTN シャツ',
		house: 'メゾンについて',
		care: 'ケアと修理',
		back: '創設支援者',
		contact: 'お問い合わせ',
		tagline: 'VNTAのメゾン。ダブリン。',
		legal:
			'Apple、MacBook、MacBook Air、MacBook Pro、AirPods、AirTagはApple Inc.の商標です。Maison SeulはAppleと提携しておらず、Appleによる承認も受けていません。'
	},
	home: {
		title: 'Maison Seul',
		description: 'Maison Seul。唯一のもの。ダブリンでデザイン。',
		tagline: '唯一のもの。'
	},
	case01: {
		title: 'SKRIN / Maison Seul',
		description: 'SKRIN。アルミニウムの機内持ち込みケース。エディション001、100点限定。創設支援者100人。',
		kicker: 'オブジェ 01 / 機内持ち込み',
		variant: 'グラファイト / エディション001 / 100点限定',
		status: 'まだ販売していません。',
		backNote: '100人の創設支援者がSKRINを実現します。支援者にはケースをお届けし、そのイニシャルはこれから作られるすべてのSKRINの内側に刻印されます。',
		cta: `創設支援者になる ${P.ja.case01Back}`,
		backersTitle: '創設支援者',
		backersText: '支援者のイニシャルは、すべてのSKRINの蓋の内側のプレートに刻印されます。すべてのオーナーカードに、その名前と理由を記します。',
		note: 'この仕上げは一度きりの製作。蓋の内側に001から100の番号入り。',
		viewsLabel: '表示',
		views: ['正面', '斜め', '無垢のコーナー', '内側', 'シリアルプレート'],
		followSuffix: '写真は後日掲載。',
		introTitle: 'ひとつのケース。それだけ。',
		intro:
			'ロゴのないアルミニウムの機内持ち込みケース。無垢のコーナーがひとつ。いつも持ち歩くもののための場所。Maison Seulの最初のオブジェです。',
		carryTitle: '持ち歩くもののために',
		carrySub: 'MacBook、AirTag、充電器。それぞれに居場所を。',
		carry: [
			{ title: 'MacBookスリーブ', text: '蓋の内側にパッド入りのスリーブ。MacBook Pro 16インチ以下に対応。' },
			{ title: 'AirTagポケット', text: 'フレームの中に隠しポケット。AirTagを一度入れたら、あとは忘れていい。' },
			{ title: 'ケーブルポケット', text: '充電器、ケーブル、AirPodsのためのフラットなジッパーポケット。中で転がりません。' }
		],
		reasonsLabel: '特徴',
		reasons: [
			{ title: '無垢のコーナーをひとつ。', text: '7つのコーナーはグラファイト。ひとつだけ無垢のアルミニウム。' },
			{ title: 'ネジは4本。', text: 'すべてのホイールはドライバーひとつで外せます。' },
			{ title: '傷は残る。', text: 'アルミニウムはすべての旅を刻む。それでいい。' },
			{ title: 'ロゴはない。', text: 'ハンドルの横に、小さくあなたの番号を刻印。' }
		],
		specsTitle: '仕様',
		specs: [
			{
				label: '仕様',
				lines: [
					'アルミフレーム、ラッチ2つ、ファスナーなし',
					'TSA対応ダイヤルロック',
					'ダブルスピナーホイール4輪、交換可能',
					'テレスコピックハンドル、交換可能'
				]
			},
			{
				label: 'サイズと重量',
				lines: ['55 × 40 × 20 cm（ホイール・ハンドル含む）', '重量と容量は最初のサンプルで確定します']
			},
			{
				label: '対応',
				lines: [
					'蓋のスリーブにMacBook Pro 16インチ・14インチ、MacBook Air',
					'フレームのポケットにAirTagをひとつ。AirTagは付属しません',
					'Ryanair（有料の機内持ち込み）、Aer Lingus、Lufthansa、British Airwaysの機内持ち込みサイズに対応',
					'Lufthansaの制限は合計8kgのため、荷物に使えるのは約3.7kgです。航空会社の規定は変わるため、搭乗前にご確認ください'
				]
			},
			{ label: '仕上げ', lines: ['グラファイト、マットアルマイト', 'コーナーひとつは無垢のアルミニウム'] },
			{ label: '素材', lines: ['アルミニウム・マグネシウム合金のシェルとフレーム', 'ポリエステルの内張り、ペールグレー'] },
			{ label: '同梱物', lines: ['SKRIN', '保存袋', '番号入りオーナーカード', 'ケア・修理カード'] },
			{
				label: '返品と保証',
				lines: ['未使用であれば14日以内に返品、全額返金', 'シェル、フレーム、ホイール、ハンドル、ラッチに5年保証。へこみや傷は対象外']
			}
		],
		faqTitle: 'よくある質問',
		faq: [
			{
				q: 'どこで作られていますか?',
				a: 'デザインはダブリン。製造は中国、アルミニウム専門の工場ひとつに任せています。工場名は出荷前にここで公表します。すべてのロットは出荷前に検品します。'
			},
			{
				q: '100点が完売したら?',
				a: 'グラファイトは再生産しません。SKRINは新しい仕上げで続き、交換部品はすべてのエディション分を在庫します。'
			},
			{
				q: '創設支援者とは?',
				a: `SKRINが生まれる前に資金を支える100人のひとり。${P.ja.case01Back}で、完成したケースをお届けし、あなたのイニシャルをすべてのSKRINの内側に刻印し、すべてのオーナーカードにお名前を記します。もし出荷に至らなければ、全額を返金します。`
			},
			{
				q: 'Maison SeulはAppleの関連会社ですか?',
				a: 'いいえ。私たちがデザインする相手の多くがApple製品を持ち歩いているため、それに合わせて設計しています。'
			}
		],
		trustLabel: '約束',
		trust: ['ダブリンでデザイン、中国で製造', 'ナンバリング・エディション', '修理できる', '14日間返品可']
	},
	ma: {
		title: '常設コレクション / Maison Seul',
		description: '常設コレクション。MAは一・二・三の3つのシルエットのデニム。GRUNDはTシャツとロングスリーブ。ÖVÖLは軽量と厚手のジャケット。QUTNはポプリンとキャンバスのシャツ。BARAMはバルーンジョガー。SĪはシルクのラウンジセット。',
		kicker: '常設コレクション',
		lead: '残す空間の量で番号をつけた、3つのシルエットのデニム。一、二、三。「間（ま）」とは、ものとものとのあいだの空間。ここでは、布と身体のあいだの空間です。',
		lead2: '90年代の東京のシルエットを、建築の線で描き直しました。限定ではありません。作り続け、いつでも手に入ります。',
		stylesLabel: '3つのシルエット',
		denim: 'デニム',
		fitLabel: 'シルエット',
		fits: ['ストレート', 'ワイド', 'バレル'],
		fitNote: '数字は「間」の量。布と身体のあいだの空間です。',
		styles: ['腰から裾までまっすぐ、全体にゆとり。', '股上は低く、太く。裾は靴の上でたまる。', '膝で外にカーブし、裾に向かって絞る。'],
		outline: '線画',
		price: '価格',
		status: '状況',
		statusValue: '開発中',
		arrives: '発売',
		arrivesValue: '準備ができたら。',
		edition: 'エディション',
		editionValue: 'なし。常設。',
		cta: `創設支援者になる ${P.ja.maBack}`,
		backersTitle: '創設支援者',
		backersText: '100人の創設支援者がMAを実現します。支援者のイニシャルは、私たちがデザインする柄に織り込まれ、これから作られるすべてのMAの内側に入ります。支援者には、完成時に好きな型とサイズの一本をお届けします。'
	},
	ji: {
		title: 'GRUND',
		lead: 'Tシャツとロングスリーブ。Grund（グルント）はドイツ語で「地面」「土台」のこと。すべての土台になる一枚です。',
		lead2: '90年代のジーンズTシャツのプロポーション。ボックス型、落ちた肩、短くまっすぐな身頃。それをドイツ的な抑制で仕立てます。正確な丈、詰まった襟、表には何も入れません。',
		pieces: [
			{ name: 'Tee', line: '袖は肘まで。裾は腰の位置。' },
			{ name: 'Longsleeve', line: '長めの袖口が手首でたまる。身頃は同じ。' }
		],
		coloursLabel: '3色',
		colours: ['Unlit', 'Concrete', 'Blinding White'],
		detailsLabel: 'つくり',
		details: [
			'240gの厚手コットン天竺を筒状に編み、脇の縫い目なし。',
			'形が崩れにくい細めのリブ襟。',
			'表にロゴなし。名前は内側の首元にプリント。'
		],
		priceTee: 'Tee',
		priceLong: 'Longsleeve'
	},
	ovol: {
		lead: '2着のジャケット。Övöl（ӨВӨЛ）はモンゴル語で「冬」。ウランバートルは世界でいちばん寒い首都。その日々のために仕立てました。',
		lead2: 'Lightは風と雨を防ぎ、自身のポケットに収納できます。Heavyはダウン入りで、本当の寒さに。同じボックス型の肩、長めの後ろ丈、表には何も入れません。',
		pieces: [
			{ name: 'Light', line: 'フード付きシェル。シームテープ、ダブルジップ。' },
			{ name: 'Heavy', line: 'ダウン入り。高い襟と幅広のキルト。' }
		],
		coloursLabel: '2色',
		colours: ['Unlit', 'Concrete'],
		details: [
			'Light：防水透湿の3層シェル。',
			'Heavy：撥水加工の表地にダウンを封入。',
			'スマートフォンと手袋が入るポケット。名前は内側に。'
		]
	},
	baram: {
		lead: 'ジョガーパンツ。Baram（바람）は韓国語で「風」。脚が帆のように空気をはらみます。',
		lead2: '太ももと膝はゆったり、裾に向かって細くなり、リブなしのオープンヘムで靴の上に落ちるバルーンシルエット。ドローコードのウエストは低めに。',
		pieces: [{ name: 'Jogger', line: 'ひとつの型。バルーンレッグ、オープンヘム。' }],
		coloursLabel: '2色',
		colours: ['Unlit', 'Concrete'],
		details: [
			'400gのコットンフリース、裏起毛。',
			'深いサイドポケットとバックポケットひとつ。',
			'表にロゴなし。名前はウエストの内側に。'
		]
	},
	qutn: {
		lead: 'シャツ。Qutn（قطن）はアラビア語で「綿」。英語のcottonの語源であり、最上のポプリンを生む超長綿はナイル川沿いで育ちます。',
		lead2: '90年代のシャツのプロポーション。ボックス型、落ちた肩、裾はまっすぐ長く、入れても出しても。ボタンは比翼で隠し、ポケットもロゴもありません。',
		pieces: [
			{ name: 'Poplin', line: 'ハリがあって軽い。一枚で。' },
			{ name: 'Canvas', line: '厚手。前を開けてシャツジャケットとして。' }
		],
		coloursLabel: '3色',
		colours: ['Blinding White', 'Unlit', 'Concrete'],
		details: [
			'Poplin：高密度に織った双糸のコットン。',
			'Canvas：着るほどに柔らかくなる高密度コットンキャンバス。',
			'比翼仕立て。名前はヨークの内側に。'
		]
	},
	inventory: {
		title: '一覧 / Maison Seul',
		description: 'Maison Seulがつくるもの、すべてをひとつの場所に。ナンバリングされたオブジェと、なくならない服。',
		kicker: '一覧',
		h1: 'すべてを、ひとつの場所に。',
		lead: 'ナンバリング・エディションのオブジェがひとつ。そして、なくならない服。メンズとウィメンズのサイズで。まだ販売はしていません。',
		filterLabel: '表示',
		cats: { all: 'すべて', objects: 'オブジェ', tops: 'トップス', outer: 'アウター', bottoms: 'ボトムス', lounge: 'ラウンジウェア' },
		edition: 'エディション 001 / 100',
		permanent: '常設',
		pieces: '{n}点',
		sortLabel: '並び順',
		sortNo: '番号順',
		sortLow: '価格 ↑',
		sortHigh: '価格 ↓'
	},
	si: {
		lead: 'ラウンジウェア。Sī（絲）は中国語で「絹」。絹は五千年以上前、中国で初めて織られました。',
		lead2: 'メンズとウィメンズ、ひと揃いのセット。開襟シャツとドローストリングのパンツ、すべての縁にパイピング。色はひとつ、グラファイト。明かりをつける前の部屋の、灰がかった黒。',
		pieces: [
			{ name: 'Shirt', line: '開襟、胸ポケットひとつ、縁にパイピング。' },
			{ name: 'Trouser', line: 'ドローストリングのウエスト、ゆったりしたストレート。' }
		],
		coloursLabel: '1色',
		colours: ['Graphite'],
		details: [
			'サンドウォッシュのシルク。光沢を抑えた、やわらかな手ざわり。',
			'セット販売。メンズとウィメンズのサイズ。',
			'名前は襟の内側に。'
		],
		set: 'セット'
	},
	house: {
		title: 'メゾンについて / Maison Seul',
		description: 'Maison Seulはダブリンのデザインハウス。ひとつずつ作ります。',
		kicker: 'メゾンについて',
		h1: 'より少なく。より良く。',
		lead: 'Maison Seulはダブリンのデザインハウスです。ひとつずつオブジェを作り、持ち続けるかぎり修理できるようにします。',
		sections: [
			{
				h: 'ひとつずつ',
				p: ['カタログを埋めるために作るものはありません。最初のオブジェはSKRIN。続いて、MA（デニム）、GRUND（Tシャツ）、QUTN（シャツ）、ÖVÖL（ジャケット）、BARAM（ジョガー）、SĪ（ラウンジウェア）。それぞれ、かたちを生んだ土地の言葉で名づけています。']
			},
			{
				h: 'エディションと常設コレクション',
				p: [
					'ナンバリングされたエディションで作るオブジェがあります。それぞれの仕上げは決まった数だけ一度きり作り、一点ずつ番号が入ります。デザインは変わらず、次のエディションは新しい仕上げで。',
					'常設のものもあります。作り続け、番号はつけず、廃番にもしません。いま買った一本が、次に必要になったときにもそこにあるように。'
				]
			},
			{
				h: '長く持つ',
				p: [
					'消耗する部品はすべて交換でき、どのエディションの部品も在庫しています。へこみや傷は欠陥ではありません。アルミニウムは、どこにいたかを記憶します。'
				]
			},
			{
				h: 'どこで作るか',
				p: [
					'デザインはダブリン。製造は中国。現在、私たちが作るものはすべて中国で作られています。SKRINはアルミニウム専門の工場ひとつで、MAとGRUNDは同じ基準で選ぶ衣料工場で。工場名は出荷前にここで公表し、すべてのロットを出荷前に検品します。', 'どこで作られているかは、推測させるより、きちんとお伝えしたい。変わるときは、まずこのページを書き換えます。'
				]
			},
			{ h: 'VNTAの一員', p: ['Maison SeulはVNTAのメゾンです。'] }
		]
	},
	care: {
		title: 'ケアと修理 / Maison Seul',
		description: 'SKRINのお手入れ、部品の交換、修理について。',
		kicker: 'ケアと修理',
		h1: 'ネジは4本。部品もそろっています。',
		lead: 'ホイール、ハンドル、ラッチはドライバーひとつで外せます。どのエディションの部品も在庫しているので、SKRINは買い替えずに使い続けられます。',
		everydayTitle: '日々のお手入れ',
		everyday: [
			'シェルはやわらかく湿らせた布で拭いてください。必要なら中性洗剤を少量。研磨剤は使わないでください。',
			'内張りは湿らせた布で拭き、開いたまま乾かしてください。',
			'中を空にし、閉じて立てた状態で、直射日光を避けて保管してください。',
			'へこみや傷はアルミニウムの一部です。欠陥としては扱いません。生じないふりもしません。'
		],
		wheelTitle: 'ホイールの交換',
		wheel: [
			'ケースを空にして、背面を下に寝かせます。',
			'ホイールを留めている4本のネジをドライバーで外します。',
			'古いホイールを取り外します。',
			'新しいホイールを付け、4本のネジを均等に締めます。締めすぎないでください。'
		],
		wheelAfter: 'ハンドル、ラッチ、脚も同じ方法で外せます。詳しいガイドはケースに同梱されます。',
		partsTitle: '交換部品',
		partsHead: ['部品', '備考'],
		parts: [
			['ダブルスピナーホイール', '1か所分。ネジ4本。'],
			['テレスコピックハンドル', '一式。'],
			['ダイヤルロック付きラッチ', '1個。'],
			['コーナーガード', 'グラファイトまたは無垢のアルミニウム。'],
			['脚', '2個セット。']
		],
		partsAfter: '5年保証の期間内は無料。期間後は原価に送料を加えた価格で販売します。価格は販売開始時に公開します。',
		repairTitle: '修理のご依頼',
		repairBefore: 'シリアル番号と不具合の写真を添えて',
		repairAfter: 'までメールしてください。部品をお送りするか、必要に応じて修理を手配します。'
	},
	backers: {
		title: '創設支援者 / Maison Seul',
		description: '各オブジェにつき創設支援者は100人。完成したオブジェと、これから作られるすべてに刻まれるあなたのイニシャル。',
		kicker: '創設支援者',
		h1: 'これを可能にする。',
		lead: 'Maison Seulは、そのオブジェが存在してほしいと願う人々の支援でつくられます。各オブジェにつき創設支援者は100人。その見返りに、あなたはオブジェの一部になります。ずっと。',
		count: '支援者 {n} / 100',
		noneYet: 'まだいません。最初のひとりに。',
		items: {
			case01: {
				sub: 'アルミニウムの機内持ち込みケース。エディション001。',
				gives: [
					'完成したSKRINをひとつ',
					'イニシャル（3文字まで）を、すべてのSKRINの蓋の内側にある支援者プレートに刻印',
					'すべてのオーナーカードにお名前と理由を記載'
				],
				cta: `SKRINを支援する ${P.ja.case01Back}`
			},
			ma: {
				sub: '3型のデニム。常設。',
				gives: [
					'完成時に、好きな型とサイズのMAを一本',
					'イニシャルをMAの柄に織り込み、すべての一本の内側に',
					'すべてのオーナーカードにお名前と理由を記載'
				],
				cta: `MAを支援する ${P.ja.maBack}`
			}
		},
		amountLabel: '創設支援',
		termsTitle: '条件',
		terms: [
			'時期：準備ができたら。日付はお約束しません。各段階で支援者にお知らせします。',
			'もし出荷に至らなければ、全額を返金します。',
			'オブジェの発送前であれば、いつでも全額返金を申し出られます。製造が始まっている場合、イニシャルはすでに製品に入っていることがあります。',
			'支援は創設価格での予約購入であり、投資ではありません。会社の持分は伴いません。',
			'各オブジェにつき支援者は100人まで。おひとりさま、1オブジェにつき1口まで。',
			`販売開始時の通常価格：SKRIN ${P.ja.case01}、MA ${P.ja.ma}。`
		],
		paidNote: 'お支払いは安全な決済ページで行います。',
		emailNote: 'まもなく決済を開始します。それまではメールでお名前をお知らせください。料金はかかりません。',
		emailCta: '名前を登録する',
		emailSubject: '創設支援者',
		emailBody: '創設支援者になりたいです。\n\nオブジェ：SKRIN / MA（どちらかを削除）\nイニシャル（3文字まで）：\nお名前：\n'
	},
	contact: {
		title: 'お問い合わせ / Maison Seul',
		description: 'Maison Seulへのお問い合わせ。',
		kicker: 'お問い合わせ',
		h1: '窓口はひとつ。',
		reply: '人が返信します。',
		repairTitle: '修理・部品について',
		repair: 'シリアル番号と写真を添えてください。番号は蓋の内側のプレートにあります。'
	}
};

export const copy: Record<Lang, Copy> = { en, de, ja, ko, zh, ar, mn, sv };
