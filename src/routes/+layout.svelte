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
		content="Maison Seul. An archival fashion house. One house in each city. Home: Dublin. Coming 2027."
	/>
	<meta name="theme-color" content="#050507" />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Maison Seul" />
	<meta property="og:title" content="Maison Seul®" />
	<meta
		property="og:description"
		content="An archival fashion house. One house in each city. Home: Dublin. Coming 2027."
	/>
	<meta property="og:url" content="https://maisonseul.com/" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

{@render children()}

<style>
	:global(:root) {
		/* Cool monochrome only — echoes the misty IG still without committing
		   to a palette. No hue, no warmth. */
		--ink: #e9eaec; /* cool off-white, never pure #fff */
		--ink-dim: rgba(233, 234, 236, 0.46);
		--ink-faint: rgba(233, 234, 236, 0.24);
		--void: #050507;
		--hairline: rgba(233, 234, 236, 0.12);

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
