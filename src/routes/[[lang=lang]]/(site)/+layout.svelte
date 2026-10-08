<script lang="ts">
	import { page } from '$app/stores';
	import Wordmark from '$lib/Wordmark.svelte';
	import LangSwitch from '$lib/LangSwitch.svelte';
	import { basePath, copy, langOf, lp } from '$lib/i18n';
	import { STUDIO_EMAIL } from '$lib/config';
	import Cipher from '$lib/Cipher.svelte';
	import { LINES } from '$lib/cipher';

	// Everything past the home page, in English, German or Japanese. Public, in
	// teaser mode: nothing is on sale, and the one action is founding backing.
	let { children } = $props();

	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const base = $derived(basePath($page.url.pathname));
	const here = (href: string) => (base === href ? 'page' : undefined);

	const nav = $derived([
		{ href: '/skrin', label: 'SKRIN', kanji: 'ᛌᚴᚱᛁᚿ', script: 'non-Runr' },
		{ href: '/inventory', label: c.nav.inventory },
		{ href: '/house', label: c.nav.house },
		{ href: '/care', label: c.nav.care },
		{ href: '/contact', label: c.nav.contact }
	]);
	// Footer in three groups so the list stays short as objects are added.
	const footGroups = $derived([
		{
			head: c.nav.inventory,
			links: [
				{ href: '/inventory', label: c.inventory.cats.all },
				{ href: '/inventory?c=objects', label: c.inventory.cats.objects },
				{ href: '/inventory?c=tops', label: c.inventory.cats.tops },
				{ href: '/inventory?c=outer', label: c.inventory.cats.outer },
				{ href: '/inventory?c=bottoms', label: c.inventory.cats.bottoms }
			]
		},
		{
			head: c.foot.lines,
			links: [
				{ href: '/skrin', label: 'SKRIN' },
				{ href: '/permanent', label: 'MA' },
				{ href: '/permanent#grund', label: 'GRUND' },
				{ href: '/permanent#qutn', label: 'QUTN' },
				{ href: '/permanent#ovol', label: 'ÖVÖL' },
				{ href: '/permanent#baram', label: 'BARAM' }
			]
		},
		{
			head: 'Maison Seul',
			links: [
				{ href: '/house', label: c.foot.house },
				{ href: '/care', label: c.foot.care },
				{ href: '/backers', label: c.foot.back },
				{ href: '/contact', label: c.foot.contact }
			]
		}
	]);
</script>

<div class="bar">
	<p class="mono">{c.bar}</p>
	<LangSwitch />
</div>

<header class="top">
	<a class="home" href={lp(lang, '/skrin')} aria-label="Maison Seul, SKRIN"><Wordmark /></a>
	<nav aria-label="Main">
		{#each nav as n}
			<a href={lp(lang, n.href)} aria-current={here(n.href)}
				>{#if n.kanji}<span class="kanji" lang={n.script ?? 'ja'}>{n.kanji}</span>&nbsp;{/if}{n.label}</a
			>
		{/each}
		<a class="reserve" href={lp(lang, '/backers')} aria-current={here('/backers')}>{c.nav.back}</a>
	</nav>
</header>

{@render children()}

<footer>
	<div class="brand">
		<span class="wm"><Wordmark /></span>
		<p>{c.foot.tagline}</p>
		<p><Cipher text={LINES.seen} /></p>
	</div>
	<nav aria-label="Footer" class="groups">
		{#each footGroups as g}
			<div class="group">
				<p class="head mono">{g.head}</p>
				{#each g.links as f}
					<a href={lp(lang, f.href)} aria-current={here(f.href)}>{f.label}</a>
				{/each}
			</div>
		{/each}
	</nav>
	<div class="contact">
		<a href="mailto:{STUDIO_EMAIL}">{STUDIO_EMAIL}</a>
	</div>
	<p class="legal">{c.foot.legal}</p>
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
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		align-items: center;
		padding: 0 var(--gutter);
		border-bottom: 1px solid var(--line);
	}
	.bar :global(.langs) {
		justify-self: end;
		grid-column: 3;
	}
	.bar p {
		grid-column: 2;
		margin: 0;
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
	.kanji {
		font-family: var(--kanji);
	}
	.top nav a.reserve {
		margin-left: 0.5rem;
		border: 1px solid var(--ink);
		color: var(--ink);
	}

	footer {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 2.4fr) minmax(0, 1fr);
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
	footer .groups {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem 2rem;
	}
	footer .group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	footer .group a {
		hyphens: auto;
		overflow-wrap: anywhere;
	}
	footer .head {
		margin: 0 0 0.5rem;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
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
		font-weight: 400;
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
		font-weight: 400;
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
			padding: 0 1.2rem 0 0;
		}
		.top nav a.reserve {
			padding: 0 0.75rem;
		}
		footer {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 600px) {
		footer .groups {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		footer .group:last-child {
			grid-column: 1 / -1;
		}
		.bar {
			grid-template-columns: 1fr auto;
		}
		.bar p {
			grid-column: 1;
			text-align: left;
			font-size: 0.6875rem;
			letter-spacing: 0.1em;
		}
		.bar :global(.langs) {
			grid-column: 2;
		}
	}
</style>
