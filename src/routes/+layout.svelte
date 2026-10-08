<script lang="ts">
	// One typeface. Outfit stands in for Cygre, the brand-book face, until the
	// licensed Cygre files are added; swap the imports and `--sans` when they are.
	import '@fontsource/outfit/latin-400.css';
	import '@fontsource/outfit/latin-ext-400.css';
	import '@fontsource/outfit/latin-700.css';
	// The brand book's label face: a plain mono for kickers, labels and numbers.
	import '@fontsource/ibm-plex-mono/latin-400.css';

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
		unicode-range: U+9593, U+4E00, U+4E8C, U+4E09, U+7D72;
	}
	@font-face {
		font-family: 'Noto Sans JP MA';
		src: url('/fonts/noto-sans-jp-300-kanji.woff2') format('woff2');
		font-weight: 300;
		font-display: swap;
		unicode-range: U+9593, U+4E00, U+4E8C, U+4E09, U+7D72;
	}
	@font-face {
		font-family: 'Noto Sans Runic SKRIN';
		src: url('/fonts/noto-sans-runic-skrin.woff2') format('woff2');
		font-weight: 100 900;
		font-display: swap;
		unicode-range: U+16B1, U+16B4, U+16BF, U+16C1, U+16CC;
	}
	/* The brand book's own alphabet (page ???). One letter per symbol, drawn
	   from three Noto fonts so every letter exists on every device. */
	@font-face {
		font-family: 'MS Cipher';
		src: url('/fonts/cipher-a.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+23C3, U+23DA, U+260A, U+2385, U+238E, U+260C, U+260D, U+2330, U+2307, U+23C1, U+238D, U+2390;
	}
	@font-face {
		font-family: 'MS Cipher';
		src: url('/fonts/cipher-b.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+27D2, U+2291, U+27DF, U+27CA, U+22D4, U+22CF, U+235C, U+233F, U+2340, U+2359, U+22AC, U+22C9;
	}
	@font-face {
		font-family: 'MS Cipher';
		src: url('/fonts/cipher-c.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+237E, U+2316;
	}
	/* ÖVÖL is written ӨВӨЛ (Mongolian Cyrillic); BARAM is written 바람 (Korean). */
	@font-face {
		font-family: 'MS Script';
		src: url('/fonts/montserrat-ovol-a.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+0412, U+041B;
	}
	@font-face {
		font-family: 'MS Script';
		src: url('/fonts/montserrat-ovol-b.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+04E8;
	}
	@font-face {
		font-family: 'MS Script';
		src: url('/fonts/noto-sans-kr-baram.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+BC14, U+B78C;
	}
	@font-face {
		font-family: 'MS Script';
		src: url('/fonts/noto-kufi-qutn.woff2') format('woff2');
		font-display: swap;
		unicode-range: U+0642, U+0637, U+0646;
	}
	:global(:root) {
		/* The brand book's two colours: Unlit and Blinding White, plus one grey. */
		--void: #121619;
		--ink: #f2f3f1;
		--ink-dim: #a9aeb1;
		--hairline: rgba(242, 243, 241, 0.3);

		--sans: 'Outfit', system-ui, -apple-system, sans-serif;
		--mono: 'IBM Plex Mono', ui-monospace, Menlo, monospace;
		--cipher: 'MS Cipher', var(--sans);
		--kanji: 'Noto Sans JP MA', 'Noto Sans Runic SKRIN', 'MS Script', var(--sans);
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
		font-weight: 400;
	}

	/* Labels in the brand book are set in mono */
	:global(.kicker),
	:global(dt),
	:global(.mono) {
		font-family: var(--mono);
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
