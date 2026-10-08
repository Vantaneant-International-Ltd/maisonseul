<script lang="ts">
	// One typeface. Outfit stands in for Cygre, the brand-book face, until the
	// licensed Cygre files are added; swap the imports and `--sans` when they are.
	import '@fontsource/outfit/latin-300.css';
	import '@fontsource/outfit/latin-400.css';
	import '@fontsource/outfit/latin-700.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content="#121619" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Maison Seul" />
	<meta property="og:title" content="Maison Seul" />
	<meta property="og:description" content="Singular objects. Dublin. 2027." />
	<meta property="og:url" content="https://maisonseul.com/" />
	<meta property="og:image" content="https://maisonseul.com/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Maison Seul" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://maisonseul.com/og.png" />
</svelte:head>

{@render children()}

<style>
	@font-face {
		font-family: 'Noto Sans JP MA';
		src: url('/fonts/noto-sans-jp-200-kanji.woff2') format('woff2');
		font-weight: 200;
		font-display: swap;
		unicode-range: U+9593;
	}
	@font-face {
		font-family: 'Noto Sans JP MA';
		src: url('/fonts/noto-sans-jp-300-kanji.woff2') format('woff2');
		font-weight: 300;
		font-display: swap;
		unicode-range: U+9593;
	}
	@font-face {
		font-family: 'Noto Sans Runic SKRIN';
		src: url('/fonts/noto-sans-runic-skrin.woff2') format('woff2');
		font-weight: 100 900;
		font-display: swap;
		unicode-range: U+16B1, U+16B4, U+16BF, U+16C1, U+16CC;
	}
	:global(:root) {
		/* The brand book's two colours: Unlit and Blinding White, plus one grey. */
		--void: #121619;
		--ink: #f2f3f1;
		--ink-dim: #a9aeb1;
		--hairline: rgba(242, 243, 241, 0.3);

		--sans: 'Outfit', system-ui, -apple-system, sans-serif;
		--kanji: 'Noto Sans JP MA', 'Noto Sans Runic SKRIN', var(--sans);
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		background: var(--void);
		color: var(--ink);
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}

	/* Long German compounds (GRÜNDUNGSUNTERSTÜTZER) must break on a phone */
	:global(h1),
	:global(h2),
	:global(h3) {
		hyphens: auto;
		overflow-wrap: break-word;
	}

	/* Japanese: Outfit for Latin letters, the device's Japanese font for the rest */
	:global(html[lang='ja'] body) {
		font-family:
			'Outfit',
			'Hiragino Sans',
			'Hiragino Kaku Gothic ProN',
			'Noto Sans JP',
			'Yu Gothic',
			Meiryo,
			sans-serif;
	}

	:global(body) {
		font-family: var(--sans);
		font-weight: 300;
	}

	:global(::selection) {
		background: var(--ink);
		color: var(--void);
	}

	:global(a) {
		color: inherit;
	}

	:global(:focus-visible) {
		outline: 1px solid var(--ink);
		outline-offset: 4px;
	}
</style>
