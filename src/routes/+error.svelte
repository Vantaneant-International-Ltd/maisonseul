<script lang="ts">
	import { page } from '$app/stores';
	import Wordmark from '$lib/Wordmark.svelte';
</script>

<main>
	<h1><Wordmark /></h1>
	<p>{$page.status}</p>
	<a href="/">Return</a>
</main>

<style>
	main {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		padding: 2rem;
		text-align: center;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.5rem, 6vw, 3rem);
		font-weight: inherit;
	}

	p,
	a {
		margin: 0;
		font-size: 0.75rem;
		font-weight: 300;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}

	a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		text-decoration: none;
		transition: color 180ms ease;
	}

	a:hover,
	a:focus-visible {
		color: var(--ink);
	}
</style>
