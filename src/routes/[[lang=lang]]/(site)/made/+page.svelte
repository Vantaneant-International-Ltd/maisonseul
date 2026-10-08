<script lang="ts">
	import { page } from '$app/stores';
	import Stack from '$lib/Stack.svelte';
	import { copy, langOf, lp } from '$lib/i18n';
	import { LINE } from '$lib/lines';
	import { FACTORIES } from '$lib/config';

	// Where everything is made: one section per factory, with its location,
	// what it makes and photographs of the floor. Names appear before anything
	// from that factory ships.
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const t = $derived(c.made);
	const href = (id: string) => (id === 'skrin' ? '/skrin' : `/inventory/${id}`);
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="made">
	<header>
		<h1>{t.h1}</h1>
		<p class="lead">{t.lead}</p>
	</header>

	<ol class="list">
		{#each FACTORIES as f}
			<li>
				<div class="photos" class:empty={!f.photos.length}>
					{#if f.photos.length}
						{#each f.photos as ph}<img src="/factories/{ph.file}" alt={ph.alt} loading="lazy" />{/each}
					{:else}
						<svg class="blank" viewBox="0 0 160 90" preserveAspectRatio="none" aria-hidden="true"><line x1="104" y1="0" x2="72" y2="90" stroke="rgba(242,243,241,0.22)" stroke-width="1" vector-effect="non-scaling-stroke" /></svg>
					{/if}
				</div>
				<dl>
					<div>
						<dt>{t.makes}</dt>
						<dd class="makes">
							{#each f.lines as id}
								<a href={lp(lang, href(id))}><Stack line={LINE[id]} size="s" /></a>
							{/each}
						</dd>
					</div>
					{#if f.name}<div><dt>{t.factory}</dt><dd>{f.name}</dd></div>{/if}
					<div><dt>{t.location}</dt><dd>{f.city ? `${f.city}, China` : 'China'}</dd></div>
					{#if f.since}<div><dt>{t.since}</dt><dd>{f.since}</dd></div>{/if}
				</dl>
			</li>
		{/each}
	</ol>

	<p class="inspect">{t.inspect}</p>
</main>

<style>
	.made {
		max-width: 72rem;
		margin: 0 auto;
		padding: clamp(2.5rem, 6vw, 4.5rem) var(--gutter) clamp(4rem, 8vw, 6rem);
	}
	h1 {
		margin: 0;
		font-weight: 400;
		font-size: clamp(2.25rem, 4.5vw, 3.25rem);
	}
	.lead {
		max-width: 40rem;
		margin: 1rem 0 0;
		font-size: 1.0625rem;
		color: #d5d8d9;
	}
	.list {
		list-style: none;
		margin: clamp(2.5rem, 5vw, 4rem) 0 0;
		padding: 0;
	}
	.list li {
		display: grid;
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
		gap: clamp(1.5rem, 4vw, 3.5rem);
		padding: 2rem 0;
		border-top: 1px solid var(--line);
	}
	.photos {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.5rem;
	}
	.photos img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
		background: var(--raised);
	}
	.photos img:first-child {
		grid-column: 1 / -1;
	}
	.blank {
		width: 100%;
		height: 100%;
	}
	.photos.empty {
		display: grid;
		place-items: center;
		aspect-ratio: 16 / 9;
		grid-template-columns: 1fr;
		background: var(--raised);
		color: var(--ink-dim);
		font-size: 0.9375rem;
	}
	dl {
		margin: 0;
	}
	dl div + div {
		margin-top: 1.25rem;
	}
	dt {
		font-family: var(--sans);
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	dd {
		margin: 0.35rem 0 0;
		font-size: 1.0625rem;
	}
	.makes {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
	}
	.makes a {
		text-decoration: none;
		color: inherit;
	}
	.inspect {
		margin: 0;
		padding-top: 2rem;
		border-top: 1px solid var(--line);
		color: var(--ink-dim);
	}
	@media (max-width: 760px) {
		.list li {
			grid-template-columns: 1fr;
		}
	}
</style>
