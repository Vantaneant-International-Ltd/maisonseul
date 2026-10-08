<script lang="ts">
	import { page } from '$app/stores';
	import Defaced from '$lib/Defaced.svelte';
	import { copy, langOf } from '$lib/i18n';

	const lang = $derived(langOf($page.params.lang));
	const t = $derived(copy[lang].house);
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="doc">
	<p class="kicker">{t.kicker}</p>
	<Defaced text={t.h1} />
	<p class="lead">{t.lead}</p>

	{#each t.sections as sec}
		<section>
			<h2>{sec.h}</h2>
			{#each sec.p as para}<p>{para}</p>{/each}
		</section>
	{/each}
</main>
