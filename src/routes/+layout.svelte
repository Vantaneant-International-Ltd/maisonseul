<script lang="ts">
	// Maison Seul — a fashion house of absence. Marcellus (flared Optima-alike)
	// carries the wordmark; Marcellus SC sets the small-caps labels. Nothing else
	// is needed: the brand is black, space, and restraint.
	import '@fontsource/marcellus/400.css';
	import '@fontsource/marcellus-sc/400.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Maison Seul — Coming Soon</title>
	<meta name="description" content="Maison Seul. A fashion house of absence. Arriving 2026." />
	<meta name="theme-color" content="#000000" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Maison Seul" />
	<meta property="og:title" content="Maison Seul" />
	<meta property="og:description" content="A fashion house of absence. Arriving 2026." />
	<meta property="og:url" content="https://maisonseul.com/" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}

<style>
	:global(:root) {
		/* Monochrome only. Absence is the palette. */
		--ink: #f4f3f0; /* off-white, never pure #fff */
		--ink-dim: rgba(244, 243, 240, 0.52);
		--ink-faint: rgba(244, 243, 240, 0.28);
		--void: #000000;
		--hairline: rgba(244, 243, 240, 0.14);

		--display: 'Marcellus', 'Times New Roman', serif;
		--label: 'Marcellus SC', 'Marcellus', serif;
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
		/* Marcellus is a single 400 weight — never let the browser fake bold. */
		font-synthesis: none;
	}

	:global(body) {
		font-family: var(--display);
	}

	:global(::selection) {
		background: var(--ink);
		color: var(--void);
	}

	:global(a) {
		color: inherit;
	}
</style>
