<script lang="ts">
	import { page } from '$app/stores';
	import Wordmark from '$lib/Wordmark.svelte';

	// Everything past the lock. Unlisted: noindex, not in the sitemap, not
	// linked from the holding page. Anyone with an address can still open it.
	let { children } = $props();

	const nav = [
		{ href: '/case-01', label: 'CASE 01' },
		{ href: '/permanent', label: 'Permanent' },
		{ href: '/house', label: 'The house' },
		{ href: '/care', label: 'Care' },
		{ href: '/contact', label: 'Contact' }
	];
	const footLinks = [
		{ href: '/case-01', label: 'CASE 01' },
		{ href: '/permanent', label: 'Permanent collection' },
		{ href: '/house', label: 'The house' },
		{ href: '/care', label: 'Care and repair' },
		{ href: '/shipping', label: 'Shipping, returns and warranty' },
		{ href: '/register', label: 'Register a serial' },
		{ href: '/contact', label: 'Contact' }
	];
	const here = (href: string) => ($page.url.pathname.replace(/\/$/, '') === href ? 'page' : undefined);
</script>

<svelte:head>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<p class="bar">Designed in Dublin.</p>

<header class="top">
	<a class="home" href="/case-01" aria-label="Maison Seul, CASE 01"><Wordmark /></a>
	<nav aria-label="Main">
		{#each nav as n}
			<a href={n.href} aria-current={here(n.href)}>{n.label}</a>
		{/each}
		<a class="reserve" href="/case-01#reserve">Reserve</a>
	</nav>
</header>

{@render children()}

<footer>
	<div class="brand">
		<span class="wm"><Wordmark /></span>
		<p>A VNTA house. Dublin.</p>
		<p>[Company name, registered address, VAT number]</p>
	</div>
	<nav aria-label="Footer">
		{#each footLinks as f}
			<a href={f.href} aria-current={here(f.href)}>{f.label}</a>
		{/each}
	</nav>
	<div class="contact">
		<a href="mailto:studio@maisonseul.com">studio@maisonseul.com</a>
	</div>
	<p class="legal">
		Apple, MacBook, MacBook Air, MacBook Pro, AirPods and AirTag are trademarks of Apple Inc.
		Maison Seul is not affiliated with or endorsed by Apple.
	</p>
</footer>

<style>
	:global(:root) {
		--raised: #1a1f23;
		--line: #2e3438;
		--paper: #f4f4f2;
		--paper-ink: #121619;
		--paper-dim: #4a4f53;
		--gutter: clamp(1rem, 5vw, 5rem);
	}

	.bar {
		margin: 0;
		padding: 0.6rem var(--gutter);
		border-bottom: 1px solid var(--line);
		text-align: center;
		font-size: 0.75rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}

	.top {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0 1.5rem;
		padding: 0.5rem var(--gutter);
		min-height: 4.5rem;
		border-bottom: 1px solid var(--line);
	}
	.home {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 1.25rem;
		text-decoration: none;
	}
	.top nav {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		overflow-x: auto;
		max-width: 100%;
	}
	.top nav a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0 0.75rem;
		white-space: nowrap;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--ink-dim);
	}
	.top nav a:hover,
	.top nav a[aria-current='page'] {
		color: var(--ink);
	}
	.top nav a.reserve {
		margin-left: 0.5rem;
		border: 1px solid var(--ink);
		color: var(--ink);
	}

	footer {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) minmax(0, 1fr);
		gap: 2rem 3rem;
		padding: 3rem var(--gutter);
		border-top: 1px solid var(--line);
	}
	.wm {
		font-size: 1.25rem;
	}
	footer p {
		margin: 0.5rem 0 0;
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	footer nav {
		display: flex;
		flex-direction: column;
	}
	footer a {
		display: inline-flex;
		align-items: center;
		min-height: 40px;
		font-size: 0.9375rem;
		text-decoration: none;
		color: var(--ink-dim);
	}
	footer a:hover,
	footer a[aria-current='page'] {
		color: var(--ink);
	}
	footer .legal {
		grid-column: 1 / -1;
		font-size: 0.75rem;
	}

	/* Shared text-page styles for The house, Care, Shipping, Register, Contact */
	:global(.doc) {
		max-width: 48rem;
		margin: 0 auto;
		padding: clamp(3rem, 8vw, 6rem) var(--gutter);
	}
	:global(.doc .kicker) {
		margin: 0 0 1rem;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	:global(.doc h1) {
		margin: 0;
		font-weight: 200;
		font-size: clamp(2.25rem, 5vw, 3.75rem);
		line-height: 1.05;
	}
	:global(.doc .lead) {
		margin: 1.5rem 0 0;
		font-size: 1.1875rem;
		color: #d5d8d9;
	}
	:global(.doc section) {
		margin-top: 3rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--line);
	}
	:global(.doc h2) {
		margin: 0 0 0.75rem;
		font-weight: 300;
		font-size: 1.375rem;
		text-transform: uppercase;
		letter-spacing: 0.02em;
	}
	:global(.doc p),
	:global(.doc li) {
		color: #d5d8d9;
	}
	:global(.doc p) {
		margin: 0 0 0.75rem;
	}
	:global(.doc ol),
	:global(.doc ul) {
		margin: 0;
		padding-left: 1.25rem;
	}
	:global(.doc ol + p),
	:global(.doc ul + p) {
		margin-top: 1rem;
	}
	:global(.doc li + li) {
		margin-top: 0.4rem;
	}
	:global(.doc table) {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9375rem;
	}
	:global(.doc th),
	:global(.doc td) {
		padding: 0.7rem 0.5rem 0.7rem 0;
		text-align: left;
		border-bottom: 1px solid var(--line);
		vertical-align: top;
	}
	:global(.doc th) {
		font-weight: 400;
		font-size: 0.8125rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	:global(.doc .table-wrap) {
		overflow-x: auto;
	}

	@media (max-width: 760px) {
		.top {
			flex-direction: column;
			align-items: stretch;
			padding-bottom: 0;
		}
		.top nav {
			flex-wrap: wrap;
			overflow: visible;
			max-width: none;
			margin: 0 calc(var(--gutter) * -1);
			padding: 0.25rem var(--gutter);
			border-top: 1px solid var(--line);
		}
		.top nav a.reserve {
			margin-left: 0;
		}
		.top nav a {
			padding: 0 0.6rem;
		}
		.top nav a:first-child {
			padding-left: 0;
		}
		footer {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 600px) {
		.bar {
			font-size: 0.6875rem;
			letter-spacing: 0.1em;
		}
	}
</style>
