<script lang="ts">
	import { page } from '$app/stores';
	import {
		LANGS, LANG_LABEL, LANG_CODE, MACHINE, SITE, TRANSLATED,
		basePath, copy, langOf, lp, switchHref
	} from '$lib/i18n';

	// Language menu plus the hreflang links search engines use to pair the
	// versions of a page. A native <details> menu: works without JavaScript,
	// closes on Escape and on a click elsewhere.
	const lang = $derived(langOf($page.params.lang));
	const base = $derived(basePath($page.url.pathname));
	const translated = $derived(TRANSLATED.includes(base));
	let menu: HTMLDetailsElement | undefined = $state();

	function onKey(e: KeyboardEvent) {
		if (e.key === 'Escape' && menu?.open) {
			menu.open = false;
			menu.querySelector('summary')?.focus();
		}
	}
	function onDoc(e: MouseEvent) {
		if (menu?.open && !menu.contains(e.target as Node)) menu.open = false;
	}
</script>

<svelte:window onkeydown={onKey} onclick={onDoc} />

<svelte:head>
	{#if translated}
		{#each LANGS as l}
			<link rel="alternate" hreflang={l} href={SITE + lp(l, base)} />
		{/each}
		<link rel="alternate" hreflang="x-default" href={SITE + base} />
	{/if}
</svelte:head>

<details class="langs" bind:this={menu}>
	<summary aria-label="{copy[lang].nav.language}: {LANG_LABEL[lang]}">
		<span class="code">{LANG_CODE[lang]}</span><span class="caret" aria-hidden="true"></span>
	</summary>
	<ul>
		{#each LANGS as l}
			<li>
				<a
					href={switchHref($page.url.pathname, l)}
					hreflang={l}
					lang={l}
					aria-current={l === lang ? 'true' : undefined}
				>
					<span>{LANG_LABEL[l]}</span>
					{#if MACHINE.includes(l)}<span class="auto" title="Machine translation">*</span>{/if}
				</a>
			</li>
		{/each}
		<li class="foot" lang="en" dir="ltr">* Machine translation</li>
	</ul>
</details>

<style>
	.langs {
		position: relative;
	}
	summary {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		min-height: 44px;
		padding: 0 0.5rem;
		font-family: var(--mono);
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		color: var(--ink);
		cursor: pointer;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	.caret {
		width: 0.4rem;
		height: 0.4rem;
		border-right: 1px solid currentColor;
		border-bottom: 1px solid currentColor;
		transform: translateY(-2px) rotate(45deg);
		transition: transform 160ms ease;
	}
	.langs[open] .caret {
		transform: translateY(1px) rotate(-135deg);
	}
	ul {
		position: absolute;
		inset-inline-end: 0;
		top: 100%;
		z-index: 20;
		min-width: 11rem;
		margin: 0.25rem 0 0;
		padding: 0.4rem 0;
		list-style: none;
		background: var(--void);
		border: 1px solid var(--line, #2e3438);
	}
	a {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 40px;
		padding: 0 1rem;
		font-size: 0.875rem;
		text-decoration: none;
		color: var(--ink-dim);
	}
	a:hover,
	a:focus-visible,
	a[aria-current='true'] {
		color: var(--ink);
	}
	a[aria-current='true'] span:first-child {
		text-decoration: line-through;
		text-decoration-thickness: 1px;
	}
	.foot {
		margin-top: 0.4rem;
		padding: 0.5rem 1rem 0.2rem;
		border-top: 1px solid var(--line, #2e3438);
		font-family: var(--mono);
		font-size: 0.6875rem;
		letter-spacing: 0.08em;
		color: var(--ink-dim);
	}
	.auto {
		font-family: var(--mono);
		color: var(--ink-dim);
	}
</style>
