<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<span class="code">{$page.status}</span>
	<h1>Maison&nbsp;Seul<sup>®</sup></h1>
	<a href="/">Return</a>
</main>

<style>
	main {
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		gap: 1.4rem;
		padding: 2rem;
		background: var(--void);
	}

	.code {
		font-family: var(--mono);
		letter-spacing: 0.3em;
		font-size: 0.62rem;
		color: var(--ink-faint);
	}

	h1 {
		margin: 0;
		font-family: var(--sans);
		font-weight: 200;
		text-transform: uppercase;
		letter-spacing: 0.42em;
		text-indent: 0.42em;
		font-size: clamp(1.2rem, 5vw, 2.4rem);
		color: var(--ink);
	}

	h1 sup {
		font-size: 0.32em;
		top: -1.4em;
		letter-spacing: 0;
		color: var(--ink-faint);
	}

	a {
		margin-top: 0.5rem;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.3em;
		font-size: 0.58rem;
		color: var(--ink-dim);
		text-decoration: none;
		padding-bottom: 0.35em;
		border-bottom: 1px solid var(--hairline);
		transition: color 180ms ease, border-color 180ms ease;
	}

	a:hover {
		color: var(--ink);
		border-bottom-color: var(--ink);
	}
</style>
