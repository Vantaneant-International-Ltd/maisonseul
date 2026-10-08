<script lang="ts">
	import { page } from '$app/stores';
	import { LANGS, LANG_LABEL, SITE, TRANSLATED, basePath, copy, langOf, lp, switchHref } from '$lib/i18n';

	// Language switch plus the hreflang links search engines use to pair the
	// English, German and Japanese versions of a page.
	const lang = $derived(langOf($page.params.lang));
	const base = $derived(basePath($page.url.pathname));
	const translated = $derived(TRANSLATED.includes(base));
</script>

<svelte:head>
	{#if translated}
		{#each LANGS as l}
			<link rel="alternate" hreflang={l} href={SITE + lp(l, base)} />
		{/each}
		<link rel="alternate" hreflang="x-default" href={SITE + base} />
	{/if}
</svelte:head>

<nav class="langs" aria-label={copy[lang].nav.language}>
	{#each LANGS as l}
		<a
			href={switchHref($page.url.pathname, l)}
			hreflang={l}
			lang={l}
			aria-current={l === lang ? 'true' : undefined}>{LANG_LABEL[l]}</a
		>
	{/each}
</nav>

<style>
	.langs {
		display: flex;
		gap: 0.25rem;
	}
	a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		padding: 0 0.5rem;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-decoration: none;
		color: var(--ink-dim);
	}
	a:hover,
	a[aria-current='true'] {
		color: var(--ink);
	}
</style>
