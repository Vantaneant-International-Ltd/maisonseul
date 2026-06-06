<script lang="ts">
	import { onMount } from 'svelte';

	// --- live state ----------------------------------------------------------
	let mx = $state(0);
	let my = $state(0);
	let alive = $state(false);

	const WORDMARK = 'MAISON SEUL';
	const DESC = 'HOUSE OF ABSENCE';
	let wordmark = $state(WORDMARK);
	let desc = $state(DESC);

	// The houses. Dublin is the only named home; the others stay unnamed and only
	// flicker glimpses of cities — present, but unannounced.
	const REDACT = '██████';
	let city2 = $state(REDACT);
	let city3 = $state(REDACT);
	const POOL = ['SEOUL', 'TOKYO', 'MILAN', 'LONDON', 'NEW YORK', 'SHANGHAI', 'BERLIN', 'ANTWERP'];

	// No countdown — the drop date is intentionally unset (a teaser precedes any
	// sale, likely late 2027). A quiet "Coming · MMXXVII" is honest; swap in a
	// real countdown here once a date is locked.

	// --- decrypt / scramble --------------------------------------------------
	const GLYPHS = '▚▞#%&/\\<>[]{}=±0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let mounted = true;
	function scramble(target: string, set: (s: string) => void, duration = 1200) {
		const start = performance.now();
		const n = target.length;
		let raf = 0;
		const frame = (now: number) => {
			if (!mounted) return;
			const t = Math.min(1, (now - start) / duration);
			let out = '';
			for (let i = 0; i < n; i++) {
				const ch = target[i];
				if (ch === ' ') {
					out += ' ';
					continue;
				}
				const reveal = (i / n) * 0.6;
				out += t >= reveal + 0.4 ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
			}
			set(out);
			if (t < 1) raf = requestAnimationFrame(frame);
			else set(target);
		};
		raf = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(raf);
	}

	// --- snow — quiet, cold, cinematic --------------------------------------
	let canvas: HTMLCanvasElement;
	function startSnow() {
		const ctx = canvas.getContext('2d');
		if (!ctx) return () => {};
		let raf = 0;
		let w = 0;
		let h = 0;
		let dpr = 1;
		type P = { x: number; y: number; r: number; vy: number; drift: number; tw: number; a: number };
		let ps: P[] = [];
		const seed = () => {
			dpr = Math.min(2, window.devicePixelRatio || 1);
			w = canvas.width = Math.floor(window.innerWidth * dpr);
			h = canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = window.innerWidth + 'px';
			canvas.style.height = window.innerHeight + 'px';
			const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 22000));
			ps = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				r: (Math.random() * 1.2 + 0.3) * dpr,
				vy: (Math.random() * 0.32 + 0.12) * dpr,
				drift: (Math.random() * 0.4 + 0.15) * dpr,
				tw: Math.random() * Math.PI * 2,
				a: Math.random() * 0.4 + 0.14
			}));
		};
		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			for (const p of ps) {
				p.tw += 0.01;
				p.y += p.vy;
				p.x += Math.sin(p.tw) * p.drift;
				if (p.y > h + 4) {
					p.y = -4;
					p.x = Math.random() * w;
				}
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(233, 224, 210, ${p.a})`;
				ctx.fill();
			}
			raf = requestAnimationFrame(draw);
		};
		seed();
		draw();
		window.addEventListener('resize', seed);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', seed);
		};
	}

	onMount(() => {
		console.log(
			'%cMAISON SEUL®',
			'color:#e9eaec;font:300 14px ui-monospace,monospace;letter-spacing:6px'
		);
		console.log(
			'%chouse of absence.  one house in each city.  dublin · mmxxvii',
			'color:#5d6470;font:12px ui-monospace,monospace'
		);

		alive = true;

		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const fine = window.matchMedia('(pointer: fine)').matches;
		const cleanups: Array<() => void> = [];
		const timeouts: ReturnType<typeof setTimeout>[] = [];

		if (!still) {
			cleanups.push(startSnow());
			timeouts.push(setTimeout(() => scramble(WORDMARK, (s) => (wordmark = s), 1300), 280));
			timeouts.push(setTimeout(() => scramble(DESC, (s) => (desc = s), 1100), 760));

			const setters = [(s: string) => (city2 = s), (s: string) => (city3 = s)];
			let turn = 0;
			const glimpseId = setInterval(() => {
				const set = setters[turn % setters.length];
				turn++;
				const city = POOL[Math.floor(Math.random() * POOL.length)];
				scramble(city, set, 700);
				timeouts.push(setTimeout(() => scramble(REDACT, set, 700), 2200));
			}, 4200);
			cleanups.push(() => clearInterval(glimpseId));
		}

		if (fine && !still) {
			const onMove = (e: PointerEvent) => {
				mx = (e.clientX / window.innerWidth - 0.5) * 2;
				my = (e.clientY / window.innerHeight - 0.5) * 2;
			};
			window.addEventListener('pointermove', onMove, { passive: true });
			cleanups.push(() => window.removeEventListener('pointermove', onMove));
		}

		return () => {
			mounted = false;
			timeouts.forEach(clearTimeout);
			cleanups.forEach((fn) => fn());
		};
	});
</script>

<!-- Atmosphere: a cold, quiet void -->
<div class="atmos" aria-hidden="true">
	<div class="field" style="transform: translate3d({mx * 12}px, {my * 12}px, 0)">
		<span class="fog fog-a"></span>
		<span class="fog fog-b"></span>
		<span class="fog fog-c"></span>
	</div>
	<canvas bind:this={canvas} class="snow"></canvas>
	<div class="grain"></div>
	<div class="vignette"></div>
</div>

<!-- Minimal chrome -->
<div class="chrome" class:ready={alive} aria-hidden="true">
	<span class="mark mark-l">Maison&nbsp;Seul<sup>®</sup></span>
	<span class="mark mark-r">Dublin · Éire</span>
	<span class="mark foot-l">A&nbsp;VNTA&nbsp;company</span>
	<span class="mark foot-r">Est. MMXXVII</span>
</div>

<main class:ready={alive} style="transform: translate3d({mx * -5}px, {my * -5}px, 0)">
	<div class="stage">
		<section class="lockup">
			<h1 style="--i: 1"><span class="glyphs">{wordmark}</span><sup>®</sup></h1>
			<p class="desc" style="--i: 2"><span class="glyphs">{desc}</span></p>
		</section>

		<section class="houses" style="--i: 3">
			<div class="houses-head"><span class="hr"></span>One house · each city<span class="hr"></span></div>
			<div class="rows">
				<div class="row home">
					<span class="city">Dublin</span>
					<span class="loc">53.35° N · 6.26° W</span>
					<span class="st">2027</span>
				</div>
				<div class="row coming">
					<span class="city glyphs">{city2}</span>
					<span class="loc">—</span>
					<span class="st">Soon</span>
				</div>
				<div class="row coming">
					<span class="city glyphs">{city3}</span>
					<span class="loc">—</span>
					<span class="st">Soon</span>
				</div>
			</div>
		</section>
	</div>

	<div class="foot">
		<p class="stamp" style="--i: 4">Coming · MMXXVII</p>
	</div>
</main>

<style>
	/* ====================== ATMOSPHERE ====================== */
	.atmos {
		position: fixed;
		inset: 0;
		z-index: -1;
		overflow: hidden;
		background: var(--void);
	}
	.field {
		position: absolute;
		inset: -25%;
		will-change: transform;
		transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.fog {
		position: absolute;
		display: block;
		border-radius: 50%;
		filter: blur(44px);
		mix-blend-mode: screen;
		opacity: 0;
	}
	.fog-a {
		width: 72vw;
		height: 72vw;
		top: 0;
		left: 6%;
		/* warm amber/umber bloom */
		background: radial-gradient(closest-side, rgba(176, 122, 74, 0.15), transparent 70%);
		animation: fade-in 4s ease forwards, drift-a 62s ease-in-out infinite alternate;
	}
	.fog-b {
		width: 60vw;
		height: 60vw;
		bottom: 0;
		right: 4%;
		/* muted umber-navy bloom */
		background: radial-gradient(closest-side, rgba(78, 90, 116, 0.13), transparent 70%);
		animation: fade-in 4.5s ease forwards, drift-b 80s ease-in-out infinite alternate;
	}
	.fog-c {
		width: 88vw;
		height: 56vw;
		top: 32%;
		left: 16%;
		/* deep raw umber */
		background: radial-gradient(closest-side, rgba(120, 82, 50, 0.1), transparent 72%);
		animation: fade-in 5.5s ease forwards, drift-c 96s ease-in-out infinite alternate;
	}
	.snow {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		animation: fade-in 3.5s ease 0.4s forwards;
	}
	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(125% 118% at 50% 44%, transparent 38%, rgba(0, 0, 0, 0.86));
	}
	.grain {
		position: absolute;
		inset: -50%;
		opacity: 0.045;
		mix-blend-mode: overlay;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		animation: grain 7s steps(4) infinite;
	}
	@keyframes drift-a {
		to {
			transform: translate3d(5%, 3%, 0) scale(1.1);
		}
	}
	@keyframes drift-b {
		to {
			transform: translate3d(-6%, -4%, 0) scale(1.12);
		}
	}
	@keyframes drift-c {
		to {
			transform: translate3d(3%, -5%, 0) scale(1.07);
		}
	}
	@keyframes fade-in {
		to {
			opacity: 1;
		}
	}
	@keyframes grain {
		0% {
			transform: translate3d(0, 0, 0);
		}
		25% {
			transform: translate3d(-4%, 3%, 0);
		}
		50% {
			transform: translate3d(3%, -5%, 0);
		}
		75% {
			transform: translate3d(-3%, 4%, 0);
		}
		100% {
			transform: translate3d(4%, -3%, 0);
		}
	}

	/* ====================== MINIMAL CHROME ====================== */
	.chrome {
		position: fixed;
		inset: clamp(1.1rem, 2.8vw, 2rem);
		z-index: 1;
		pointer-events: none;
		opacity: 0;
		transition: opacity 2s ease 0.7s;
	}
	.chrome.ready {
		opacity: 1;
	}
	.mark {
		position: absolute;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.26em;
		font-size: 0.53rem;
		color: var(--ink-faint);
		white-space: nowrap;
	}
	.mark sup {
		font-size: 0.7em;
		letter-spacing: 0;
	}
	.mark-l {
		top: 0;
		left: 0;
	}
	.mark-r {
		top: 0;
		right: 0;
	}
	.foot-l {
		bottom: 0;
		left: 0;
	}
	.foot-r {
		bottom: 0;
		right: 0;
	}

	/* ====================== LAYOUT ====================== */
	main {
		position: relative;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		padding: clamp(3.4rem, 10vh, 6rem) 1.5rem;
		will-change: transform;
		transition: transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.stage {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(2.6rem, 7vh, 4.4rem);
		text-align: center;
	}
	.lockup {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1.1rem, 3vh, 1.7rem);
	}
	.foot {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1,
	.desc,
	.houses,
	.stamp {
		opacity: 0;
		transform: translateY(15px);
		filter: blur(9px);
	}
	main.ready h1,
	main.ready .desc,
	main.ready .houses,
	main.ready .stamp {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
		transition:
			opacity 1.5s ease,
			transform 1.5s cubic-bezier(0.16, 1, 0.3, 1),
			filter 1.5s ease;
		transition-delay: calc(var(--i) * 260ms);
	}

	h1 {
		margin: 0;
		font-family: var(--sans);
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 0.4em;
		text-indent: 0.4em;
		font-size: clamp(1.7rem, 6.4vw, 3.6rem);
		line-height: 1;
		color: var(--ink);
	}
	.glyphs {
		display: inline-block;
		font-variant-numeric: tabular-nums;
		white-space: pre;
	}
	h1 sup {
		font-size: 0.28em;
		font-weight: 300;
		top: -1.6em;
		letter-spacing: 0;
		color: var(--ink-faint);
	}
	.desc {
		margin: 0;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.4em;
		text-indent: 0.4em;
		font-size: clamp(0.56rem, 1.7vw, 0.72rem);
		color: var(--ink-dim);
	}

	/* ====================== HOUSES ====================== */
	.houses {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(0.9rem, 2.2vh, 1.3rem);
	}
	.houses-head {
		display: flex;
		align-items: center;
		gap: 1em;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.32em;
		text-indent: 0.32em;
		font-size: 0.5rem;
		color: var(--ink-faint);
	}
	.houses-head .hr {
		width: clamp(1.6rem, 6vw, 3.2rem);
		height: 1px;
		background: var(--hairline);
	}
	.rows {
		display: flex;
		flex-direction: column;
		width: min(90vw, 27rem);
	}
	.row {
		display: grid;
		grid-template-columns: 1fr auto auto;
		align-items: baseline;
		gap: clamp(0.8rem, 3vw, 1.6rem);
		padding: 0.72em 0.1em;
		font-family: var(--mono);
		text-align: left;
	}
	.row + .row {
		border-top: 1px solid var(--hairline);
	}
	.city {
		text-transform: uppercase;
		letter-spacing: 0.22em;
		font-size: 0.66rem;
		white-space: pre;
	}
	.row.home .city {
		color: var(--ink);
	}
	.row.coming .city {
		color: var(--ink-faint);
	}
	.loc {
		justify-self: end;
		font-size: 0.5rem;
		letter-spacing: 0.08em;
		color: var(--ink-faint);
	}
	.st {
		justify-self: end;
		min-width: 3.2em;
		text-align: right;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-size: 0.5rem;
		color: var(--ink-faint);
	}
	.row.home .st {
		color: var(--ink-dim);
	}

	/* ====================== STAMP ====================== */
	.stamp {
		margin: 0;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.34em;
		text-indent: 0.34em;
		font-size: clamp(0.56rem, 1.7vw, 0.68rem);
		color: var(--ink-dim);
	}

	/* ====================== MOBILE / iPHONE ====================== */
	@media (max-width: 600px) {
		main {
			padding: clamp(2.6rem, 8vh, 4rem) 1.15rem;
		}
		.stage {
			gap: clamp(2rem, 6vh, 3rem);
		}
		.mark-r,
		.foot-r {
			display: none;
		}
		.chrome {
			inset: 1rem;
		}
		h1 {
			font-size: clamp(1.55rem, 9vw, 2.5rem);
			letter-spacing: 0.3em;
			text-indent: 0.3em;
		}
		.glyphs {
			white-space: pre-wrap;
		}
		.desc {
			letter-spacing: 0.34em;
			text-indent: 0.34em;
		}
		.rows {
			width: 92vw;
		}
		.stamp {
			letter-spacing: 0.3em;
			text-indent: 0.3em;
		}
	}
	@media (max-width: 360px) {
		h1 {
			letter-spacing: 0.22em;
			text-indent: 0.22em;
		}
		.loc {
			display: none;
		}
	}

	/* ====================== REDUCED MOTION ====================== */
	@media (prefers-reduced-motion: reduce) {
		.fog,
		.grain,
		.snow {
			animation: none;
		}
		.fog {
			opacity: 1;
		}
		.snow {
			opacity: 0;
		}
		.field,
		main {
			transition: none;
			transform: none !important;
		}
		h1,
		.desc,
		.houses,
		.stamp {
			opacity: 1;
			transform: none;
			filter: none;
		}
	}
</style>
