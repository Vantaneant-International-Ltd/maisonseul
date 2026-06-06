<script lang="ts">
	// Deliberately identity-neutral. Maison Seul has no brand system yet, so this
	// holding page commits to nothing: a neutral grotesk (Inter) and a mono for
	// the small data lines. Nothing here should be expensive to walk back later.
	import '@fontsource/inter/200.css';
	import '@fontsource/inter/300.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/jetbrains-mono/400.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Maison Seul®</title>
	<meta
		name="description"
		content="Maison Seul — house of absence. One house in each city. Station Dublin active. Deployment 2027."
	/>
	<meta name="theme-color" content="#0b0907" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Maison Seul" />
	<meta property="og:title" content="Maison Seul® — House of Absence" />
	<meta
		property="og:description"
		content="One house in each city. Station Dublin active. Deployment 2027."
	/>
	<meta property="og:url" content="https://maisonseul.com/" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}

<style>
	:global(:root) {
		/* Umber palette — warm, earthy, muted. A warm umber-black void, bone/ecru
		   text, with amber + umber-navy haze. Luxury-archival, not cold tech. */
		--ink: #e9e0d2; /* warm bone, never pure #fff */
		--ink-dim: rgba(233, 224, 210, 0.5);
		--ink-faint: rgba(233, 224, 210, 0.26);
		--void: #0b0907; /* warm umber-black */
		--hairline: rgba(233, 224, 210, 0.12);
		/* umber accents */
		--umber: #8a5a34; /* burnt umber */
		--umber-navy: #3a4254; /* muted umber-navy */

		--sans: 'Inter', system-ui, -apple-system, sans-serif;
		--mono: 'JetBrains Mono', ui-monospace, 'SFMono-Regular', monospace;
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
	}

	:global(::selection) {
		background: var(--ink);
		color: var(--void);
	}

	:global(a) {
		color: inherit;
	}
</style>
