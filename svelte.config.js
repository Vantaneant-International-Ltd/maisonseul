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
			entries: ['*']
		}
	}
};

export default config;
