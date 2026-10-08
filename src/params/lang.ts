import type { ParamMatcher } from '@sveltejs/kit';

// English lives at the root (/ki); German and Japanese get a prefix
// (/de/ki, /ja/ki).
export const match: ParamMatcher = (param) => param === 'de' || param === 'ja';
