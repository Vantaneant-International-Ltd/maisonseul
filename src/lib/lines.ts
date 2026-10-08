// Each line is named in the language of the place that shaped it. The native
// form leads; the Latin name and its plain English meaning sit underneath.
export type LineName = { word: string; mark: string; script: string; meaning: string };

export const LINE = {
	skrin: { word: 'SKRIN', mark: 'ᛌᚴᚱᛁᚿ', script: 'non-Runr', meaning: 'chest' },
	ma: { word: 'MA', mark: '間', script: 'ja', meaning: 'space' },
	grund: { word: 'GRUND', mark: 'GRUND', script: 'de', meaning: 'ground' },
	qutn: { word: 'QUTN', mark: 'قطن', script: 'ar', meaning: 'cotton' },
	ovol: { word: 'ÖVÖL', mark: 'ӨВӨЛ', script: 'mn', meaning: 'winter' },
	baram: { word: 'BARAM', mark: '바람', script: 'ko', meaning: 'wind' },
	si: { word: 'SĪ', mark: '絲', script: 'zh-Hant', meaning: 'silk' }
} satisfies Record<string, LineName>;

/** The line under the native name: "MA · space", or just "ground" when the native form is already Latin. */
export const under = (l: LineName) => (l.mark === l.word ? l.meaning : `${l.word} · ${l.meaning}`);
