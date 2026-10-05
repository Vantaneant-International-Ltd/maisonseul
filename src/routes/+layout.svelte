<script lang="ts">
	// One typeface. Outfit stands in for Cygre, the brand-book face, until the
	// licensed Cygre files are added; swap the imports and `--sans` when they are.
	import '@fontsource/outfit/latin-300.css';
	import '@fontsource/outfit/latin-400.css';
	import '@fontsource/outfit/latin-700.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Maison Seul</title>
	<meta name="description" content="Maison Seul. Singular objects. Dublin. 2027." />
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
	:global(:root) {
		/* The brand book's two colours: Unlit and Blinding White, plus one grey. */
		--void: #121619;
		--ink: #f2f3f1;
		--ink-dim: #a9aeb1;
		--hairline: rgba(242, 243, 241, 0.3);

		--sans: 'Outfit', system-ui, -apple-system, sans-serif;
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
