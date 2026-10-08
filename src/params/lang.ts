import type { ParamMatcher } from '@sveltejs/kit';

// English lives at the root (/skrin); German and Japanese get a prefix
// (/de/skrin, /ja/skrin).
export const match: ParamMatcher = (param) => param === 'de' || param === 'ja';
