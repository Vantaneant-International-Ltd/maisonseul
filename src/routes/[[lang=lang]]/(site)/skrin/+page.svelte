<script lang="ts">
	import { page } from '$app/stores';
	import CaseDrawing from '$lib/CaseDrawing.svelte';
	import { copy, langOf, lp } from '$lib/i18n';
	import { BACKERS } from '$lib/config';

	// Product page, teaser mode: nothing is on sale yet. The one action on the
	// site is founding backing (/backers). Photographs follow the sample.
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const t = $derived(c.case01);

	let view = $state(0);
	const backers = BACKERS.case01;
	const count = $derived(c.backers.count.replace('{n}', String(backers.length)));
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main>
	<!-- The object first, as on an Apple-first product page -->
	<section id="back" class="buy" aria-labelledby="case-h">
		<div class="gallery">
			<div class="frame">
				{#if view === 0}
					<div class="drawing"><CaseDrawing /></div>
				{:else}
					<p class="ph">{t.views[view]}. {t.followSuffix}</p>
				{/if}
			</div>
			<div class="thumbs" role="group" aria-label={t.viewsLabel}>
				{#each t.views as v, i}
					<button type="button" aria-pressed={view === i} onclick={() => (view = i)}>{v}</button>
				{/each}
			</div>
		</div>

		<div class="panel">
			<p class="kicker">{t.kicker}</p>
			<h1 id="case-h">SKRIN</h1>
			<p class="variant">{t.variant}</p>
			<p class="price">{c.prices.case01} <span>{c.taxNote}</span></p>

			<p class="status">{t.status}</p>
			<p class="plan-note">{t.backNote}</p>

			<a class="cta" href={lp(lang, '/backers')}>{t.cta}</a>

			<p class="note">{t.note}</p>
		</div>
	</section>

	<!-- One-line pitch -->
	<section class="intro">
		<h2>{t.introTitle}</h2>
		<p>{t.intro}</p>
	</section>

	<!-- Apple-first: made around the devices in the bag -->
	<section class="carry" aria-labelledby="carry-h">
		<div class="head">
			<h2 id="carry-h">{t.carryTitle}</h2>
			<p>{t.carrySub}</p>
		</div>
		<div class="cards three">
			{#each t.carry as item}
				<article>
					<div class="img"><p class="ph">{c.photo}</p></div>
					<h3>{item.title}</h3>
					<p>{item.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- Four reasons, short -->
	<section class="reasons" aria-label={t.reasonsLabel}>
		<div class="cards four">
			{#each t.reasons as r}
				<article>
					<div class="img"><p class="ph">{c.photo}</p></div>
					<h3>{r.title}</h3>
					<p>{r.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- Founding backers: their initials go inside every SKRIN -->
	<section class="backers" aria-labelledby="backers-h">
		<h2 id="backers-h">{t.backersTitle}</h2>
		<p>{t.backersText}</p>
		{#if backers.length}
			<ul class="initials">
				{#each backers as b}<li>{b}</li>{/each}
			</ul>
		{:else}
			<p class="none">{c.backers.noneYet}</p>
		{/if}
		<p class="count">{count}</p>
		<a class="ghost" href={lp(lang, '/backers')}>{t.cta}</a>
	</section>

	<!-- Specs: plain label and value blocks -->
	<section id="details" class="specs" aria-labelledby="specs-h">
		<h2 id="specs-h">{t.specsTitle}</h2>
		<dl>
			{#each t.specs as sp}
				<div class="row">
					<dt>{sp.label}</dt>
					<dd>
						<ul>
							{#each sp.lines as l}<li>{l}</li>{/each}
						</ul>
					</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="faq" aria-labelledby="faq-h">
		<h2 id="faq-h">{t.faqTitle}</h2>
		<dl>
			{#each t.faq as f}
				<div class="row">
					<dt>{f.q}</dt>
					<dd>{f.a}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<ul class="trust" aria-label={t.trustLabel}>
		{#each t.trust as tr}<li>{tr}</li>{/each}
	</ul>
</main>

<style>
	main > section {
		padding: clamp(3rem, 8vw, 7rem) var(--gutter);
	}
	h2 {
		margin: 0;
		font-weight: 300;
		font-size: clamp(1.75rem, 3.4vw, 2.75rem);
		line-height: 1.1;
		text-transform: uppercase;
	}
	.ph {
		margin: 0;
		font-size: 0.8125rem;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}

	/* ---------- buy box ---------- */
	.buy {
		display: grid;
		grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
		max-width: 80rem;
		margin: 0 auto;
	}
	.frame {
		aspect-ratio: 4 / 5;
		background: var(--raised);
		border: 1px solid var(--line);
		display: grid;
		place-items: center;
		padding: 1.5rem;
	}
	.drawing {
		width: min(70%, 22rem);
		aspect-ratio: 400 / 580;
	}
	.frame .ph {
		align-self: end;
		justify-self: start;
	}
	.thumbs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.75rem;
	}
	.thumbs button {
		min-height: 44px;
		padding: 0 0.9rem;
		border: 1px solid var(--line);
		background: transparent;
		color: var(--ink-dim);
		font: inherit;
		font-size: 0.8125rem;
		cursor: pointer;
	}
	.thumbs button[aria-pressed='true'] {
		border-color: var(--ink);
		color: var(--ink);
	}

	.panel {
		position: sticky;
		top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.kicker,
	.variant,
	.note,
	.plan-note {
		margin: 0;
		color: var(--ink-dim);
	}
	.kicker {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
	h1 {
		margin: 0;
		font-weight: 200;
		font-size: clamp(2.75rem, 6vw, 5rem);
		line-height: 1;
	}
	.price {
		margin: 0.5rem 0 0;
		font-size: 1.75rem;
		font-weight: 300;
	}
	.price span {
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	.status {
		margin: 0.5rem 0 0;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
		font-size: 1.0625rem;
	}
	.plan-note {
		font-size: 0.9375rem;
	}
	.cta {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3.5rem;
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
	.note {
		font-size: 0.875rem;
	}

	/* ---------- intro ---------- */
	.intro {
		max-width: 52rem;
		margin: 0 auto;
		text-align: center;
		border-top: 1px solid var(--line);
	}
	.intro p {
		margin: 1.25rem auto 0;
		max-width: 38rem;
		font-size: 1.125rem;
		color: #d5d8d9;
	}

	/* ---------- cards ---------- */
	.head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.5rem 2rem;
		max-width: 80rem;
		margin: 0 auto 2.5rem;
	}
	.head p {
		margin: 0;
		color: var(--ink-dim);
	}
	.cards {
		display: grid;
		gap: 1.5rem;
		max-width: 80rem;
		margin: 0 auto;
	}
	.cards.three {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	.cards.four {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
	.cards article {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.img {
		aspect-ratio: 4 / 5;
		background: var(--raised);
		border: 1px solid var(--line);
		display: flex;
		align-items: flex-end;
		padding: 1rem;
		margin-bottom: 0.4rem;
	}
	.cards h3 {
		margin: 0;
		font-weight: 400;
		font-size: 1.125rem;
	}
	.cards article > p {
		margin: 0;
		color: var(--ink-dim);
	}
	.reasons {
		padding-top: 0 !important;
	}

	/* ---------- specs and faq (paper) ---------- */
	.specs,
	.faq {
		background: var(--paper);
		color: var(--paper-ink);
	}
	.faq {
		padding-top: 0 !important;
	}
	.specs h2,
	.faq h2 {
		max-width: 80rem;
		margin: 0 auto 2rem;
	}
	.specs dl,
	.faq dl {
		max-width: 80rem;
		margin: 0 auto;
	}
	.row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
		gap: 0.5rem 2rem;
		padding: 1.1rem 0;
		border-top: 1px solid #c4c7c8;
	}
	.row:last-child {
		border-bottom: 1px solid #c4c7c8;
	}
	dt {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--paper-dim);
		padding-top: 0.15rem;
	}
	.faq dt {
		font-size: 1rem;
		letter-spacing: 0;
		text-transform: none;
		color: var(--paper-ink);
		font-weight: 400;
	}
	dd {
		margin: 0;
		color: #2e3438;
	}
	dd ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	dd li + li {
		margin-top: 0.35rem;
	}

	/* ---------- trust row ---------- */
	.trust {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--line);
	}
	.trust li {
		padding: 1.5rem var(--gutter);
		text-align: center;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	.trust li + li {
		border-left: 1px solid var(--line);
	}

	/* ---------- founding backers ---------- */
	.backers {
		max-width: 52rem;
		margin: 0 auto;
		text-align: center;
		border-top: 1px solid var(--line);
	}
	.backers > p {
		margin: 1.25rem auto 0;
		max-width: 38rem;
		color: #d5d8d9;
	}
	.backers .none,
	.backers .count {
		color: var(--ink-dim);
		font-size: 0.9375rem;
	}
	.initials {
		list-style: none;
		margin: 1.5rem auto 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem 1rem;
		letter-spacing: 0.12em;
	}
	.ghost {
		display: inline-flex;
		align-items: center;
		min-height: 3rem;
		margin-top: 1.5rem;
		padding: 0 1.75rem;
		border: 1px solid var(--ink);
		text-decoration: none;
		font-size: 0.8125rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	/* ---------- narrow screens ---------- */
	@media (max-width: 900px) {
		.buy {
			grid-template-columns: 1fr;
		}
		.panel {
			position: static;
		}
		.cards.three {
			grid-template-columns: 1fr;
		}
		.cards.four {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.trust {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.trust li:nth-child(3) {
			border-left: none;
		}
		.trust li:nth-child(n + 3) {
			border-top: 1px solid var(--line);
		}
	}
	@media (max-width: 600px) {
		.row {
			grid-template-columns: 1fr;
		}
		.trust li {
			padding: 1.25rem 0.5rem;
		}
	}
</style>
