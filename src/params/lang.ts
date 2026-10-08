import type { ParamMatcher } from '@sveltejs/kit';

// English lives at the root (/case-01); German and Japanese get a prefix
// (/de/case-01, /ja/case-01).
export const match: ParamMatcher = (param) => param === 'de' || param === 'ja';
