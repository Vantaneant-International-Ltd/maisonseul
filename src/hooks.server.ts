import type { Handle } from '@sveltejs/kit';

// Sets <html lang> per page so screen readers and search engines know the
// language of each version.
export const handle: Handle = ({ event, resolve }) =>
	resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', event.params.lang ?? 'en')
	});
