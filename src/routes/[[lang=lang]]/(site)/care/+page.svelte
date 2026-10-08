<script lang="ts">
	import { page } from '$app/stores';
	import { copy, langOf } from '$lib/i18n';
	import { STUDIO_EMAIL } from '$lib/config';

	const lang = $derived(langOf($page.params.lang));
	const t = $derived(copy[lang].care);
	const repairHref = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent('KI / Repair')}`;
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="doc">
	<p class="kicker">{t.kicker}</p>
	<h1>{t.h1}</h1>
	<p class="lead">{t.lead}</p>

	<section>
		<h2>{t.everydayTitle}</h2>
		<ul>
			{#each t.everyday as item}<li>{item}</li>{/each}
		</ul>
	</section>

	<section>
		<h2>{t.wheelTitle}</h2>
		<ol>
			{#each t.wheel as step}<li>{step}</li>{/each}
		</ol>
		<p>{t.wheelAfter}</p>
	</section>

	<section>
		<h2>{t.partsTitle}</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr><th scope="col">{t.partsHead[0]}</th><th scope="col">{t.partsHead[1]}</th></tr>
				</thead>
				<tbody>
					{#each t.parts as row}
						<tr><td>{row[0]}</td><td>{row[1]}</td></tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p style="margin-top: 1rem">{t.partsAfter}</p>
	</section>

	<section>
		<h2>{t.repairTitle}</h2>
		<p>{t.repairBefore} <a href={repairHref}>{STUDIO_EMAIL}</a> {t.repairAfter}</p>
	</section>
</main>
