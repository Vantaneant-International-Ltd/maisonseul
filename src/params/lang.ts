import type { ParamMatcher } from '@sveltejs/kit';
import { LANGS } from '$lib/prices';

// English lives at the root (/skrin); every other language gets a prefix
// (/de/skrin, /ja/skrin, /ko/skrin ...).
export const match: ParamMatcher = (param) => param !== 'en' && (LANGS as string[]).includes(param);
