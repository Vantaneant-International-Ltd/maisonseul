import type { Copy } from '$lib/i18n';
import { P } from '$lib/prices';

// Swedish. Machine translation; have a native speaker read it before promotion.
export const sv: Copy = {
	prices: P.sv,
	taxNote: 'inkl. moms',
	bar: 'Formgiven i Dublin. Tillverkad i Kina.',
	photo: 'Fotografi kommer',
	nav: { inventory: 'Sortiment', permanent: 'Permanent', house: 'Huset', care: 'Skötsel', contact: 'Kontakt', back: 'Stödjare', language: 'Språk' },
	foot: {
		objects: 'Föremål',
		lines: 'Linjerna',
		permanent: 'Permanent kollektion',
		ma: 'MA, denim',
		ji: 'GRUND, t-shirts',
		ovol: 'ÖVÖL, jackor',
		baram: 'BARAM, joggers',
		qutn: 'QUTN, skjortor',
		house: 'Huset',
		care: 'Skötsel och reparation',
		back: 'Grundande stödjare',
		contact: 'Kontakt',
		tagline: 'Ett hus inom VNTA. Dublin.',
		legal:
			'Apple, MacBook, MacBook Air, MacBook Pro, AirPods och AirTag är varumärken som tillhör Apple Inc. Maison Seul är inte knutet till eller godkänt av Apple.'
	},
	home: {
		title: 'Maison Seul',
		description: 'Maison Seul. Enstaka föremål. Formgivna i Dublin.',
		tagline: 'Enstaka föremål.'
	},
	case01: {
		title: 'SKRIN / Maison Seul',
		description: 'SKRIN. En kabinväska i aluminium. Utgåva 001, hundra exemplar. Hundra grundande stödjare.',
		kicker: 'Föremål 01 / Kabinväska',
		variant: 'Grafit / Utgåva 001 / 100 exemplar',
		status: 'Ännu inte till salu.',
		backNote: 'Hundra grundande stödjare gör SKRIN möjlig. Var och en får en väska, och deras initialer graveras inuti varje SKRIN som någonsin tillverkas.',
		cta: `Bli grundande stödjare, ${P.sv.case01Back}`,
		backersTitle: 'Grundande stödjare',
		backersText: 'Deras initialer är graverade på en platta inuti locket på varje SKRIN som någonsin tillverkas. Varje ägarkort nämner dem och säger varför.',
		note: 'Tillverkas en gång i den här finishen. Numrerad 001 till 100 inuti locket.',
		viewsLabel: 'Vyer',
		views: ['Framifrån', 'Trekvart', 'Rått hörn', 'Insida', 'Serienummerplatta'],
		followSuffix: 'Fotografi kommer.',
		introTitle: 'En väska. Inget annat.',
		intro:
			'En kabinväska i aluminium utan logotyp, med ett rått hörn och plats inbyggd för det du redan bär med dig. Det första föremålet från Maison Seul.',
		carryTitle: 'Gjord för det du bär',
		carrySub: 'MacBook, AirTag, laddare. Allt har sin plats.',
		carry: [
			{ title: 'MacBook-fack', text: 'Ett vadderat fack i locket, för MacBook Pro 16 tum och allt som är mindre.' },
			{ title: 'AirTag-ficka', text: 'En dold ficka i ramen. Lägg i en AirTag en gång och glöm att den finns där.' },
			{ title: 'Kabelficka', text: 'En platt ficka med blixtlås för laddare, kablar och AirPods, så att inget rullar runt.' }
		],
		reasonsLabel: 'Detaljer',
		reasons: [
			{ title: 'Ett rått hörn.', text: 'Sju hörn i grafit. Ett lämnat i rå aluminium.' },
			{ title: 'Fyra skruvar.', text: 'Varje hjul lossas med en skruvmejsel.' },
			{ title: 'Den får märken.', text: 'Aluminium minns varje resa. Det är meningen.' },
			{ title: 'Ingen logotyp.', text: 'Ditt nummer, graverat i liten storlek bredvid handtaget.' }
		],
		specsTitle: 'Detaljer',
		specs: [
			{
				label: 'Detaljer',
				lines: [
					'Aluminiumram, två spännen, inget blixtlås',
					'TSA-godkända kodlås',
					'Fyra dubbla snurrhjul, utbytbara',
					'Teleskophandtag, utbytbart'
				]
			},
			{
				label: 'Mått och vikt',
				lines: [
					'55 × 40 × 20 cm, inklusive hjul och handtag',
					'Vikt och volym bekräftas med det första provexemplaret'
				]
			},
			{
				label: 'Kompatibilitet',
				lines: [
					'MacBook Pro 16 tum, 14 tum och MacBook Air i lockets fack',
					'En AirTag i ramens ficka. AirTag ingår inte',
					'Kabinmått hos Ryanair (betalt kabinbagage), Aer Lingus, Lufthansa och British Airways',
					'Lufthansa tillåter 8 kg totalt, vilket lämnar ungefär 3,7 kg för dina saker. Flygbolagens regler ändras, så kontrollera innan du flyger'
				]
			},
			{ label: 'Finish', lines: ['Grafit, matt anodiserad', 'Ett hörn i rå aluminium'] },
			{ label: 'Material', lines: ['Skal och ram i aluminium-magnesium', 'Foder i polyester, ljusgrått'] },
			{ label: 'I lådan', lines: ['SKRIN', 'Dammskydd', 'Ägarkort med ditt nummer', 'Kort för skötsel och reparation'] },
			{
				label: 'Returer och garanti',
				lines: [
					'14 dagar att returnera den oanvänd, mot full återbetalning',
					'5 år på skal, ram, hjul, handtag och spännen. Bucklor och repor omfattas inte'
				]
			}
		],
		faqTitle: 'Frågor',
		faq: [
			{
				q: 'Var tillverkas den?',
				a: 'Formgiven i Dublin. Tillverkad i Kina, av en specialiserad aluminiumfabrik som vi namnger här innan något skickas. Varje parti kontrolleras innan det lämnar fabriken.'
			},
			{
				q: 'Vad händer när de hundra är borta?',
				a: 'Grafit tillverkas inte igen. SKRIN fortsätter i en ny finish, och reservdelar finns kvar i lager för varje utgåva.'
			},
			{
				q: 'Vad är en grundande stödjare?',
				a: `En av 100 personer som finansierar SKRIN innan den finns. För ${P.sv.case01Back} får du en väska när den är klar, dina initialer graveras inuti varje SKRIN som någonsin tillverkas, och ditt namn står på varje ägarkort. Om den aldrig levereras får du tillbaka dina pengar.`
			},
			{
				q: 'Är Maison Seul en del av Apple?',
				a: 'Nej. Vi formger kring Apples enheter eftersom de flesta vi formger för bär dem.'
			}
		],
		trustLabel: 'Löften',
		trust: ['Formgiven i Dublin, tillverkad i Kina', 'Numrerade utgåvor', 'Reparerbar', '14 dagars ångerrätt']
	},
	ma: {
		title: 'Permanent / Maison Seul',
		description: 'Den permanenta kollektionen. MA, denim i tre passformer: 一, 二, 三. GRUND, en t-shirt och en långärmad. ÖVÖL, en lätt och en tjock jacka. QUTN, skjortor i poplin och canvas. BARAM, ballongjoggers. SĪ, ett loungeset i siden.',
		kicker: 'Permanent kollektion',
		lead: 'Denim i tre passformer, numrerade efter hur mycket utrymme de lämnar: 一, 二 och 三. Ma är det japanska ordet för utrymmet mellan saker. Här är det utrymmet mellan tyget och dig.',
		lead2: 'Proportioner från nittiotalets Tokyo, omritade med en byggnads linjer. Ingen utgåva. Tillverkas fortlöpande och finns alltid.',
		stylesLabel: 'De tre passformerna',
		denim: 'Denim',
		fitLabel: 'Passform',
		fits: ['Rak', 'Vid', 'Tunna'],
		fitNote: 'Siffran är mängden ma: utrymmet mellan tyget och dig.',
		styles: [
			'Rak från höft till fåll, med utrymme hela vägen ner.',
			'Låg och vid. Fållen bryts över skon.',
			'Svängd utåt vid knät, indragen igen vid fållen.'
		],
		outline: 'kontur',
		price: 'Pris',
		status: 'Status',
		statusValue: 'Under utveckling',
		arrives: 'Kommer',
		arrivesValue: 'När den är klar.',
		edition: 'Utgåva',
		editionValue: 'Ingen. Permanent.',
		cta: `Bli grundande stödjare, ${P.sv.maBack}`,
		backersTitle: 'Grundande stödjare',
		backersText: 'Hundra grundande stödjare gör MA möjlig. Deras initialer vävs in i ett mönster som vi formger, inuti varje par MA som någonsin tillverkas. Varje stödjare får ett par, i den modell och storlek de väljer, när det är klart.'
	},
	ji: {
		title: 'GRUND',
		lead: 'En t-shirt och en långärmad. Grund är tyska för mark och för grundval, och på svenska betyder ordet detsamma. Lagret som allt annat vilar på.',
		lead2: 'Proportionerna hos en jeans-t-shirt från nittiotalet: fyrkantig, nedsänkt axel, kort rak kropp. Skuren med tysk återhållsamhet: exakta längder, tät halsringning, inget tryckt på utsidan.',
		pieces: [
			{ name: 'Tee', line: 'Kort ärm till armbågen. Fållen slutar vid höften.' },
			{ name: 'Longsleeve', line: 'Lång mudd som veckar sig vid handleden. Samma kropp.' }
		],
		coloursLabel: 'Tre färger',
		colours: ['Unlit', 'Concrete', 'Blinding White'],
		detailsLabel: 'Gjord så här',
		details: [
			'240 g tung bomullstrikå, stickad som en tub: inga sidsömmar.',
			'Smal ribbstickad halsringning som behåller formen.',
			'Ingen logotyp på utsidan. Namnet är tryckt på insidan, i nacken.'
		],
		priceTee: 'Tee',
		priceLong: 'Longsleeve'
	},
	ovol: {
		lead: 'Två jackor. Övöl är mongoliska för vinter, skrivet ӨВӨЛ. Ulaanbaatar är världens kallaste huvudstad; de här är skurna för dagar som dess dagar.',
		lead2: 'Light håller ute vind och regn och packas ner i sin egen ficka. Heavy är fylld med dun, för riktig kyla. Samma fyrkantiga axlar, samma långa rygg, inget tryckt på utsidan.',
		pieces: [
			{ name: 'Light', line: 'Ett skal med huva. Tejpade sömmar, dubbelriktat blixtlås.' },
			{ name: 'Heavy', line: 'Dunfylld, med hög krage och breda kanaler.' }
		],
		coloursLabel: 'Två färger',
		colours: ['Unlit', 'Concrete'],
		details: [
			'Light: ett vattentätt, andningsbart treskiktsskal.',
			'Heavy: dunfyllning under ett vattenavvisande yttertyg.',
			'Fickor gjorda för telefon och handskar. Namnet är tryckt på insidan.'
		]
	},
	baram: {
		lead: 'Joggers. Baram är koreanska för vind, skrivet 바람. Benet fylls av luft som ett segel.',
		lead2: 'Vida över lår och knä, sedan smalare mot en öppen fåll, så att benet blåser upp och faller över skon. Ingen mudd. En lågt sittande midja med dragsko.',
		pieces: [{ name: 'Jogger', line: 'En modell. Ballongben, öppen fåll.' }],
		coloursLabel: 'Två färger',
		colours: ['Unlit', 'Concrete'],
		details: [
			'400 g bomullsfleece, borstad på insidan.',
			'Djupa sidfickor och en bakficka.',
			'Ingen logotyp på utsidan. Namnet är tryckt inuti linningen.'
		]
	},
	qutn: {
		lead: 'Skjortor. Qutn är arabiska för bomull, skrivet قطن. Det engelska ordet cotton kommer därifrån, och den långfibriga bomull som ger den finaste poplinen växer längs Nilen.',
		lead2: 'Proportionerna hos en skjorta från nittiotalet: fyrkantig, nedsänkt axel, lång rak fåll som bärs innanför eller utanför. Knappar dolda under en enkel slå. Ingen ficka, ingen logotyp.',
		pieces: [
			{ name: 'Poplin', line: 'Krispig och lätt. Bärs för sig själv.' },
			{ name: 'Canvas', line: 'Tyngre, bärs öppen som överskjorta.' }
		],
		coloursLabel: 'Tre färger',
		colours: ['Blinding White', 'Unlit', 'Concrete'],
		details: [
			'Poplin: tätt vävd tvåtrådig bomull.',
			'Canvas: en tät bomullscanvas som mjuknar med användning.',
			'Dold knappslå. Namnet är tryckt på insidan av oket.'
		]
	},
	inventory: {
		title: 'Sortiment / Maison Seul',
		description: 'Allt som Maison Seul gör, på ett ställe. Ett föremål i numrerad utgåva, och plagg som består.',
		kicker: 'Sortiment',
		h1: 'Allt, på ett ställe.',
		lead: 'Ett föremål i numrerad utgåva. Plagg som består, i storlekar för män och kvinnor. Inget är till salu ännu.',
		filterLabel: 'Visa',
		cats: { all: 'Allt', objects: 'Föremål', tops: 'Överdelar', outer: 'Ytterkläder', bottoms: 'Underdelar', lounge: 'Loungewear' },
		edition: 'Utgåva 001 / 100',
		permanent: 'Permanent',
		pieces: '{n} plagg',
		sortLabel: 'Ordning',
		sortNo: 'Efter nummer',
		sortLow: 'Pris ↑',
		sortHigh: 'Pris ↓'
	},
	si: {
		lead: 'Loungewear. Sī är kinesiska för siden, skrivet 絲. Siden vävdes först i Kina, för mer än femtusen år sedan.',
		lead2: 'Ett set, för män och kvinnor: en skjorta med öppen krage och en byxa med dragsko, paspoalerad i varje kant. En färg, grafit, det gråsvarta i ett rum innan ljuset tänds.',
		pieces: [
			{ name: 'Shirt', line: 'Öppen krage, en bröstficka, paspoalerade kanter.' },
			{ name: 'Trouser', line: 'Midja med dragsko, rakt och ledigt ben.' }
		],
		coloursLabel: 'En färg',
		colours: ['Graphite'],
		details: [
			'Sandtvättat siden: mjukt och matt snarare än blankt.',
			'Säljs som set. Storlekar för män och kvinnor.',
			'Namnet är tryckt på insidan av kragen.'
		],
		set: 'Set'
	},
	house: {
		title: 'Huset / Maison Seul',
		description: 'Maison Seul är ett designhus i Dublin. Ett föremål i taget.',
		kicker: 'Huset',
		h1: 'Färre saker. Bättre saker.',
		lead: 'Maison Seul är ett designhus i Dublin. Vi gör ett föremål i taget och håller vart och ett reparerbart så länge du äger det.',
		sections: [
			{
				h: 'Ett föremål i taget',
				p: ['Inget görs för att fylla en katalog. SKRIN är det första föremålet. MA (denim), GRUND (t-shirts), QUTN (skjortor), ÖVÖL (jackor), BARAM (joggers) och SĪ (loungewear) följer, var och en namngiven på språket från den plats som format den.']
			},
			{
				h: 'Utgåvor och den permanenta kollektionen',
				p: [
					'Vissa föremål kommer i numrerade utgåvor. Varje finish tillverkas en gång, i ett bestämt antal, och varje exemplar bär sitt nummer på insidan. Designen består; nästa utgåva kommer i en ny finish.',
					'Andra är permanenta. De tillverkas fortlöpande, numreras aldrig och utgår aldrig, så att paret du köper nu fortfarande finns när du behöver ett till.'
				]
			},
			{
				h: 'Behålls längre',
				p: [
					'Varje del som slits kan bytas ut, och vi har de delarna i lager för varje utgåva. Bucklor och repor är inte fel. Aluminium bär spår av var det har varit.'
				]
			},
			{
				h: 'Var det tillverkas',
				p: [
					'Formgiven i Dublin. Tillverkad i Kina. Just nu tillverkas allt vi gör där: SKRIN av en specialiserad aluminiumfabrik, MA och GRUND av klädtillverkare som vi väljer med samma omsorg. Vi namnger varje fabrik här innan något skickas, och vi kontrollerar varje parti innan det lämnar fabriken.', 'Vi berättar hellre var det tillverkas än låter dig gissa. Om det ändras, ändras den här sidan först.'
				]
			},
			{ h: 'En del av VNTA', p: ['Maison Seul är ett hus inom VNTA.'] }
		]
	},
	care: {
		title: 'Skötsel och reparation / Maison Seul',
		description: 'Hur du sköter SKRIN, byter dess delar och får den reparerad.',
		kicker: 'Skötsel och reparation',
		h1: 'Fyra skruvar, och delarna som hör till.',
		lead: 'Hjulen, handtaget och spännena lossas med en skruvmejsel. Vi har delarna för varje utgåva, så att SKRIN kan hållas i bruk i stället för att ersättas.',
		everydayTitle: 'Daglig skötsel',
		everyday: [
			'Torka av skalet med en mjuk, fuktig trasa. Lite mild tvål vid behov. Inget slipande.',
			'Torka av fodret med en fuktig trasa. Låt det torka öppet.',
			'Förvara den tom, stängd och stående, skyddad från direkt sol.',
			'Bucklor och repor hör till aluminium. De räknas inte som fel, och vi låtsas inte att de inte kommer att uppstå.'
		],
		wheelTitle: 'Byt ett hjul',
		wheel: [
			'Töm väskan och lägg den på rygg.',
			'Lossa de fyra skruvarna som håller hjulet med en skruvmejsel.',
			'Lyft bort det gamla hjulet.',
			'Sätt dit det nya hjulet och dra åt de fyra skruvarna jämnt. Dra inte åt för hårt.'
		],
		wheelAfter: 'Handtaget, spännena och fötterna lossas på samma sätt. En fullständig guide följer med väskan.',
		partsTitle: 'Reservdelar',
		partsHead: ['Del', 'Kommentar'],
		parts: [
			['Dubbelt snurrhjul', 'Ett hörn. Fyra skruvar.'],
			['Teleskophandtag', 'Komplett enhet.'],
			['Spänne med kodlås', 'Ett spänne.'],
			['Hörnskydd', 'Grafit eller rå aluminium.'],
			['Fot', 'Två i ett set.']
		],
		partsAfter: 'Kostnadsfritt inom 5 års garanti. Därefter till självkostnadspris plus porto. Priserna publiceras när försäljningen öppnar.',
		repairTitle: 'Reparation hos oss',
		repairBefore: 'Mejla',
		repairAfter: 'med ditt serienummer och ett foto av problemet. Vi skickar delen, eller ordnar en reparation om det behövs.'
	},
	backers: {
		title: 'Grundande stödjare / Maison Seul',
		description: 'Hundra grundande stödjare per föremål. Ditt föremål när det är klart, och dina initialer i varje exemplar som någonsin tillverkas.',
		kicker: 'Grundande stödjare',
		h1: 'Gör det möjligt.',
		lead: 'Maison Seul finansieras av de människor som vill att dess föremål ska finnas. Hundra grundande stödjare per föremål. I gengäld blir du en del av föremålet, för alltid.',
		count: '{n} av 100 stödjare',
		noneYet: 'Inga ännu. Bli den första.',
		items: {
			case01: {
				sub: 'Kabinväska i aluminium. Utgåva 001.',
				gives: [
					'En SKRIN, när den är klar',
					'Dina initialer, upp till tre bokstäver, graverade på stödjarplattan inuti varje SKRIN som någonsin tillverkas',
					'Ditt namn och skälet på varje ägarkort'
				],
				cta: `Stöd SKRIN, ${P.sv.case01Back}`
			},
			ma: {
				sub: 'Denim i tre modeller. Permanent.',
				gives: [
					'Ett par MA i den modell och storlek du väljer, när det är klart',
					'Dina initialer invävda i MA-mönstret, inuti varje par som någonsin tillverkas',
					'Ditt namn och skälet på varje ägarkort'
				],
				cta: `Stöd MA, ${P.sv.maBack}`
			}
		},
		amountLabel: 'Grundande stödjare',
		termsTitle: 'Villkoren, rakt på sak',
		terms: [
			'När: när det är klart. Inget datum utlovas, och vi skriver till stödjarna i varje skede.',
			'Om det aldrig levereras får du tillbaka alla dina pengar.',
			'Du kan begära full återbetalning när som helst innan ditt föremål skickas. Om tillverkningen har börjat kan dina initialer redan finnas i tillverkade exemplar.',
			'Att stödja är en förbeställning till grundarpris, inte en investering. Det ger ingen andel i företaget.',
			'Hundra stödjare per föremål. Ett stöd per person och föremål.',
			`Ordinarie priser när försäljningen öppnar: SKRIN ${P.sv.case01}, MA ${P.sv.ma}.`
		],
		paidNote: 'Betalningen sker på en säker kassasida.',
		emailNote: 'Kassan öppnar snart. Till dess kan du mejla oss för att skriva upp dig. Inget debiteras.',
		emailCta: 'Skriv upp mig',
		emailSubject: 'Grundande stödjare',
		emailBody: 'Jag vill bli grundande stödjare.\n\nFöremål: SKRIN / MA (stryk ett)\nInitialer (upp till 3 bokstäver):\nNamn:\n'
	},
	contact: {
		title: 'Kontakt / Maison Seul',
		description: 'Kontakta Maison Seul.',
		kicker: 'Kontakt',
		h1: 'En adress.',
		reply: 'Besvaras av en människa.',
		repairTitle: 'För en reparation eller en del',
		repair: 'Ange ditt serienummer och bifoga ett foto. Numret står på plattan inuti locket.'
	}
};
