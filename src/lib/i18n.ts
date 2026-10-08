// Languages, prices and all page text for English, German and Japanese.
//
// English is the source. German and Japanese were written alongside it and
// should be read by a native speaker before they are promoted.

export type Lang = 'en' | 'de' | 'ja';
export const LANGS: Lang[] = ['en', 'de', 'ja'];
export const LANG_LABEL: Record<Lang, string> = { en: 'EN', de: 'DE', ja: '日本語' };
export const SITE = 'https://maisonseul.com';

// Pages that exist in every language. Anything else (shipping, register) is
// English only and hidden until sales open.
export const TRANSLATED = ['/', '/case-01', '/permanent', '/house', '/care', '/backers', '/contact'];

export function langOf(param: string | undefined): Lang {
	return param === 'de' || param === 'ja' ? param : 'en';
}

/** A path in the given language: /case-01 -> /de/case-01 */
export function lp(lang: Lang, path: string): string {
	if (lang === 'en') return path;
	return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** The language-free path of a URL: /de/case-01 -> /case-01 */
export function basePath(pathname: string): string {
	const m = pathname.match(/^\/(de|ja)(\/.*)?$/);
	const p = m ? (m[2] ?? '/') : pathname;
	return p.replace(/\/$/, '') || '/';
}

/** Where the language switch should go from the current page. */
export function switchHref(pathname: string, target: Lang): string {
	const b = basePath(pathname);
	return lp(target, TRANSLATED.includes(b) ? b : '/');
}

// ---------------------------------------------------------------------------
// Prices. Fixed per currency, not converted live.
// case01 / ma: the normal price when sales open.
// case01Back / maBack: founding backer amount, object included.
// ---------------------------------------------------------------------------
type Prices = { case01: string; case01Back: string; ma: string; maBack: string; currency: 'eur' | 'jpy' };
const P: Record<Lang, Prices> = {
	en: { case01: '€525', case01Back: '€1,000', ma: '€125', maBack: '€250', currency: 'eur' },
	de: { case01: '525 €', case01Back: '1.000 €', ma: '125 €', maBack: '250 €', currency: 'eur' },
	ja: { case01: '¥95,000', case01Back: '¥180,000', ma: '¥22,000', maBack: '¥45,000', currency: 'jpy' }
};

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------
const en = {
	prices: P.en,
	taxNote: 'VAT included',
	bar: 'Designed in Dublin.',
	photo: 'Photograph to follow',
	nav: { house: 'The house', care: 'Care', contact: 'Contact', back: 'Backers', language: 'Language' },
	foot: {
		ma: 'MA, permanent collection',
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
		title: 'CASE 01 / Maison Seul',
		description: 'CASE 01. An aluminium cabin case. Edition 001, one hundred pieces. One hundred founding backers.',
		kicker: 'Case 01 / Cabin',
		variant: 'Graphite / Edition 001 / 100 pieces',
		status: 'Not on sale yet.',
		backNote: 'One hundred founding backers make CASE 01 possible. Each receives a case, and their initials are engraved inside every CASE 01 ever made.',
		cta: `Become a founding backer, ${P.en.case01Back}`,
		backersTitle: 'Founding backers',
		backersText: 'Their initials are engraved on a plate inside the lid of every CASE 01 ever made. Every ownership card names them and says why.',
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
			{ label: 'In the box', lines: ['CASE 01', 'Dust cover', 'Ownership card with your number', 'Care and repair card'] },
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
				a: 'Designed in Dublin. Made by one specialist aluminium factory, which we will name here before anything ships. Every batch is inspected before it leaves.'
			},
			{
				q: 'What happens when the hundred are gone?',
				a: 'Graphite is not made again. CASE 01 continues in a new finish, and parts stay in stock for every edition.'
			},
			{
				q: 'What is a founding backer?',
				a: `One of 100 people who fund CASE 01 before it exists. For ${P.en.case01Back} you receive a case when it is ready, your initials are engraved inside every CASE 01 ever made, and your name is on every ownership card. If it never ships, you get your money back.`
			},
			{
				q: 'Is Maison Seul part of Apple?',
				a: 'No. We design around Apple devices because most of the people we design for carry them.'
			}
		],
		trustLabel: 'Promises',
		trust: ['Designed in Dublin', 'Numbered editions', 'Repairable', '14-day returns']
	},
	ma: {
		title: 'MA 間 / Maison Seul',
		description: 'MA. Denim in three styles: Loose, Baggy, Barrel. Permanent, not limited. €125. One hundred founding backers.',
		kicker: 'Permanent collection',
		lead: 'Denim in three styles: Loose, Baggy and Barrel. Ma is the Japanese word for the space between things. Here it is the space between the cloth and you.',
		lead2: 'Nineties Tokyo proportions, redrawn with the lines of a building. Not an edition. Made continuously, and always there.',
		stylesLabel: 'The three styles',
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
	house: {
		title: 'The house / Maison Seul',
		description: 'Maison Seul is a design house in Dublin. One object at a time.',
		kicker: 'The house',
		h1: 'Fewer things. Better things.',
		lead: 'Maison Seul is a design house in Dublin. We make one object at a time, and keep each one repairable for as long as you own it.',
		sections: [
			{
				h: 'One object at a time',
				p: ['Nothing is made to fill a catalogue. CASE 01 is the first object. MA, a permanent collection of denim, follows.']
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
					'Designed in Dublin. Made by one specialist aluminium factory, which we will name here before anything ships. We inspect every batch before it leaves. We would rather tell you where it is made than leave you to guess.'
				]
			},
			{ h: 'Part of VNTA', p: ['Maison Seul is a VNTA house.'] }
		]
	},
	care: {
		title: 'Care and repair / Maison Seul',
		description: 'How to care for CASE 01, replace its parts, and get it repaired.',
		kicker: 'Care and repair',
		h1: 'Four screws, and the parts to go with them.',
		lead: 'The wheels, handle and latches come off with a screwdriver. We keep the parts for every edition, so CASE 01 can be kept going rather than replaced.',
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
					'A CASE 01, when it is ready',
					"Your initials, up to three letters, engraved on the backers' plate inside every CASE 01 ever made",
					'Your name and the reason on every ownership card'
				],
				cta: `Back CASE 01, ${P.en.case01Back}`
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
			`Normal prices when sales open: CASE 01 ${P.en.case01}, MA ${P.en.ma}.`
		],
		paidNote: 'Payment is handled on a secure checkout page.',
		emailNote: 'Checkout opens shortly. Until then, email us to put your name down. Nothing is charged.',
		emailCta: 'Put my name down',
		emailSubject: 'Founding backer',
		emailBody: 'I would like to become a founding backer.\n\nObject: CASE 01 / MA (delete one)\nInitials (up to 3 letters):\nName:\n'
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
	bar: 'Entworfen in Dublin.',
	photo: 'Foto folgt',
	nav: { house: 'Das Haus', care: 'Pflege', contact: 'Kontakt', back: 'Unterstützer', language: 'Sprache' },
	foot: {
		ma: 'MA, ständige Kollektion',
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
		title: 'CASE 01 / Maison Seul',
		description: 'CASE 01. Ein Kabinenkoffer aus Aluminium. Edition 001, hundert Stück. Hundert Gründungsunterstützer.',
		kicker: 'Case 01 / Handgepäck',
		variant: 'Graphit / Edition 001 / 100 Stück',
		status: 'Noch nicht im Verkauf.',
		backNote: 'Hundert Gründungsunterstützer machen CASE 01 möglich. Jeder erhält einen Koffer, und ihre Initialen werden in jeden CASE 01 graviert, der je gefertigt wird.',
		cta: `Gründungsunterstützer werden, ${P.de.case01Back}`,
		backersTitle: 'Gründungsunterstützer',
		backersText: 'Ihre Initialen sind auf einer Plakette im Deckel jedes je gefertigten CASE 01 graviert. Jede Eigentümerkarte nennt sie und sagt, warum.',
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
			{ label: 'Lieferumfang', lines: ['CASE 01', 'Staubhülle', 'Eigentümerkarte mit Ihrer Nummer', 'Pflege- und Reparaturkarte'] },
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
				a: 'Entworfen in Dublin. Gefertigt von einer spezialisierten Aluminiummanufaktur, die wir hier nennen, bevor etwas versendet wird. Jede Charge wird vor dem Versand geprüft.'
			},
			{
				q: 'Was passiert, wenn alle hundert vergeben sind?',
				a: 'Graphit wird nicht wieder hergestellt. CASE 01 geht in einer neuen Ausführung weiter, und Ersatzteile bleiben für jede Edition auf Lager.'
			},
			{
				q: 'Was ist ein Gründungsunterstützer?',
				a: `Einer von 100 Menschen, die CASE 01 finanzieren, bevor es ihn gibt. Für ${P.de.case01Back} erhalten Sie einen Koffer, sobald er fertig ist, Ihre Initialen werden in jeden je gefertigten CASE 01 graviert, und Ihr Name steht auf jeder Eigentümerkarte. Wird er nie ausgeliefert, erhalten Sie Ihr Geld zurück.`
			},
			{
				q: 'Gehört Maison Seul zu Apple?',
				a: 'Nein. Wir gestalten rund um Apple-Geräte, weil die meisten Menschen, für die wir gestalten, sie dabeihaben.'
			}
		],
		trustLabel: 'Versprechen',
		trust: ['Entworfen in Dublin', 'Nummerierte Editionen', 'Reparierbar', '14 Tage Rückgabe']
	},
	ma: {
		title: 'MA 間 / Maison Seul',
		description: 'MA. Denim in drei Schnitten: Loose, Baggy, Barrel. Dauerhaft, nicht limitiert. 125 €. Hundert Gründungsunterstützer.',
		kicker: 'Ständige Kollektion',
		lead: 'Denim in drei Schnitten: Loose, Baggy und Barrel. Ma ist das japanische Wort für den Raum zwischen den Dingen. Hier ist es der Raum zwischen dem Stoff und Ihnen.',
		lead2: 'Proportionen aus dem Tokio der Neunziger, neu gezeichnet mit den Linien eines Gebäudes. Keine Edition. Fortlaufend gefertigt und immer erhältlich.',
		stylesLabel: 'Die drei Schnitte',
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
	house: {
		title: 'Das Haus / Maison Seul',
		description: 'Maison Seul ist ein Designhaus in Dublin. Ein Objekt nach dem anderen.',
		kicker: 'Das Haus',
		h1: 'Weniger Dinge. Bessere Dinge.',
		lead: 'Maison Seul ist ein Designhaus in Dublin. Wir machen ein Objekt nach dem anderen und halten jedes reparierbar, solange Sie es besitzen.',
		sections: [
			{
				h: 'Ein Objekt nach dem anderen',
				p: ['Nichts wird gemacht, um einen Katalog zu füllen. CASE 01 ist das erste Objekt. MA, eine ständige Kollektion aus Denim, folgt.']
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
					'Entworfen in Dublin. Gefertigt von einer spezialisierten Aluminiummanufaktur, die wir hier nennen, bevor etwas versendet wird. Wir prüfen jede Charge vor dem Versand. Wir sagen Ihnen lieber, wo gefertigt wird, als Sie raten zu lassen.'
				]
			},
			{ h: 'Teil von VNTA', p: ['Maison Seul ist ein Haus von VNTA.'] }
		]
	},
	care: {
		title: 'Pflege und Reparatur / Maison Seul',
		description: 'So pflegen Sie CASE 01, tauschen Teile aus und lassen ihn reparieren.',
		kicker: 'Pflege und Reparatur',
		h1: 'Vier Schrauben und die passenden Teile dazu.',
		lead: 'Rollen, Griff und Verschlüsse lassen sich mit einem Schraubendreher abnehmen. Wir halten die Teile für jede Edition bereit, damit CASE 01 weiterlebt, statt ersetzt zu werden.',
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
					'Ein CASE 01, sobald er fertig ist',
					'Ihre Initialen, bis zu drei Buchstaben, auf der Unterstützerplakette im Deckel jedes je gefertigten CASE 01',
					'Ihr Name und der Grund auf jeder Eigentümerkarte'
				],
				cta: `CASE 01 unterstützen, ${P.de.case01Back}`
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
			`Reguläre Preise zum Verkaufsstart: CASE 01 ${P.de.case01}, MA ${P.de.ma}.`
		],
		paidNote: 'Die Zahlung erfolgt auf einer sicheren Bezahlseite.',
		emailNote: 'Die Bezahlseite öffnet bald. Bis dahin schreiben Sie uns, um sich vormerken zu lassen. Es wird nichts berechnet.',
		emailCta: 'Mich vormerken',
		emailSubject: 'Gründungsunterstützer',
		emailBody: 'Ich möchte Gründungsunterstützer werden.\n\nObjekt: CASE 01 / MA (bitte eines löschen)\nInitialen (bis zu 3 Buchstaben):\nName:\n'
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
	bar: 'ダブリンでデザイン。',
	photo: '写真は後日掲載',
	nav: { house: 'メゾン', care: 'ケア', contact: 'お問い合わせ', back: '支援', language: '言語' },
	foot: {
		ma: 'MA 常設コレクション',
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
		title: 'CASE 01 / Maison Seul',
		description: 'CASE 01。アルミニウムの機内持ち込みケース。エディション001、100点限定。創設支援者100人。',
		kicker: 'Case 01 / 機内持ち込み',
		variant: 'グラファイト / エディション001 / 100点限定',
		status: 'まだ販売していません。',
		backNote: '100人の創設支援者がCASE 01を実現します。支援者にはケースをお届けし、そのイニシャルはこれから作られるすべてのCASE 01の内側に刻印されます。',
		cta: `創設支援者になる ${P.ja.case01Back}`,
		backersTitle: '創設支援者',
		backersText: '支援者のイニシャルは、すべてのCASE 01の蓋の内側のプレートに刻印されます。すべてのオーナーカードに、その名前と理由を記します。',
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
			{ label: '同梱物', lines: ['CASE 01', '保存袋', '番号入りオーナーカード', 'ケア・修理カード'] },
			{
				label: '返品と保証',
				lines: ['未使用であれば14日以内に返品、全額返金', 'シェル、フレーム、ホイール、ハンドル、ラッチに5年保証。へこみや傷は対象外']
			}
		],
		faqTitle: 'よくある質問',
		faq: [
			{
				q: 'どこで作られていますか?',
				a: 'デザインはダブリン。製造はアルミニウム専門の工場ひとつに任せています。工場名は出荷前にここで公表します。すべてのロットは出荷前に検品します。'
			},
			{
				q: '100点が完売したら?',
				a: 'グラファイトは再生産しません。CASE 01は新しい仕上げで続き、交換部品はすべてのエディション分を在庫します。'
			},
			{
				q: '創設支援者とは?',
				a: `CASE 01が生まれる前に資金を支える100人のひとり。${P.ja.case01Back}で、完成したケースをお届けし、あなたのイニシャルをすべてのCASE 01の内側に刻印し、すべてのオーナーカードにお名前を記します。もし出荷に至らなければ、全額を返金します。`
			},
			{
				q: 'Maison SeulはAppleの関連会社ですか?',
				a: 'いいえ。私たちがデザインする相手の多くがApple製品を持ち歩いているため、それに合わせて設計しています。'
			}
		],
		trustLabel: '約束',
		trust: ['ダブリンでデザイン', 'ナンバリング・エディション', '修理できる', '14日間返品可']
	},
	ma: {
		title: 'MA 間 / Maison Seul',
		description: 'MA。Loose、Baggy、Barrelの3型のデニム。限定ではなく常設。¥22,000。創設支援者100人。',
		kicker: '常設コレクション',
		lead: 'Loose、Baggy、Barrelの3型のデニム。「間（ま）」とは、ものとものとのあいだの空間。ここでは、布と身体のあいだの空間です。',
		lead2: '90年代の東京のシルエットを、建築の線で描き直しました。限定ではありません。作り続け、いつでも手に入ります。',
		stylesLabel: '3つの型',
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
	house: {
		title: 'メゾンについて / Maison Seul',
		description: 'Maison Seulはダブリンのデザインハウス。ひとつずつ作ります。',
		kicker: 'メゾンについて',
		h1: 'より少なく。より良く。',
		lead: 'Maison Seulはダブリンのデザインハウスです。ひとつずつオブジェを作り、持ち続けるかぎり修理できるようにします。',
		sections: [
			{
				h: 'ひとつずつ',
				p: ['カタログを埋めるために作るものはありません。最初のオブジェはCASE 01。続いて、デニムの常設コレクションMA。']
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
					'デザインはダブリン。製造はアルミニウム専門の工場ひとつに任せ、出荷前にここで工場名を公表します。すべてのロットは出荷前に検品します。どこで作られているかは、推測させるより、きちんとお伝えしたいと考えています。'
				]
			},
			{ h: 'VNTAの一員', p: ['Maison SeulはVNTAのメゾンです。'] }
		]
	},
	care: {
		title: 'ケアと修理 / Maison Seul',
		description: 'CASE 01のお手入れ、部品の交換、修理について。',
		kicker: 'ケアと修理',
		h1: 'ネジは4本。部品もそろっています。',
		lead: 'ホイール、ハンドル、ラッチはドライバーひとつで外せます。どのエディションの部品も在庫しているので、CASE 01は買い替えずに使い続けられます。',
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
					'完成したCASE 01をひとつ',
					'イニシャル（3文字まで）を、すべてのCASE 01の蓋の内側にある支援者プレートに刻印',
					'すべてのオーナーカードにお名前と理由を記載'
				],
				cta: `CASE 01を支援する ${P.ja.case01Back}`
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
			`販売開始時の通常価格：CASE 01 ${P.ja.case01}、MA ${P.ja.ma}。`
		],
		paidNote: 'お支払いは安全な決済ページで行います。',
		emailNote: 'まもなく決済を開始します。それまではメールでお名前をお知らせください。料金はかかりません。',
		emailCta: '名前を登録する',
		emailSubject: '創設支援者',
		emailBody: '創設支援者になりたいです。\n\nオブジェ：CASE 01 / MA（どちらかを削除）\nイニシャル（3文字まで）：\nお名前：\n'
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

export const copy: Record<Lang, Copy> = { en, de, ja };
