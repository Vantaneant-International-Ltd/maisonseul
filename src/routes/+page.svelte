<script lang="ts">
	// A single, quiet holding page. Pure void, one wordmark, maximal space.
	// No backend, no form — interest is registered by a plain mailto.
	const EMAIL = 'studio@maisonseul.com';
</script>

<main>
	<div class="frame">
		<span class="eyebrow">Maison de mode · Paris</span>
	</div>

	<div class="center">
		<h1 class="wordmark">
			<span>Maison</span>
			<span>Seul</span>
		</h1>
		<p class="line">A fashion house of absence.</p>
	</div>

	<div class="frame frame--foot">
		<span class="status">Arriving 2026</span>
		<a class="register" href={`mailto:${EMAIL}?subject=Maison%20Seul`}>Register interest</a>
		<a class="parent" href="https://vnta.xyz" target="_blank" rel="noopener">A VNTA house</a>
	</div>
</main>

<style>
	main {
		min-height: 100svh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		padding: clamp(1.5rem, 4vw, 3rem);
		gap: clamp(2rem, 6vh, 4rem);
	}

	/* --- top / bottom rails ------------------------------------------------ */
	.frame {
		display: flex;
		justify-content: center;
	}

	.frame--foot {
		flex-direction: column;
		align-items: center;
		gap: 1.4rem;
		padding-bottom: 0.5rem;
	}

	.eyebrow,
	.status,
	.register,
	.parent {
		font-family: var(--label);
		text-transform: uppercase;
		letter-spacing: 0.32em;
		font-size: 0.66rem;
	}

	.eyebrow {
		color: var(--ink-faint);
	}

	.status {
		color: var(--ink-dim);
	}

	/* --- centre lockup ----------------------------------------------------- */
	.center {
		align-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: clamp(1.4rem, 4vh, 2.4rem);
	}

	.wordmark {
		margin: 0;
		font-weight: 400;
		line-height: 0.96;
		letter-spacing: 0.16em;
		/* Indent compensates for the trailing tracking so it reads centred. */
		text-indent: 0.16em;
		font-size: clamp(2.6rem, 13vw, 9rem);
		text-transform: uppercase;
	}

	.wordmark span {
		display: block;
	}

	.line {
		margin: 0;
		color: var(--ink-dim);
		letter-spacing: 0.04em;
		font-size: clamp(0.95rem, 2.4vw, 1.25rem);
	}

	/* --- links ------------------------------------------------------------- */
	.register,
	.parent {
		text-decoration: none;
		color: var(--ink);
		padding-bottom: 0.35em;
		border-bottom: 1px solid var(--hairline);
		transition: border-color 180ms ease, color 180ms ease;
	}

	.register:hover,
	.parent:hover {
		border-bottom-color: var(--ink);
	}

	.parent {
		color: var(--ink-faint);
		border-bottom-color: transparent;
		letter-spacing: 0.28em;
	}

	.parent:hover {
		color: var(--ink-dim);
		border-bottom-color: transparent;
	}
</style>
