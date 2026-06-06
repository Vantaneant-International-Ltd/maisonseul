<script lang="ts">
	// Holding page. Only words Maison Seul has already published (the IG bio) are
	// used here — nothing is invented. The mood is carried by emptiness and a
	// faint cold mist, not by ornament.
</script>

<div class="atmos" aria-hidden="true"></div>

<main>
	<section class="lockup">
		<h1>Maison&nbsp;Seul<sup>®</sup></h1>
		<p class="desc">Archival fashion house</p>
	</section>

	<p class="stamp">Dublin &nbsp;·&nbsp; Coming MMXXVII</p>

	<p class="origin">A VNTA company</p>
</main>

<style>
	/* --- atmosphere: a cold, static mist + vignette ------------------------- */
	.atmos {
		position: fixed;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(58% 48% at 32% 26%, rgba(150, 168, 190, 0.1), transparent 70%),
			radial-gradient(52% 46% at 74% 78%, rgba(120, 140, 168, 0.08), transparent 72%),
			radial-gradient(125% 120% at 50% 45%, transparent 38%, rgba(0, 0, 0, 0.72)),
			var(--void);
	}

	/* very fine grain so the void has tooth, not flatness */
	.atmos::after {
		content: '';
		position: absolute;
		inset: 0;
		opacity: 0.04;
		mix-blend-mode: overlay;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
	}

	/* --- layout ------------------------------------------------------------- */
	main {
		min-height: 100svh;
		display: grid;
		grid-template-rows: 1fr auto auto;
		align-items: center;
		justify-items: center;
		text-align: center;
		padding: clamp(2rem, 6vh, 4rem) 1.5rem;
		gap: clamp(2.5rem, 8vh, 5rem);
	}

	.lockup {
		align-self: end;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1.1rem, 3vh, 1.8rem);
	}

	h1 {
		margin: 0;
		font-family: var(--sans);
		font-weight: 200;
		text-transform: uppercase;
		letter-spacing: 0.42em;
		/* compensate the trailing tracking so it optically centres */
		text-indent: 0.42em;
		font-size: clamp(1.35rem, 5.2vw, 2.9rem);
		line-height: 1;
		color: var(--ink);
	}

	h1 sup {
		font-size: 0.32em;
		font-weight: 300;
		top: -1.4em;
		letter-spacing: 0;
		color: var(--ink-faint);
	}

	.desc {
		margin: 0;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.34em;
		text-indent: 0.34em;
		font-size: clamp(0.56rem, 1.7vw, 0.68rem);
		color: var(--ink-dim);
	}

	.stamp {
		margin: 0;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.28em;
		font-size: clamp(0.56rem, 1.7vw, 0.66rem);
		color: var(--ink-faint);
	}

	.origin {
		margin: 0;
		align-self: end;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.3em;
		font-size: 0.54rem;
		color: var(--ink-faint);
	}
</style>
