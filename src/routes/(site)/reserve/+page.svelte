<script lang="ts">
	import { PLACE_FEE, PLACE_PAYMENT_URL, STUDIO_EMAIL } from '$lib/config';

	// The site's one action. Steam Deck-style: a small fee holds a numbered
	// place in line, counts towards the price, and is refundable until used.
	const paid = PLACE_PAYMENT_URL !== '';
	const emailHref =
		`mailto:${STUDIO_EMAIL}?subject=` +
		encodeURIComponent('Hold my place') +
		'&body=' +
		encodeURIComponent('Please hold a place for me.\n\nInterested in: CASE 01 / MA (delete one)\nName:\n');
</script>

<svelte:head>
	<title>Reserve a place / Maison Seul</title>
	<meta
		name="description"
		content="One euro holds a numbered place in line for CASE 01 and MA. It counts towards the price and is refundable until you use it."
	/>
</svelte:head>

<main class="doc">
	<p class="kicker">Reserve</p>
	<h1>{PLACE_FEE}. Your place in line.</h1>
	<p class="lead">
		One euro holds a numbered place. When CASE 01 or MA opens, places are offered in order,
		before anyone else.
	</p>

	<section>
		<h2>What it does</h2>
		<ul>
			<li>Your place number arrives by email. Lower numbers are offered first.</li>
			<li>The {PLACE_FEE} counts towards the price of whatever you buy.</li>
			<li>It is refundable at any time until you use it. Email us and it goes back to your card.</li>
			<li>One place per person.</li>
		</ul>
	</section>

	<section>
		{#if paid}
			<a class="cta" href={PLACE_PAYMENT_URL} rel="noopener">Hold my place, {PLACE_FEE}</a>
			<p class="small">Payment is handled on a secure checkout page.</p>
		{:else}
			<a class="cta" href={emailHref}>Hold my place by email</a>
			<p class="small">
				Card payment opens shortly. Until then, email us and we will hold your number. Nothing is
				charged.
			</p>
		{/if}
	</section>
</main>

<style>
	.cta {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3.5rem;
		max-width: 26rem;
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
	.small {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
</style>
