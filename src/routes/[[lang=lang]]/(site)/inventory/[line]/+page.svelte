<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Stack from '$lib/Stack.svelte';
	import { copy, langOf, lp } from '$lib/i18n';
	import { SWATCH } from '$lib/drawings';
	import { STUDIO_EMAIL } from '$lib/config';
	import { catalogue } from '$lib/catalogue';

	// A line's own page: choose the piece and colour, see the price, read how
	// it is made. Nothing is on sale yet, so the one action is to write.
	let { data } = $props();
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const L = $derived(catalogue(c).find((l) => l.id === data.id)!);
	const isSet = $derived(L.id === 'si');

	let pick = $state(0);
	let colour = $state(0);
	onMount(() => {
		const p = Number(new URLSearchParams(location.search).get('p'));
		if (Number.isInteger(p) && p > 0 && p < L.pieces.length) pick = p;
		else if (L.id === 'ma') pick = 1;
	});
	const piece = $derived(L.pieces[pick]);
	const mail = $derived(
		`mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(`${L.name.word} / ${isSet ? L.cardName : piece.name}`)}`
	);
</script>

<svelte:head>
	<title>{L.name.word} / Maison Seul</title>
	<meta name="description" content={L.lead} />
</svelte:head>

<main class="pdp">
	<nav class="crumbs" aria-label="Breadcrumb">
		<a href={lp(lang, '/inventory')}>{c.nav.inventory}</a>
		<span aria-hidden="true">/</span>
		<a href={lp(lang, `/inventory?c=${L.cat}`)}>{c.inventory.cats[L.cat]}</a>
	</nav>

	<div class="layout">
		<div class="media">
			<div class="stage">
				<svg viewBox={piece.drawing.box} role="img" aria-label="{L.name.word} {piece.name}">
					{#each piece.drawing.paths as pth}
						<path d={pth.d} fill="none" stroke={pth.dim ? '#a9aeb1' : '#f2f3f1'} stroke-width={pth.dim ? 1 : 1.5} stroke-linejoin="round" vector-effect="non-scaling-stroke" />
					{/each}
				</svg>
			</div>
			{#if L.pieces.length > 1}
				<div class="thumbs" role="radiogroup" aria-label={c.ui.piece}>
					{#each L.pieces as pc, i}
						<button type="button" role="radio" aria-checked={pick === i} aria-label={pc.name} onclick={() => (pick = i)}>
							<svg viewBox={pc.drawing.box} aria-hidden="true">
								{#each pc.drawing.paths as pth}<path d={pth.d} fill="none" stroke="currentColor" stroke-width="1.2" vector-effect="non-scaling-stroke" />{/each}
							</svg>
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<div class="panel">
			<h1><Stack line={L.name} size="l" /></h1>
			<p class="lead">{L.lead}</p>

			{#if L.pieces.length > 1 && !isSet}
				<fieldset>
					<legend>{c.ui.piece}<span>{piece.name}</span></legend>
					<div class="choices">
						{#each L.pieces as pc, i}
							<button type="button" aria-pressed={pick === i} onclick={() => (pick = i)}>{pc.name}</button>
						{/each}
					</div>
				</fieldset>
			{/if}

			{#if L.colours.length}
				<fieldset>
					<legend>{c.ui.colour}<span>{L.colours[colour]}</span></legend>
					<div class="swatches">
						{#each L.colours as col, i}
							<button type="button" aria-pressed={colour === i} aria-label={col} onclick={() => (colour = i)}>
								<i style="background:{SWATCH[col] ?? '#2c3236'}"></i>
							</button>
						{/each}
					</div>
				</fieldset>
			{/if}

			<div class="buy">
				{#if L.locked}<p class="price">{piece.price} <span>{c.taxNote}</span></p>{:else}<p class="price dev">{c.ui.inDev}</p>{/if}
				<p class="pline">{isSet ? L.pieces.map((p) => p.name).join(' + ') : piece.line}</p>
				<a class="cta" href={mail}>{c.ui.ask}</a>
				<p class="avail">{c.ui.notOnSale}</p>
			</div>

			<details open>
				<summary>{c.ji.detailsLabel}</summary>
				<p class="spec">{c.ui.specNote}</p>
				<p>{L.lead2}</p>
				<ul>
					{#each L.details as d}<li>{d}</li>{/each}
					{#if !isSet}<li>{c.ui.sizes}</li>{/if}
					<li><a href={lp(lang, '/made')}>{c.ui.made}</a></li>
				</ul>
			</details>

			<a class="back" href={lp(lang, '/inventory')}>{c.ui.back}</a>
		</div>
	</div>
</main>

<style>
	.pdp {
		max-width: 84rem;
		margin: 0 auto;
		padding: 1.5rem var(--gutter) clamp(4rem, 8vw, 6rem);
	}
	.crumbs {
		display: flex;
		gap: 0.6rem;
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	.crumbs a {
		color: var(--ink-dim);
		text-decoration: none;
	}
	.crumbs a:hover {
		color: var(--ink);
	}
	.layout {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
		gap: clamp(2rem, 5vw, 5rem);
		margin-top: 1.5rem;
		align-items: start;
	}
	.media {
		position: sticky;
		top: 5.5rem;
	}
	.stage {
		aspect-ratio: 4 / 5;
		display: grid;
		place-items: center;
		padding: 12% 16%;
		background: var(--raised);
	}
	.stage svg {
		width: 100%;
		height: 100%;
	}
	.thumbs {
		display: flex;
		gap: 0.6rem;
		margin-top: 0.6rem;
	}
	.thumbs button {
		width: 4.5rem;
		aspect-ratio: 4 / 5;
		display: grid;
		place-items: center;
		padding: 0.6rem;
		background: var(--raised);
		border: 1px solid transparent;
		color: var(--ink-dim);
		cursor: pointer;
	}
	.thumbs button svg {
		width: 100%;
		height: 100%;
	}
	.thumbs button[aria-checked='true'] {
		border-color: var(--ink);
		color: var(--ink);
	}

	h1 {
		margin: 0;
		font-weight: 400;
	}
	.lead {
		margin: 1.5rem 0 0;
		font-size: 1.0625rem;
		color: #d5d8d9;
		max-width: 34rem;
	}
	fieldset {
		margin: 2rem 0 0;
		padding: 0;
		border: 0;
	}
	legend {
		display: flex;
		gap: 0.6rem;
		padding: 0;
		margin-bottom: 0.75rem;
		font-size: 0.9375rem;
		color: var(--ink-dim);
	}
	legend span {
		color: var(--ink);
	}
	.choices {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.choices button {
		min-height: 44px;
		padding: 0 1.1rem;
		background: none;
		border: 1px solid var(--line);
		color: var(--ink-dim);
		font: inherit;
		font-size: 0.9375rem;
		cursor: pointer;
	}
	.choices button:hover {
		color: var(--ink);
		border-color: var(--hairline);
	}
	.choices button[aria-pressed='true'] {
		color: var(--ink);
		border-color: var(--ink);
	}
	.swatches {
		display: flex;
		gap: 0.6rem;
	}
	.swatches button {
		width: 2.5rem;
		height: 2.5rem;
		display: grid;
		place-items: center;
		padding: 0;
		background: none;
		border: 1px solid transparent;
		border-radius: 50%;
		cursor: pointer;
	}
	.swatches i {
		width: 1.75rem;
		height: 1.75rem;
		border-radius: 50%;
		box-shadow: inset 0 0 0 1px rgba(242, 243, 241, 0.35);
	}
	.swatches button[aria-pressed='true'] {
		border-color: var(--ink);
	}
	.buy {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--line);
	}
	.price {
		margin: 0;
		font-size: 1.75rem;
	}
	.price span {
		font-size: 0.8125rem;
		color: var(--ink-dim);
	}
	.price.dev {
		font-size: 1.25rem;
		color: var(--ink-dim);
	}
	.spec {
		font-size: 0.875rem;
		color: var(--ink-dim) !important;
	}
	.pline {
		margin: 0.4rem 0 0;
		color: var(--ink-dim);
	}
	.cta {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3.5rem;
		margin-top: 1.5rem;
		background: var(--ink);
		color: var(--void);
		text-decoration: none;
		font-size: 0.9375rem;
	}
	.cta:hover {
		background: #ffffff;
	}
	.avail {
		margin: 0.9rem 0 0;
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	details {
		margin-top: 2rem;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
	}
	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: 3.25rem;
		cursor: pointer;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary::after {
		content: '+';
		color: var(--ink-dim);
	}
	details[open] summary::after {
		content: '−';
	}
	details p,
	details li {
		color: #d5d8d9;
	}
	details p {
		margin: 0 0 1rem;
	}
	details ul {
		margin: 0 0 1.25rem;
		padding-inline-start: 1.1rem;
	}
	details li + li {
		margin-top: 0.4rem;
	}
	.back {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
		margin-top: 1.5rem;
		font-size: 0.9375rem;
		color: var(--ink-dim);
	}
	@media (max-width: 860px) {
		.layout {
			grid-template-columns: 1fr;
		}
		.media {
			position: static;
		}
	}
</style>
