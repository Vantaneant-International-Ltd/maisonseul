// Languages and prices. Prices are fixed per currency, not converted live,
// rounded from the euro price. Check the non-euro ones before sales open.
// case01 / ma etc: the normal price when sales open.
// case01Back / maBack: founding backer amount, object included.

export type Lang = 'en' | 'de' | 'ja' | 'ko' | 'zh' | 'ar' | 'mn' | 'sv';
export const LANGS: Lang[] = ['en', 'de', 'ja', 'ko', 'zh', 'ar', 'mn', 'sv'];
export type Currency = 'eur' | 'jpy' | 'krw' | 'cny' | 'aed' | 'mnt' | 'sek';

export type Prices = {
	case01: string; case01Back: string; ma: string; maBack: string;
	jiTee: string; jiLong: string; ovolLight: string; ovolHeavy: string; baram: string;
	qutnPoplin: string; qutnCanvas: string; si: string; currency: Currency;
};

export const P: Record<Lang, Prices> = {
	en: { case01: '€525', case01Back: '€1,000', ma: '€125', maBack: '€250', jiTee: '€65', jiLong: '€85', ovolLight: '€165', ovolHeavy: '€320', baram: '€95', qutnPoplin: '€110', qutnCanvas: '€140', si: '€290', currency: 'eur' },
	de: { case01: '525 €', case01Back: '1.000 €', ma: '125 €', maBack: '250 €', jiTee: '65 €', jiLong: '85 €', ovolLight: '165 €', ovolHeavy: '320 €', baram: '95 €', qutnPoplin: '110 €', qutnCanvas: '140 €', si: '290 €', currency: 'eur' },
	ja: { case01: '¥95,000', case01Back: '¥180,000', ma: '¥22,000', maBack: '¥45,000', jiTee: '¥12,000', jiLong: '¥15,500', ovolLight: '¥30,000', ovolHeavy: '¥58,000', baram: '¥17,500', qutnPoplin: '¥20,000', qutnCanvas: '¥26,000', si: '¥52,000', currency: 'jpy' },
	ko: { case01: '₩840,000', case01Back: '₩1,600,000', ma: '₩200,000', maBack: '₩400,000', jiTee: '₩105,000', jiLong: '₩135,000', ovolLight: '₩265,000', ovolHeavy: '₩510,000', baram: '₩150,000', qutnPoplin: '₩175,000', qutnCanvas: '₩225,000', si: '₩465,000', currency: 'krw' },
	zh: { case01: '¥4,350', case01Back: '¥8,300', ma: '¥1,050', maBack: '¥2,100', jiTee: '¥540', jiLong: '¥700', ovolLight: '¥1,380', ovolHeavy: '¥2,650', baram: '¥790', qutnPoplin: '¥910', qutnCanvas: '¥1,160', si: '¥2,400', currency: 'cny' },
	ar: { case01: 'AED 2,250', case01Back: 'AED 4,300', ma: 'AED 540', maBack: 'AED 1,075', jiTee: 'AED 280', jiLong: 'AED 365', ovolLight: 'AED 710', ovolHeavy: 'AED 1,375', baram: 'AED 410', qutnPoplin: 'AED 475', qutnCanvas: 'AED 600', si: 'AED 1,250', currency: 'aed' },
	mn: { case01: '2,050,000₮', case01Back: '3,900,000₮', ma: '490,000₮', maBack: '975,000₮', jiTee: '255,000₮', jiLong: '330,000₮', ovolLight: '645,000₮', ovolHeavy: '1,250,000₮', baram: '370,000₮', qutnPoplin: '430,000₮', qutnCanvas: '545,000₮', si: '1,130,000₮', currency: 'mnt' },
	sv: { case01: '5 900 kr', case01Back: '11 200 kr', ma: '1 400 kr', maBack: '2 800 kr', jiTee: '730 kr', jiLong: '950 kr', ovolLight: '1 850 kr', ovolHeavy: '3 600 kr', baram: '1 050 kr', qutnPoplin: '1 250 kr', qutnCanvas: '1 550 kr', si: '3 250 kr', currency: 'sek' }
};
