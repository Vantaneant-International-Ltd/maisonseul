<script lang="ts">
	// Teaser for MA (間), the permanent denim collection. Three styles, drawn as
	// outlines until samples exist. Not an edition: no numbers, no end date.
	// The kanji uses Noto Sans JP (SIL Open Font License, static/fonts). Only the
	// small slice of the font that holds 間 is shipped, limited to that character.

	const cuts = [
		{
			name: 'Loose',
			line: 'Straight from hip to hem, with room all the way down.',
			path: 'M50 32 L46 380 L96 380 L100 122 L104 380 L154 380 L150 32 Z'
		},
		{
			name: 'Baggy',
			line: 'Low and wide. The hem breaks over the shoe.',
			path: 'M48 32 L28 380 L96 380 L100 128 L104 380 L172 380 L152 32 Z'
		},
		{
			name: 'Barrel',
			line: 'Curved out through the knee, drawn back in at the hem.',
			path: 'M50 32 C24 150 24 270 54 380 L94 380 C98 300 100 210 100 126 C100 210 102 300 106 380 L146 380 C176 270 176 150 150 32 Z'
		}
	];
	const notify =
		'mailto:studio@maisonseul.com?subject=' + encodeURIComponent('MA / Tell me first');
</script>

<svelte:head>
	<title>MA 間 / Maison Seul</title>
	<meta name="description" content="MA. Denim in three styles: Loose, Baggy, Barrel. Permanent, not limited. Coming from Maison Seul." />
</svelte:head>

<main class="perm">
	<section class="head">
		<p class="kicker">Permanent collection</p>
		<h1><span class="kanji" lang="ja">間</span><span class="latin">MA</span></h1>
		<p class="lead">
			Denim in three styles: Loose, Baggy and Barrel. Ma is the Japanese word for the space
			between things. Here it is the space between the cloth and you.
		</p>
		<p class="lead second">
			Nineties Tokyo proportions, redrawn with the lines of a building. Not an edition. Made
			continuously, and always there.
		</p>
	</section>

	<ul class="cuts" aria-label="The three styles">
		{#each cuts as c}
			<li>
				<div class="draw">
					<svg viewBox="0 0 200 400" role="img" aria-label="MA {c.name}, outline">
						<rect x="48" y="18" width="104" height="14" fill="none" stroke="#f2f3f1" stroke-width="1.5" />
						<path d={c.path} fill="none" stroke="#f2f3f1" stroke-width="1.5" stroke-linejoin="round" />
						<line x1="100" y1="32" x2="100" y2="92" stroke="#a9aeb1" stroke-width="1" />
					</svg>
				</div>
				<p class="no"><span class="kanji" lang="ja">間</span> MA</p>
				<h2>{c.name}</h2>
				<p class="line">{c.line}</p>
			</li>
		{/each}
	</ul>

	<section class="foot">
		<dl>
			<div><dt>Status</dt><dd>In development</dd></div>
			<div><dt>Arrives</dt><dd>[Season] 2027</dd></div>
			<div><dt>Edition</dt><dd>None. Permanent.</dd></div>
		</dl>
		<a class="cta" href={notify}>Tell me first</a>
	</section>
</main>

<style>
	@font-face {
		font-family: 'Noto Sans JP MA';
		src: url('/fonts/noto-sans-jp-200-ma.woff2') format('woff2');
		font-weight: 200;
		font-display: swap;
		unicode-range: U+9593;
	}
	@font-face {
		font-family: 'Noto Sans JP MA';
		src: url('/fonts/noto-sans-jp-300-ma.woff2') format('woff2');
		font-weight: 300;
		font-display: swap;
		unicode-range: U+9593;
	}
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
		font-weight: 200;
		font-size: clamp(4rem, 12vw, 9rem);
		line-height: 1;
	}
	.kanji {
		font-family: 'Noto Sans JP MA', var(--sans);
		font-weight: 200;
	}
	h1 .latin {
		font-size: 0.42em;
		letter-spacing: 0.08em;
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
		font-weight: 300;
		font-size: 1.5rem;
		text-transform: uppercase;
	}
	.line {
		margin: 0.4rem 0 0;
		color: var(--ink-dim);
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

	@media (max-width: 760px) {
		.cuts {
			grid-template-columns: 1fr;
		}
		.cta {
			width: 100%;
		}
	}
</style>
