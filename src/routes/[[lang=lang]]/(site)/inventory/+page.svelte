<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Stack from '$lib/Stack.svelte';
	import { copy, langOf, lp } from '$lib/i18n';
	import { SWATCH } from '$lib/drawings';
	import { catalogue, type Cat, type Line, type Piece } from '$lib/catalogue';

	// Everything the house makes, on one page. Filter by kind, sort by price,
	// and every card opens that line's page.
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const t = $derived(c.inventory);

	type Card = { key: string; line: Line; name: string; price: string; drawing: Piece['drawing']; href: string; order: number };

	// One card per piece, except where a line is sold as one thing (MA fits, the SĪ set, SKRIN).
	const cards = $derived.by(() => {
		const out: Card[] = [];
		for (const L of catalogue(c)) {
			if (L.oneCard) {
				const i = L.id === 'ma' ? 1 : 0;
				out.push({ key: L.id, line: L, name: L.cardName, price: L.pieces[i].price, drawing: L.pieces[i].drawing, href: L.href, order: out.length });
			} else {
				L.pieces.forEach((pc, i) =>
					out.push({ key: `${L.id}-${i}`, line: L, name: pc.name, price: pc.price, drawing: pc.drawing, href: `${L.href}?p=${i}`, order: out.length })
				);
			}
		}
		return out;
	});

	const CATS: ('all' | Cat)[] = ['all', 'objects', 'tops', 'outer', 'bottoms', 'lounge'];
	let current = $state<'all' | Cat>('all');
	let sort = $state<'order' | 'low' | 'high'>('order');
	const amount = (k: Card) => (k.line.locked ? Number(k.price.replace(/[^0-9]/g, '')) : null);
	const shown = $derived.by(() => {
		const list = current === 'all' ? cards : cards.filter((k) => k.line.cat === current);
		if (sort === 'order') return list;
		// pieces without a set price go last either way
		return [...list].sort((a, b) => {
			const x = amount(a), y = amount(b);
			if (x === null || y === null) return (x === null ? 1 : 0) - (y === null ? 1 : 0);
			return (sort === 'low' ? 1 : -1) * (x - y);
		});
	});
	const countOf = (k: 'all' | Cat) => (k === 'all' ? cards.length : cards.filter((x) => x.line.cat === k).length);

	// The filter lives in the address (?c=tops) so a view can be shared.
	onMount(() => {
		const q = new URLSearchParams(location.search).get('c');
		if (q && (CATS as string[]).includes(q)) current = q as Cat;
	});
	function choose(k: 'all' | Cat) {
		current = k;
		const url = new URL(location.href);
		if (k === 'all') url.searchParams.delete('c');
		else url.searchParams.set('c', k);
		history.replaceState(history.state, '', url);
	}
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="inv">
	<header class="head">
		<h1>{t.kicker}</h1>
		<p class="lead">{t.lead}</p>
	</header>

	<div class="tools">
		<div class="filters" role="group" aria-label={t.filterLabel}>
			{#each CATS as k}
				<button type="button" aria-pressed={current === k} onclick={() => choose(k)}>
					{t.cats[k]}<span class="n">{countOf(k)}</span>
				</button>
			{/each}
		</div>
		<label class="sort">
			<span>{c.ui.sort}</span>
			<select bind:value={sort}>
				<option value="order">{t.sortNo}</option>
				<option value="low">{t.sortLow}</option>
				<option value="high">{t.sortHigh}</option>
			</select>
		</label>
	</div>

	<ul class="grid" aria-live="polite">
		{#each shown as card (card.key)}
			<li>
				<a href={lp(lang, card.href)}>
					<div class="tile">
						<svg viewBox={card.drawing.box} aria-hidden="true">
							{#each card.drawing.paths as pth}
								<path
									d={pth.d}
									fill="none"
									stroke={pth.dim ? '#a9aeb1' : '#f2f3f1'}
									stroke-width={pth.dim ? 1 : 1.5}
									stroke-linejoin="round"
									vector-effect="non-scaling-stroke"
								/>
							{/each}
						</svg>
						{#if card.line.edition}<span class="flag">{c.ui.editionOf}</span>{/if}
					</div>
					<div class="info">
						<Stack line={card.line.name} size="s" />
						<p class="name">{card.name}</p>
						<p class="row">
							<span class="price">{card.line.locked ? card.price : c.ui.inDev}</span>
							{#if card.line.colours.length}
								<span class="dots" aria-label={card.line.colours.join(', ')}>
									{#each card.line.colours as col}<i style="background:{SWATCH[col] ?? '#2c3236'}"></i>{/each}
								</span>
							{/if}
						</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	.inv {
		max-width: 84rem;
		margin: 0 auto;
		padding: clamp(2.5rem, 6vw, 4.5rem) var(--gutter) clamp(4rem, 8vw, 6rem);
	}
	h1 {
		margin: 0;
		font-weight: 400;
		font-size: clamp(2.25rem, 4.5vw, 3.25rem);
		line-height: 1.05;
	}
	.lead {
		max-width: 36rem;
		margin: 0.9rem 0 0;
		font-size: 1.0625rem;
		color: var(--ink-dim);
	}

	.tools {
		position: sticky;
		top: 4.25rem;
		z-index: 5;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem 2rem;
		margin-top: clamp(2rem, 4vw, 3rem);
		padding: 0.75rem 0;
		background: var(--void);
		border-bottom: 1px solid var(--line);
	}
	.filters {
		display: flex;
		gap: 0.5rem;
		overflow-x: auto;
		scrollbar-width: none;
		margin: 0 calc(var(--gutter) * -1);
		padding: 0 var(--gutter);
	}
	.filters::-webkit-scrollbar {
		display: none;
	}
	.filters button {
		flex: none;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		min-height: 40px;
		padding: 0 1rem;
		background: none;
		border: 1px solid var(--line);
		border-radius: 999px;
		color: var(--ink-dim);
		font: inherit;
		font-size: 0.9375rem;
		cursor: pointer;
		transition:
			color 160ms ease,
			border-color 160ms ease,
			background 160ms ease;
	}
	.filters button:hover {
		color: var(--ink);
		border-color: var(--hairline);
	}
	.filters button[aria-pressed='true'] {
		background: var(--ink);
		border-color: var(--ink);
		color: var(--void);
	}
	.n {
		font-size: 0.75rem;
		opacity: 0.6;
	}
	.sort {
		flex: none;
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.9375rem;
		color: var(--ink-dim);
	}
	.sort select {
		min-height: 40px;
		padding: 0 2rem 0 0.9rem;
		background: var(--void)
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' fill='none' stroke='%23f2f3f1'/%3E%3C/svg%3E")
			no-repeat right 0.8rem center;
		border: 1px solid var(--line);
		border-radius: 999px;
		color: var(--ink);
		font: inherit;
		font-size: 0.9375rem;
		appearance: none;
		cursor: pointer;
	}

	.grid {
		list-style: none;
		margin: 2rem 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 3rem 1.25rem;
	}
	.grid a {
		display: block;
		color: inherit;
		text-decoration: none;
	}
	.tile {
		position: relative;
		aspect-ratio: 4 / 5;
		display: grid;
		place-items: center;
		padding: 14% 18%;
		background: var(--raised);
		transition: background 200ms ease;
	}
	.tile svg {
		width: 100%;
		height: 100%;
		transition: transform 300ms ease;
	}
	.grid a:hover .tile,
	.grid a:focus-visible .tile {
		background: #20262a;
	}
	.grid a:hover .tile svg {
		transform: scale(1.03);
	}
	.flag {
		position: absolute;
		left: 0.9rem;
		bottom: 0.8rem;
		font-size: 0.75rem;
		color: var(--ink-dim);
	}
	.info {
		padding-top: 1rem;
	}
	.name {
		margin: 0.6rem 0 0;
		font-size: 1rem;
	}
	.row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin: 0.2rem 0 0;
	}
	.price {
		font-size: 0.9375rem;
		color: var(--ink-dim);
	}
	.dots {
		display: inline-flex;
		gap: 0.3rem;
	}
	.dots i {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		box-shadow: inset 0 0 0 1px rgba(242, 243, 241, 0.35);
	}

	@media (max-width: 1100px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 860px) {
		.tools {
			top: 4.25rem;
			flex-direction: column;
			align-items: stretch;
		}
		.sort {
			justify-content: flex-end;
		}
	}
	@media (max-width: 680px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 2.25rem 0.75rem;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.tile svg {
			transition: none;
		}
		.grid a:hover .tile svg {
			transform: none;
		}
	}
</style>
