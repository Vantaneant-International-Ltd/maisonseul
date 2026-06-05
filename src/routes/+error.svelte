<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<span class="code">{$page.status}</span>
	<h1>Maison Seul</h1>
	<p>This page is absent.</p>
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
		gap: 1rem;
		padding: 2rem;
	}

	.code {
		font-family: var(--label);
		letter-spacing: 0.3em;
		font-size: 0.7rem;
		color: var(--ink-faint);
	}

	h1 {
		margin: 0;
		font-weight: 400;
		letter-spacing: 0.18em;
		text-indent: 0.18em;
		text-transform: uppercase;
		font-size: clamp(2rem, 8vw, 4rem);
	}

	p {
		margin: 0;
		color: var(--ink-dim);
		letter-spacing: 0.04em;
	}

	a {
		margin-top: 1.5rem;
		font-family: var(--label);
		text-transform: uppercase;
		letter-spacing: 0.3em;
		font-size: 0.66rem;
		color: var(--ink);
		text-decoration: none;
		padding-bottom: 0.35em;
		border-bottom: 1px solid var(--hairline);
		transition: border-color 180ms ease;
	}

	a:hover {
		border-bottom-color: var(--ink);
	}
</style>
