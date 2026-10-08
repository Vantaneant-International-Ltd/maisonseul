<script lang="ts">
	import { page } from '$app/stores';
	import Wordmark from '$lib/Wordmark.svelte';
	import LangSwitch from '$lib/LangSwitch.svelte';
	import { copy, langOf, lp } from '$lib/i18n';
	import Cipher from '$lib/Cipher.svelte';
	import { LINES } from '$lib/cipher';

	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
</script>

<!--
	The home page, still a teaser: the wordmark, one hairline, and a quiet line
	of links into the site. The hairline cuts the frame in two, as it does on the
	brand-book cover, and passes through the gap between MAISON and SEUL.
-->
<svelte:head>
	<title>{c.home.title}</title>
	<meta name="description" content={c.home.description} />
</svelte:head>

<!-- Brand-book cover: creased surface, a single print under the name. The
     print is sharp on this side of the line and dissolves past it. -->
<div class="tex" aria-hidden="true"></div>
<div class="print" aria-hidden="true">
	<div class="half near"><img src="/fingerprint.svg" alt="" /></div>
	<div class="half far"><img src="/fingerprint.svg" alt="" /></div>
</div>

<svg class="cut" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
	<line x1="57" y1="0" x2="43" y2="100" vector-effect="non-scaling-stroke" />
</svg>

<div class="corner"><LangSwitch /></div>

<main>
	<h1><Wordmark split live /></h1>
</main>

<p class="sign"><Cipher text={LINES.oneAtATime} /></p>

<footer>
	<span>{c.home.tagline}</span>
	<nav aria-label="Main">
		<a href={lp(lang, '/skrin')}><span class="kanji" lang="non-Runr">ᛌᚴᚱᛁᚿ</span>&nbsp;SKRIN</a>
		<a href={lp(lang, '/inventory')}>{c.nav.inventory}</a>
		<a href={lp(lang, '/backers')}>{c.nav.back}</a>
	</nav>
</footer>

<style>
	.tex {
		position: fixed;
		inset: 0;
		background: url('/texture.svg') center / cover;
		opacity: 0.06;
		pointer-events: none;
	}
	.print {
		position: fixed;
		inset: 0;
		pointer-events: none;
	}
	/* The halves follow the hairline: 57% across at the top, 43% at the bottom. */
	.half {
		position: absolute;
		inset: 0;
	}
	.near {
		clip-path: polygon(0 0, 57% 0, 43% 100%, 0 100%);
	}
	.far {
		clip-path: polygon(57% 0, 100% 0, 100% 100%, 43% 100%);
		filter: blur(7px);
	}
	.half img {
		position: absolute;
		left: 50%;
		top: 52%;
		height: min(64vh, 125vw);
		width: auto;
		transform: translate(-58%, -12%) rotate(-8deg);
		opacity: 0.09;
	}
	.far img {
		opacity: 0.06;
		transform: translate(-56%, -13%) rotate(-8deg);
	}
	.sign {
		position: fixed;
		left: 0;
		right: 0;
		bottom: clamp(3.5rem, 9vh, 5rem);
		margin: 0;
		text-align: center;
		pointer-events: none;
		animation: arrive 1600ms ease 900ms both;
	}
	.cut {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
	.corner {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1;
		padding: clamp(0.25rem, 1.5vw, 1rem) clamp(0.5rem, 2.5vw, 1.5rem);
		animation: arrive 1600ms ease 500ms both;
	}
	.cut line {
		stroke: var(--hairline);
		stroke-width: 1;
	}

	main {
		min-height: 100svh;
		display: grid;
		place-items: center;
	}

	h1 {
		margin: 0;
		width: 100%;
		font-size: clamp(1.75rem, 8vw, 4.75rem);
		font-weight: inherit;
	}

	footer {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 0 1.5rem;
		padding: 0 clamp(1rem, 3vw, 2rem) clamp(0.5rem, 2vw, 1.25rem);
		font-size: 0.75rem;
		font-weight: 400;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	footer nav {
		display: flex;
		gap: 0 1.75rem;
	}
	.kanji {
		font-family: var(--kanji);
	}
	footer > span,
	footer a {
		display: inline-flex;
		align-items: center;
		min-height: 44px;
	}
	footer a {
		color: inherit;
		text-decoration: none;
		transition: color 180ms ease;
	}
	footer a:hover,
	footer a:focus-visible {
		color: var(--ink);
	}

	.cut,
	h1,
	footer {
		animation: arrive 1600ms ease both;
	}
	footer {
		animation-delay: 500ms;
	}
	@keyframes arrive {
		from {
			opacity: 0;
		}
	}

	/* On narrow screens the two lines stack and would sit on the hairline, so
	   the footer takes the ground colour and the hairline ends above it. */
	@media (max-width: 520px) {
		footer {
			background: var(--void);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.cut,
		h1,
		footer,
		.corner {
			animation: none;
		}
	}
</style>
