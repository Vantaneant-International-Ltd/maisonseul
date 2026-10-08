<script lang="ts">
	import { page } from '$app/stores';
	import Cipher from '$lib/Cipher.svelte';
	import { LINES } from '$lib/cipher';
	import { copy, langOf, lp } from '$lib/i18n';
	import { BACKERS } from '$lib/config';
	import { SWATCH, TEE, LONG, SHIRT, OVERSHIRT, SHELL, PUFFER, JOGGER } from '$lib/drawings';

	// MA (間), the permanent denim collection. Three styles, drawn as outlines
	// until samples exist. Not an edition: no numbers, no end date. Style names
	// stay the same in every language.
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const t = $derived(c.ma);
	const count = $derived(c.backers.count.replace('{n}', String(BACKERS.ma.length)));

	const shapes = [
		{ name: 'Loose', path: 'M50 32 L46 380 L96 380 L100 122 L104 380 L154 380 L150 32 Z' },
		{ name: 'Baggy', path: 'M48 32 L28 380 L96 380 L100 128 L104 380 L172 380 L152 32 Z' },
		{
			name: 'Barrel',
			path: 'M50 32 C24 150 24 270 54 380 L94 380 C98 300 100 210 100 126 C100 210 102 300 106 380 L146 380 C176 270 176 150 150 32 Z'
		}
	];

	// The rest of the permanent collection. Each line is named in the language
	// of the place that shaped it, and drawn as outlines until samples exist.
	const lines = $derived([
		{
			id: 'grund', word: 'GRUND', mark: '', script: '', d: c.ji,
			drawings: [TEE, LONG],
			prices: [[c.ji.pieces[0].name, c.prices.jiTee], [c.ji.pieces[1].name, c.prices.jiLong]]
		},
		{
			id: 'qutn', word: 'QUTN', mark: 'قطن', script: 'ar', d: c.qutn,
			drawings: [SHIRT, OVERSHIRT],
			prices: [[c.qutn.pieces[0].name, c.prices.qutnPoplin], [c.qutn.pieces[1].name, c.prices.qutnCanvas]]
		},
		{
			id: 'ovol', word: 'ÖVÖL', mark: 'ӨВӨЛ', script: 'mn', d: c.ovol,
			drawings: [SHELL, PUFFER],
			prices: [[c.ovol.pieces[0].name, c.prices.ovolLight], [c.ovol.pieces[1].name, c.prices.ovolHeavy]]
		},
		{
			id: 'baram', word: 'BARAM', mark: '바람', script: 'ko', d: c.baram,
			drawings: [JOGGER],
			prices: [[c.baram.pieces[0].name, c.prices.baram]]
		}
	]);
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="perm">
	<section class="head">
		<p class="kicker">{t.kicker}</p>
		<h1><span class="kanji" lang="ja">間</span><span class="latin">MA</span></h1>
		<p class="lead">{t.lead}</p>
		<p class="lead second">{t.lead2}</p>
		<p class="sign"><Cipher text={LINES.slowerHands} /></p>
	</section>

	<ul class="cuts" aria-label={t.stylesLabel}>
		{#each shapes as sh, i}
			<li>
				<div class="draw">
					<svg viewBox="0 0 200 400" role="img" aria-label="MA {sh.name}, {t.outline}">
						<rect x="48" y="18" width="104" height="14" fill="none" stroke="#f2f3f1" stroke-width="1.5" />
						<path d={sh.path} fill="none" stroke="#f2f3f1" stroke-width="1.5" stroke-linejoin="round" />
						<line x1="100" y1="32" x2="100" y2="92" stroke="#a9aeb1" stroke-width="1" />
					</svg>
				</div>
				<p class="no mono"><span class="kanji" lang="ja">間</span> MA</p>
				<h2>{sh.name}</h2>
				<p class="line">{t.styles[i]}</p>
			</li>
		{/each}
	</ul>

	<section class="backing">
		<h2 class="bh">{t.backersTitle}</h2>
		<p>{t.backersText}</p>
		<p class="count mono">{BACKERS.ma.length ? BACKERS.ma.join(' ') : c.backers.noneYet} / {count}</p>
	</section>

	<section class="foot">
		<dl>
			<div><dt>{t.price}</dt><dd>{c.prices.ma}</dd></div>
			<div><dt>{t.status}</dt><dd>{t.statusValue}</dd></div>
			<div><dt>{t.arrives}</dt><dd>{t.arrivesValue}</dd></div>
			<div><dt>{t.edition}</dt><dd>{t.editionValue}</dd></div>
		</dl>
		<a class="cta" href={lp(lang, '/backers')}>{t.cta}</a>
	</section>
	{#each lines as L}
		<section class="line-block" id={L.id}>
			<h2 class="big">
				{#if L.mark}<span class="mark" lang={L.script}>{L.mark}</span>{/if}<span class="word">{L.word}</span>
			</h2>
			<p class="lead">{L.d.lead}</p>
			<p class="lead second">{L.d.lead2}</p>

			<ul class="cuts two">
				{#each L.drawings as g, i}
					<li>
						<div class="draw wide">
							<svg viewBox={g.box} role="img" aria-label="{L.word} {L.d.pieces[i].name}, {t.outline}">
								{#each g.paths as pth}
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
						<p class="no mono">{L.word}</p>
						<h3>{L.d.pieces[i].name}</h3>
						<p class="line">{L.d.pieces[i].line}</p>
					</li>
				{/each}
			</ul>

			<div class="spec">
				<div>
					<h3 class="sh mono">{L.d.coloursLabel}</h3>
					<ul class="swatches">
						{#each L.d.colours as name}
							<li><span class="chip" style="background:{SWATCH[name]}"></span>{name}</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="sh mono">{c.ji.detailsLabel}</h3>
					<ul class="details">
						{#each L.d.details as dd}<li>{dd}</li>{/each}
					</ul>
				</div>
			</div>

			<section class="foot">
				<dl>
					{#each L.prices as pr}<div><dt>{pr[0]}</dt><dd>{pr[1]}</dd></div>{/each}
					<div><dt>{t.status}</dt><dd>{t.statusValue}</dd></div>
					<div><dt>{t.arrives}</dt><dd>{t.arrivesValue}</dd></div>
					<div><dt>{t.edition}</dt><dd>{t.editionValue}</dd></div>
				</dl>
			</section>
		</section>
	{/each}
</main>

<style>
	.perm {
		max-width: 80rem;
		margin: 0 auto;
		padding: clamp(3rem, 8vw, 6rem) var(--gutter);
	}
	.head {
		max-width: 44rem;
	}
	.kicker {
		margin: 0 0 1rem;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	h1 {
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 0.3em;
		font-weight: 400;
		font-size: clamp(4rem, 12vw, 9rem);
		line-height: 1;
	}
	.kanji {
		font-family: var(--kanji);
		font-weight: 400;
	}
	h1 .latin {
		font-size: 0.42em;
		letter-spacing: 0.08em;
	}
	.sign {
		margin: 1.5rem 0 0;
	}
	.lead.second {
		margin-top: 0.75rem;
		color: var(--ink-dim);
	}
	.lead {
		margin: 1.75rem 0 0;
		font-size: 1.1875rem;
		color: #d5d8d9;
	}

	.cuts {
		list-style: none;
		margin: clamp(3rem, 7vw, 5rem) 0 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
	}
	.draw {
		aspect-ratio: 4 / 5;
		background: var(--raised);
		border: 1px solid var(--line);
		display: grid;
		place-items: center;
		padding: 2rem;
	}
	.draw svg {
		height: 100%;
		width: auto;
		max-width: 100%;
	}
	.no {
		margin: 1.1rem 0 0.25rem;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		color: var(--ink-dim);
	}
	h2 {
		margin: 0;
		font-weight: 400;
		font-size: 1.5rem;
		text-transform: uppercase;
	}
	.line {
		margin: 0.4rem 0 0;
		color: var(--ink-dim);
	}

	.backing {
		max-width: 44rem;
		margin-top: clamp(3rem, 7vw, 5rem);
	}
	.backing .bh {
		font-size: 1.375rem;
	}
	.backing p {
		margin: 0.75rem 0 0;
		color: #d5d8d9;
	}
	.backing .count {
		color: var(--ink-dim);
		font-size: 0.9375rem;
	}
	.foot {
		margin-top: clamp(3rem, 7vw, 5rem);
		padding-top: 2rem;
		border-top: 1px solid var(--line);
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 2rem;
	}
	dl {
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem 3rem;
	}
	dt {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	dd {
		margin: 0.35rem 0 0;
		font-size: 1.0625rem;
	}
	.cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3.5rem;
		padding: 0 2.5rem;
		background: var(--ink);
		color: var(--void);
		text-decoration: none;
		font-size: 0.8125rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
	.cta:hover {
		background: #ffffff;
	}

	.line-block {
		scroll-margin-top: 2rem;
		margin-top: clamp(5rem, 12vw, 9rem);
		padding-top: clamp(3rem, 7vw, 5rem);
		border-top: 1px solid var(--line);
	}
	.line-block > .lead {
		max-width: 44rem;
	}
	.big {
		margin: 0;
		display: flex;
		align-items: baseline;
		gap: 0.3em;
		font-weight: 400;
		font-size: clamp(4rem, 12vw, 9rem);
		line-height: 1;
		text-transform: none;
	}
	.big .mark {
		font-family: var(--kanji);
		color: var(--ink-dim);
		font-size: 0.62em;
		margin-right: 0.3em;
	}
	.big .word {
		font-size: 0.62em;
		letter-spacing: 0.06em;
	}
	.cuts.two {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	.draw.wide {
		aspect-ratio: 5 / 4;
	}
	h3 {
		margin: 0;
		font-weight: 400;
		font-size: 1.5rem;
		text-transform: uppercase;
	}
	.spec {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 2rem;
		margin-top: clamp(3rem, 7vw, 4rem);
	}
	.sh {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		color: var(--ink-dim);
	}
	.swatches,
	.details {
		list-style: none;
		margin: 1rem 0 0;
		padding: 0;
		display: grid;
		gap: 0.75rem;
		color: #d5d8d9;
	}
	.swatches li {
		display: flex;
		align-items: center;
		gap: 0.9rem;
	}
	.chip {
		width: 2.25rem;
		height: 2.25rem;
		border: 1px solid var(--hairline);
	}
	.details li {
		padding-left: 1.1rem;
		position: relative;
	}
	.details li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.7em;
		width: 0.5rem;
		border-top: 1px solid var(--ink-dim);
	}

	@media (max-width: 760px) {
		.cuts,
		.cuts.two,
		.spec {
			grid-template-columns: 1fr;
		}
		.cta {
			width: 100%;
		}
	}
</style>
