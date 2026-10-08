<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { langOf, lp } from '$lib/i18n';
	import { PRODUCT_IDS } from '$lib/catalogue';

	// The old collection page. Each line now has its own page under
	// /inventory; old links (including /permanent#grund) are forwarded there.
	const lang = $derived(langOf($page.params.lang));
	const to = $derived(lp(lang, '/inventory'));
	onMount(() => {
		const id = location.hash.slice(1);
		const target = (PRODUCT_IDS as readonly string[]).includes(id) ? lp(lang, `/inventory/${id}`) : to;
		location.replace(target);
	});
</script>

<svelte:head>
	<meta http-equiv="refresh" content="0; url={to}" />
	<link rel="canonical" href="https://maisonseul.com{to}" />
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="doc"><p><a href={to}>{to}</a></p></main>
