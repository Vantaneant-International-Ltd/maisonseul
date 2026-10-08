<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Defaced from '$lib/Defaced.svelte';
	import Cipher from '$lib/Cipher.svelte';
	import { LINES } from '$lib/cipher';
	import { copy, langOf, lp } from '$lib/i18n';
	import {
		SWATCH, CASE, MA_LOOSE, MA_BAGGY, MA_BARREL, TEE, LONG, SHIRT, OVERSHIRT, SHELL, PUFFER, JOGGER,
		type Drawing
	} from '$lib/drawings';

	// Everything the house makes, on one page, filterable. Each piece links to
	// the page that tells its story. Numbers run in the order things were made.
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const t = $derived(c.inventory);

	type Cat = 'objects' | 'tops' | 'outer' | 'bottoms';
	type Item = {
		line: string; mark?: string; script?: string; name: string;
		cat: Cat; price: string; permanent: boolean; href: string; drawing: Drawing;
		colours?: string[];
	};

	const items = $derived<Item[]>([
		{ line: 'SKRIN', mark: 'ᛌᚴᚱᛁᚿ', script: 'non-Runr', name: 'Graphite', cat: 'objects', price: c.prices.case01, permanent: false, href: '/skrin', drawing: CASE, colours: ['Graphite'] },
		{ line: 'MA', mark: '間', script: 'ja', name: 'Loose', cat: 'bottoms', price: c.prices.ma, permanent: true, href: '/permanent', drawing: MA_LOOSE },
		{ line: 'MA', mark: '間', script: 'ja', name: 'Baggy', cat: 'bottoms', price: c.prices.ma, permanent: true, href: '/permanent', drawing: MA_BAGGY },
		{ line: 'MA', mark: '間', script: 'ja', name: 'Barrel', cat: 'bottoms', price: c.prices.ma, permanent: true, href: '/permanent', drawing: MA_BARREL },
		{ line: 'GRUND', name: c.ji.pieces[0].name, cat: 'tops', price: c.prices.jiTee, permanent: true, href: '/permanent#grund', drawing: TEE, colours: c.ji.colours },
		{ line: 'GRUND', name: c.ji.pieces[1].name, cat: 'tops', price: c.prices.jiLong, permanent: true, href: '/permanent#grund', drawing: LONG, colours: c.ji.colours },
		{ line: 'QUTN', mark: 'قطن', script: 'ar', name: c.qutn.pieces[0].name, cat: 'tops', price: c.prices.qutnPoplin, permanent: true, href: '/permanent#qutn', drawing: SHIRT, colours: c.qutn.colours },
		{ line: 'QUTN', mark: 'قطن', script: 'ar', name: c.qutn.pieces[1].name, cat: 'tops', price: c.prices.qutnCanvas, permanent: true, href: '/permanent#qutn', drawing: OVERSHIRT, colours: c.qutn.colours },
		{ line: 'ÖVÖL', mark: 'ӨВӨЛ', script: 'mn', name: c.ovol.pieces[0].name, cat: 'outer', price: c.prices.ovolLight, permanent: true, href: '/permanent#ovol', drawing: SHELL, colours: c.ovol.colours },
		{ line: 'ÖVÖL', mark: 'ӨВӨЛ', script: 'mn', name: c.ovol.pieces[1].name, cat: 'outer', price: c.prices.ovolHeavy, permanent: true, href: '/permanent#ovol', drawing: PUFFER, colours: c.ovol.colours },
		{ line: 'BARAM', mark: '바람', script: 'ko', name: c.baram.pieces[0].name, cat: 'bottoms', price: c.prices.baram, permanent: true, href: '/permanent#baram', drawing: JOGGER, colours: c.baram.colours }
	]);

	const CATS: ('all' | Cat)[] = ['all', 'objects', 'tops', 'outer', 'bottoms'];
	let current = $state<'all' | Cat>('all');
	type Sort = 'no' | 'low' | 'high';
	let sort = $state<Sort>('no');
	const amount = (p: string) => Number(p.replace(/[^0-9]/g, ''));
	const shown = $derived.by(() => {
		const list = current === 'all' ? items : items.filter((i) => i.cat === current);
		if (sort === 'no') return list;
		return [...list].sort((a, b) => (sort === 'low' ? 1 : -1) * (amount(a.price) - amount(b.price)));
	});
	const countOf = (k: 'all' | Cat) => (k === 'all' ? items.length : items.filter((i) => i.cat === k).length);

	// The filter lives in the address (?c=tops) so a filtered view can be shared.
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
	const no = (i: number) => String(items.indexOf(shown[i]) + 1).padStart(3, '0');
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="inv">
	<p class="kicker">{t.kicker}</p>
	<Defaced text={t.h1} />
	<p class="lead">{t.lead}</p>
	<p class="sign"><Cipher text={LINES.meant} /></p>

	<div class="filters mono" role="group" aria-label={t.filterLabel}>
		{#each CATS as k}
			<button type="button" aria-pressed={current === k} onclick={() => choose(k)}>
				#{t.cats[k]}<sup>{countOf(k)}</sup>
			</button>
		{/each}
	</div>
	<div class="bar2">
		<p class="total mono" aria-live="polite">{t.pieces.replace('{n}', String(shown.length))}</p>
		<div class="sort mono" role="group" aria-label={t.sortLabel}>
			{#each [['no', t.sortNo], ['low', t.sortLow], ['high', t.sortHigh]] as [k, label]}
				<button type="button" aria-pressed={sort === k} onclick={() => (sort = k as Sort)}>{label}</button>
			{/each}
		</div>
	</div>

	<ul class="grid">
		{#each shown as it, i (it.line + it.name)}
			<li>
				<a href={lp(lang, it.href)}>
					<div class="draw">
						<span class="no mono">{no(i)}</span>
						<svg viewBox={it.drawing.box} role="img" aria-label="{it.line} {it.name}">
							{#each it.drawing.paths as pth}
								<path
									d={pth.d}
									fill="none"
									stroke={pth.dim ? '#a9aeb1' : '#f2f3f1'}
									stroke-width={pth.dim ? 1 : 1.5}
									stroke-linejoin="round"
								/>
							{/each}
						</svg>
					</div>
					<p class="line mono">
						{#if it.mark}<span class="mark" lang={it.script}>{it.mark}</span>{/if}{it.line}
					</p>
					<p class="name">{it.name}</p>
					{#if it.colours}
						<p class="dots" aria-label={it.colours.join(', ')}>
							{#each it.colours as col}<span title={col} style="background:{SWATCH[col] ?? '#2a3035'}"></span>{/each}
						</p>
					{/if}
					<p class="meta"><span>{it.price}</span><span class="mono">{it.permanent ? t.permanent : t.edition}</span></p>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	.inv {
		max-width: 80rem;
		margin: 0 auto;
		padding: clamp(3rem, 8vw, 6rem) var(--gutter);
	}
	.kicker {
		margin: 0 0 1rem;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	.inv :global(h1) {
		margin: 0;
		font-weight: 400;
		font-size: clamp(2.25rem, 5vw, 3.75rem);
		line-height: 1.05;
	}
	.lead {
		max-width: 40rem;
		margin: 1.25rem 0 0;
		font-size: 1.125rem;
		color: #d5d8d9;
	}
	.sign {
		margin: 1rem 0 0;
	}
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1.75rem;
		margin-top: clamp(2.5rem, 6vw, 4rem);
		padding-top: 1.25rem;
		border-top: 1px solid var(--line);
	}
	.filters button {
		min-height: 44px;
		padding: 0;
		background: none;
		border: 0;
		color: var(--ink-dim);
		font: inherit;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		cursor: pointer;
	}
	.filters button:hover,
	.filters button[aria-pressed='true'] {
		color: var(--ink);
	}
	.filters button[aria-pressed='true'] {
		text-decoration: line-through;
		text-decoration-thickness: 1px;
	}
	sup {
		margin-left: 0.2em;
		font-size: 0.7em;
		color: var(--ink-dim);
	}
	.total {
		margin: 0.25rem 0 0;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	.bar2 {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem 1.5rem;
	}
	.sort {
		display: flex;
		gap: 1.25rem;
	}
	.sort button {
		min-height: 44px;
		padding: 0;
		background: none;
		border: 0;
		color: var(--ink-dim);
		font: inherit;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		cursor: pointer;
	}
	.sort button[aria-pressed='true'],
	.sort button:hover {
		color: var(--ink);
	}
	.dots {
		display: flex;
		gap: 0.35rem;
		margin: 0.5rem 0 0;
	}
	.dots span {
		width: 0.7rem;
		height: 0.7rem;
		border: 1px solid var(--hairline);
	}
	.grid {
		list-style: none;
		margin: 2rem 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 2.5rem 1.25rem;
	}
	.grid a {
		display: block;
		color: inherit;
		text-decoration: none;
	}
	.draw {
		position: relative;
		aspect-ratio: 4 / 5;
		display: grid;
		place-items: center;
		padding: 1.5rem;
		background: var(--raised);
		border: 1px solid var(--line);
		transition: border-color 200ms ease;
	}
	.grid a:hover .draw,
	.grid a:focus-visible .draw {
		border-color: var(--hairline);
	}
	.draw svg {
		width: 100%;
		height: 100%;
	}
	.no {
		position: absolute;
		top: 0.75rem;
		left: 0.85rem;
		font-size: 0.6875rem;
		letter-spacing: 0.12em;
		color: var(--ink-dim);
	}
	.line {
		margin: 0.9rem 0 0;
		font-size: 0.75rem;
		letter-spacing: 0.12em;
		color: var(--ink-dim);
	}
	.mark {
		font-family: var(--kanji);
		margin-right: 0.6em;
		letter-spacing: 0.05em;
	}
	.name {
		margin: 0.2rem 0 0;
		font-size: 1.125rem;
		text-transform: uppercase;
	}
	.meta {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
		margin: 0.35rem 0 0;
		font-size: 0.9375rem;
	}
	.meta .mono {
		font-size: 0.6875rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ink-dim);
		align-self: center;
	}
	@media (max-width: 1000px) {
		.grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 680px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 2rem 0.75rem;
		}
		.draw {
			padding: 1rem;
		}
		.meta {
			flex-direction: column;
			gap: 0.1rem;
		}
		.meta .mono {
			align-self: flex-start;
		}
	}
</style>
