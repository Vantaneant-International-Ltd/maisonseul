<script lang="ts">
	// CASE 01 was renamed KI (器). Old links land here and move on.
	import { page } from '$app/stores';
	import { langOf, lp } from '$lib/i18n';
	const to = $derived(lp(langOf($page.params.lang), '/ki'));
</script>

<svelte:head>
	<title>KI / Maison Seul</title>
	<meta http-equiv="refresh" content="0; url={to}" />
	<link rel="canonical" href="https://maisonseul.com{to}" />
	<meta name="robots" content="noindex" />
</svelte:head>

<p style="padding: 2rem"><a href={to}>KI</a></p>
