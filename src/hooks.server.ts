import type { Handle } from '@sveltejs/kit';

// Sets <html lang> and <html dir> per page so screen readers, search engines
// and the browser know the language and reading direction of each version.
export const handle: Handle = ({ event, resolve }) => {
	const lang = event.params.lang ?? 'en';
	return resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace('%lang%', lang).replace('%dir%', lang === 'ar' ? 'rtl' : 'ltr')
	});
};
