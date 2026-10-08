<script lang="ts">
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import Wordmark from '$lib/Wordmark.svelte';
	import LangSwitch from '$lib/LangSwitch.svelte';
	import { LANGS, LANG_LABEL, MACHINE, basePath, copy, langOf, lp, switchHref } from '$lib/i18n';
	import { STUDIO_EMAIL } from '$lib/config';
	import Cipher from '$lib/Cipher.svelte';
	import { LINES } from '$lib/cipher';

	// Everything past the home page. One quiet header row; on phones a single
	// Menu button opens a full-screen sheet. Nothing is on sale; the one
	// action is founding backing.
	let { children } = $props();

	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const base = $derived(basePath($page.url.pathname));
	const here = (href: string) =>
		base === href || (href === '/inventory' && base.startsWith('/inventory')) ? 'page' : undefined;

	const nav = $derived([
		{ href: '/inventory', label: c.nav.inventory },
		{ href: '/house', label: c.nav.house },
		{ href: '/contact', label: c.nav.contact }
	]);
	const sheetLinks = $derived([
		{ href: '/inventory', label: c.nav.inventory },
		{ href: '/house', label: c.nav.house },
		{ href: '/made', label: c.nav.made },
		{ href: '/care', label: c.nav.care },
		{ href: '/contact', label: c.nav.contact },
		{ href: '/backers', label: c.nav.back }
	]);
	const footGroups = $derived([
		{
			head: c.nav.inventory,
			links: [
				{ href: '/inventory', label: c.inventory.cats.all },
				{ href: '/inventory?c=objects', label: c.inventory.cats.objects },
				{ href: '/inventory?c=tops', label: c.inventory.cats.tops },
				{ href: '/inventory?c=outer', label: c.inventory.cats.outer },
				{ href: '/inventory?c=bottoms', label: c.inventory.cats.bottoms },
				{ href: '/inventory?c=lounge', label: c.inventory.cats.lounge }
			]
		},
		{
			head: 'Maison Seul',
			links: [
				{ href: '/house', label: c.foot.house },
				{ href: '/made', label: c.nav.made },
				{ href: '/care', label: c.foot.care },
				{ href: '/backers', label: c.foot.back },
				{ href: '/contact', label: c.foot.contact }
			]
		}
	]);

	let open = $state(false);
	let menuButton: HTMLButtonElement | undefined = $state();
	afterNavigate(() => (open = false));
	function close() {
		open = false;
		menuButton?.focus();
	}
	$effect(() => {
		document.documentElement.style.overflow = open ? 'hidden' : '';
	});
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && open && close()} />

<header class="top">
	<a class="home" href={lp(lang, '/')} aria-label="Maison Seul"><Wordmark /></a>
	<nav class="primary" aria-label="Main">
		{#each nav as n}
			<a href={lp(lang, n.href)} aria-current={here(n.href)}>{n.label}</a>
		{/each}
	</nav>
	<div class="end">
		<a class="backers" href={lp(lang, '/backers')} aria-current={here('/backers')}>{c.nav.back}</a>
		<span class="lang"><LangSwitch /></span>
		<button
			class="menu-btn"
			type="button"
			bind:this={menuButton}
			aria-expanded={open}
			aria-controls="sheet"
			onclick={() => (open = true)}>{c.ui.menu}</button
		>
	</div>
</header>

{#if open}
	<div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-label={c.ui.menu}>
		<div class="sheet-top">
			<a class="home" href={lp(lang, '/')} aria-label="Maison Seul"><Wordmark /></a>
			<button class="menu-btn shown" type="button" onclick={close}>{c.ui.close}</button>
		</div>
		<nav class="sheet-links" aria-label="Main">
			{#each sheetLinks as n}
				<a href={lp(lang, n.href)} aria-current={here(n.href)}>{n.label}</a>
			{/each}
		</nav>
		<nav class="sheet-langs" aria-label={c.nav.language}>
			{#each LANGS as l}
				<a href={switchHref($page.url.pathname, l)} hreflang={l} lang={l} aria-current={l === lang ? 'true' : undefined}
					>{LANG_LABEL[l]}{#if MACHINE.includes(l)}<span aria-hidden="true">*</span>{/if}</a
				>
			{/each}
		</nav>
	</div>
{/if}

{@render children()}

<footer>
	<div class="brand">
		<span class="wm"><Wordmark /></span>
		<p>{c.foot.tagline}</p>
		<p>{c.bar}</p>
		<p><Cipher text={LINES.seen} /></p>
	</div>
	<nav aria-label="Footer" class="groups">
		{#each footGroups as g}
			<div class="group">
				<p class="head">{g.head}</p>
				{#each g.links as f}
					<a href={lp(lang, f.href)}>{f.label}</a>
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

	.top {
		position: sticky;
		top: 0;
		z-index: 30;
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 2rem;
		min-height: 4.25rem;
		padding: 0 var(--gutter);
		background: rgba(18, 22, 25, 0.92);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--line);
	}
	.home {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 1.25rem;
		text-decoration: none;
	}
	.primary {
		display: flex;
		justify-content: center;
		gap: 2.25rem;
	}
	.primary a,
	.backers {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 0.9375rem;
		text-decoration: none;
		color: var(--ink-dim);
		transition: color 160ms ease;
	}
	.primary a:hover,
	.primary a[aria-current='page'],
	.backers:hover,
	.backers[aria-current='page'] {
		color: var(--ink);
	}
	.primary a[aria-current='page'] {
		box-shadow: inset 0 -1px 0 var(--ink);
	}
	.end {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}
	.backers {
		padding: 0 1.1rem;
		min-height: 40px;
		border: 1px solid var(--hairline);
		color: var(--ink);
	}
	.backers:hover {
		border-color: var(--ink);
	}
	.menu-btn {
		display: none;
		min-height: 44px;
		padding: 0 0.25rem;
		background: none;
		border: 0;
		color: var(--ink);
		font: inherit;
		font-size: 0.9375rem;
		cursor: pointer;
	}
	.menu-btn.shown {
		display: inline-flex;
		align-items: center;
	}

	.sheet {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: flex;
		flex-direction: column;
		padding: 0 var(--gutter) 2rem;
		background: var(--void);
		overflow-y: auto;
		animation: sheet-in 220ms ease both;
	}
	.sheet-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 4.25rem;
		border-bottom: 1px solid var(--line);
	}
	.sheet-links {
		display: flex;
		flex-direction: column;
		padding: 1.5rem 0;
	}
	.sheet-links a {
		display: flex;
		align-items: center;
		min-height: 3.5rem;
		font-size: 1.75rem;
		text-decoration: none;
		color: var(--ink);
	}
	.sheet-links a[aria-current='page'] {
		color: var(--ink-dim);
	}
	.sheet-langs {
		display: flex;
		flex-wrap: wrap;
		gap: 0 1.25rem;
		margin-top: auto;
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
	}
	.sheet-langs a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		font-size: 0.9375rem;
		text-decoration: none;
		color: var(--ink-dim);
	}
	.sheet-langs a[aria-current='true'] {
		color: var(--ink);
	}
	@keyframes sheet-in {
		from {
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.sheet {
			animation: none;
		}
	}

	footer {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.6fr) minmax(0, 1fr);
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
		grid-template-columns: repeat(2, minmax(0, 1fr));
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
		font-size: 0.875rem;
		color: var(--ink);
	}
	footer a {
		display: inline-flex;
		align-items: center;
		min-height: 40px;
		font-size: 0.9375rem;
		text-decoration: none;
		color: var(--ink-dim);
	}
	footer a:hover {
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
		font-size: 0.9375rem;
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
		color: var(--ink-dim);
	}
	:global(.doc .table-wrap) {
		overflow-x: auto;
	}

	@media (max-width: 860px) {
		.top {
			grid-template-columns: 1fr auto;
		}
		.primary,
		.backers,
		.lang {
			display: none;
		}
		.menu-btn {
			display: inline-flex;
			align-items: center;
		}
		footer {
			grid-template-columns: 1fr;
		}
	}
</style>
