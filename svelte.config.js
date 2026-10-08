import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
			// Every page in English, German and Japanese, plus the hidden English-only pages.
			entries: ['/case-01', '/de/case-01', '/ja/case-01', '/', '/ki', '/permanent', '/house', '/care', '/backers', '/contact', '/de', '/de/ki', '/de/permanent', '/de/house', '/de/care', '/de/backers', '/de/contact', '/ja', '/ja/ki', '/ja/permanent', '/ja/house', '/ja/care', '/ja/backers', '/ja/contact', '/shipping', '/register']
		}
	}
};

export default config;
