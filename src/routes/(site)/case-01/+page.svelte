<script lang="ts">
	import CaseDrawing from '$lib/CaseDrawing.svelte';

	// Product page. The shared (site) layout supplies the header, footer and
	// noindex. Square brackets mark facts that wait for the approved sample or a date.

	type Plan = 'deposit' | 'full';
	let plan: Plan = $state('deposit');

	// Gallery. Until photographs exist, each frame names the shot that fills it
	// (numbers match the site image prompts).
	const views = [
		{ shot: '', name: 'Front' },
		{ shot: 'Shot 1', name: 'Three-quarter' },
		{ shot: 'Shot 4', name: 'Raw corner' },
		{ shot: 'Shot 6', name: 'Interior' },
		{ shot: 'Shot 7', name: 'Serial plate' }
	];
	let view = $state(0);

	const reserveHref = $derived(
		'mailto:studio@maisonseul.com?subject=' +
			encodeURIComponent(
				plan === 'deposit'
					? 'CASE 01 / Reserve with a €100 deposit'
					: 'CASE 01 / Reserve and pay in full'
			)
	);

	const carry = [
		{
			title: 'MacBook sleeve',
			text: 'A padded sleeve in the lid, sized for MacBook Pro 16-inch and anything smaller.',
			shot: 'MacBook sliding into the lid sleeve'
		},
		{
			title: 'AirTag pocket',
			text: 'A hidden pocket inside the frame. Drop an AirTag in once and forget it is there.',
			shot: 'AirTag pocket, opened, inside the frame'
		},
		{
			title: 'Cable pocket',
			text: 'A flat zip pocket for a charger, cables and AirPods, so nothing rolls loose.',
			shot: 'Charger and cables laid flat in the pocket'
		}
	];

	const reasons = [
		{ title: 'One raw corner.', text: 'Seven corners in graphite. One left in raw aluminium.', shot: 'Shot 4' },
		{ title: 'Four screws.', text: 'Every wheel comes off with a screwdriver.', shot: 'Shot 3' },
		{ title: 'It will mark.', text: 'Aluminium keeps every trip. That is the point.', shot: 'Shot 8' },
		{ title: 'No logo.', text: 'Your number, engraved small beside the handle.', shot: 'Shot 5' }
	];

	const specs: { label: string; lines: string[] }[] = [
		{
			label: 'Details',
			lines: [
				'Aluminium frame, two latches, no zip',
				'TSA-accepted combination locks',
				'Four double spinner wheels, replaceable',
				'Telescopic handle, replaceable'
			]
		},
		{
			label: 'Size and weight',
			lines: [
				'55 × 40 × 20 cm (21.7 × 15.7 × 7.9 in), wheels and handles included',
				'[4.3] kg ([9.5] lb) empty',
				'[31] litres'
			]
		},
		{
			label: 'Compatibility',
			lines: [
				'MacBook Pro 16-inch, 14-inch and MacBook Air in the lid sleeve',
				'One AirTag in the frame pocket. AirTag not included',
				'Cabin size limits of Ryanair (paid cabin bag), Aer Lingus, Lufthansa and British Airways',
				'Lufthansa allows 8 kg in total, which leaves about 3.7 kg for your things. Airline rules change, so check before you fly'
			]
		},
		{ label: 'Finish', lines: ['Graphite, matte anodised', 'One corner in raw aluminium'] },
		{ label: 'Materials', lines: ['Aluminium-magnesium shell and frame', 'Polyester lining, pale grey'] },
		{
			label: 'In the box',
			lines: ['CASE 01', 'Dust cover', 'Ownership card with your number', 'Care and repair card']
		},
		{
			label: 'Shipping, returns and warranty',
			lines: [
				'Delivery in Ireland and the EU: [price]',
				'14 days to return it unused, for a full refund',
				'5 years on shell, frame, wheels, handle and latches. Dents and scratches are not covered'
			]
		}
	];

	const faq = [
		{
			q: 'Where is it made?',
			a: 'Designed in Dublin. Made in [city], China, by one specialist aluminium factory. Every batch is inspected before it ships.'
		},
		{
			q: 'What happens when the hundred are gone?',
			a: 'Graphite is not made again. CASE 01 continues in a new finish, and parts stay in stock for every edition.'
		},
		{ q: 'Can I cancel a reservation?', a: 'Yes, at any time before dispatch, for a full refund.' },
		{ q: 'Is Maison Seul part of Apple?', a: 'No. We design around Apple devices because most of our owners carry them.' }
	];
</script>

<svelte:head>
	<title>CASE 01 / Maison Seul</title>
	<meta name="description" content="CASE 01. An aluminium cabin case. Edition 001, one hundred pieces." />
</svelte:head>

<main>
	<!-- Buy box: the object first, as on an Apple-first product page -->
	<section id="reserve" class="buy" aria-labelledby="case-h">
		<div class="gallery">
			<div class="frame">
				{#if view === 0}
					<div class="drawing"><CaseDrawing /></div>
				{:else}
					<p class="ph">[{views[view].shot}] {views[view].name}</p>
				{/if}
			</div>
			<div class="thumbs" role="group" aria-label="Views">
				{#each views as v, i}
					<button type="button" aria-pressed={view === i} onclick={() => (view = i)}>{v.name}</button>
				{/each}
			</div>
		</div>

		<div class="panel">
			<p class="kicker">Case 01 / Cabin</p>
			<h1 id="case-h">CASE 01</h1>
			<p class="variant">Graphite / Edition 001 / 100 pieces</p>
			<p class="price">€525 <span>VAT included</span></p>

			<div class="plans" role="group" aria-label="How to pay">
				<button type="button" aria-pressed={plan === 'deposit'} onclick={() => (plan = 'deposit')}>
					<strong>Deposit</strong><span>€100 today</span>
				</button>
				<button type="button" aria-pressed={plan === 'full'} onclick={() => (plan = 'full')}>
					<strong>Pay in full</strong><span>€525 today</span>
				</button>
			</div>
			<p class="plan-note">
				{plan === 'deposit'
					? 'Refundable at any time before dispatch. The remaining €425 is due when your case is ready.'
					: 'Refundable at any time before dispatch.'}
			</p>

			<a class="cta" href={reserveHref}>Reserve by email</a>

			<ul class="micro">
				<li>[100] of 100 remain</li>
				<li>Dispatch from Dublin: [date]</li>
				<li>14-day returns</li>
				<li>5-year warranty, parts in stock</li>
			</ul>
			<p class="note">Made once in this finish. Numbered 001 to 100 inside the lid.</p>
		</div>
	</section>

	<!-- One-line pitch -->
	<section class="intro">
		<h2>One case. Nothing else.</h2>
		<p>
			An aluminium cabin case with no logo, one raw corner, and room built in for what you
			already carry. It is the first object from Maison Seul.
		</p>
	</section>

	<!-- Apple-first: made around the devices in the bag -->
	<section class="carry" aria-labelledby="carry-h">
		<div class="head">
			<h2 id="carry-h">Made for what you carry</h2>
			<p>MacBook, AirTag, charger. Each has its place.</p>
		</div>
		<div class="cards three">
			{#each carry as c}
				<article>
					<div class="img"><p class="ph">[Photo] {c.shot}</p></div>
					<h3>{c.title}</h3>
					<p>{c.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- Four reasons, short -->
	<section class="reasons" aria-label="Details">
		<div class="cards four">
			{#each reasons as r}
				<article>
					<div class="img"><p class="ph">[{r.shot}]</p></div>
					<h3>{r.title}</h3>
					<p>{r.text}</p>
				</article>
			{/each}
		</div>
	</section>

	<!-- Specs: plain label and value blocks -->
	<section id="details" class="specs" aria-labelledby="specs-h">
		<h2 id="specs-h">Details</h2>
		<dl>
			{#each specs as s}
				<div class="row">
					<dt>{s.label}</dt>
					<dd>
						<ul>
							{#each s.lines as l}<li>{l}</li>{/each}
						</ul>
					</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="faq" aria-labelledby="faq-h">
		<h2 id="faq-h">Questions</h2>
		<dl>
			{#each faq as f}
				<div class="row">
					<dt>{f.q}</dt>
					<dd>{f.a}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<ul class="trust" aria-label="Promises">
		<li>Designed in Dublin</li>
		<li>Numbered editions</li>
		<li>Repairable</li>
		<li>14-day returns</li>
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
	.plans {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}
	.plans button {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.15rem;
		min-height: 4rem;
		padding: 0.75rem 1rem;
		border: 1px solid var(--line);
		background: transparent;
		color: var(--ink);
		font: inherit;
		text-align: left;
		cursor: pointer;
	}
	.plans strong {
		font-weight: 400;
	}
	.plans span {
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	.plans button[aria-pressed='true'] {
		border-color: var(--ink);
		background: var(--ink);
		color: var(--void);
	}
	.plans button[aria-pressed='true'] span {
		color: var(--void);
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
	.micro {
		margin: 0;
		padding: 0;
		list-style: none;
		border-top: 1px solid var(--line);
	}
	.micro li {
		padding: 0.7rem 0;
		border-bottom: 1px solid var(--line);
		font-size: 0.9375rem;
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
