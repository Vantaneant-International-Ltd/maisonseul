<script lang="ts">
	import { page } from '$app/stores';
	import Defaced from '$lib/Defaced.svelte';
	import { copy, langOf } from '$lib/i18n';
	import { STUDIO_EMAIL } from '$lib/config';

	const lang = $derived(langOf($page.params.lang));
	const t = $derived(copy[lang].contact);
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="doc">
	<p class="kicker">{t.kicker}</p>
	<Defaced text={t.h1} />
	<p class="lead"><a href="mailto:{STUDIO_EMAIL}">{STUDIO_EMAIL}</a></p>
	<p>{t.reply}</p>

	<section>
		<h2>{t.repairTitle}</h2>
		<p>{t.repair}</p>
	</section>
</main>
