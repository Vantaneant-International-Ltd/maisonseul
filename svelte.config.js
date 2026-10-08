import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Keep in step with src/lib/prices.ts (LANGS) and src/lib/i18n.ts (TRANSLATED).
const LANGS = ['en', 'de', 'ja', 'ko', 'zh', 'ar', 'mn', 'sv'];
const PAGES = ['/', '/skrin', '/inventory', '/permanent', '/house', '/care', '/backers', '/contact'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// GitHub Pages + custom domain (maisonseul.com). The 404.html fallback
		// serves the styled error page for any unknown URL.
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: ''
		},
		prerender: {
			// Every page in every language, plus the hidden English-only pages.
			entries: [
				...LANGS.flatMap((l) => PAGES.map((p) => (l === 'en' ? p : p === '/' ? `/${l}` : `/${l}${p}`))),
				'/case-01', '/de/case-01', '/ja/case-01', '/shipping', '/register'
			]
		}
	}
};

export default config;
