<script lang="ts">
	import { onMount } from 'svelte';

	// --- live state ----------------------------------------------------------
	let mx = $state(0);
	let my = $state(0);
	let alive = $state(false);

	// Wordmark + descriptor render their real text at prerender time (good for
	// SEO/OG), then "decrypt" from scrambled glyphs once JS takes over.
	const WORDMARK = 'MAISON SEUL';
	const DESC = 'ARCHIVAL FASHION HOUSE';
	let wordmark = $state(WORDMARK);
	let desc = $state(DESC);

	// Countdown — placeholder target ("Coming 2027"), trivially changed.
	const TARGET = new Date('2027-01-01T00:00:00Z').getTime();
	let days = $state('000');
	let hrs = $state('00');
	let mins = $state('00');
	let secs = $state('00');

	const pad = (n: number, w = 2) => Math.max(0, n).toString().padStart(w, '0');
	function tick() {
		const s = Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
		days = pad(Math.floor(s / 86400), 3);
		hrs = pad(Math.floor((s % 86400) / 3600));
		mins = pad(Math.floor((s % 3600) / 60));
		secs = pad(s % 60);
	}

	// --- decrypt / scramble --------------------------------------------------
	const GLYPHS = '▚▞#%&/\\<>[]{}=±0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	function scramble(target: string, set: (s: string) => void, duration = 1200) {
		const start = performance.now();
		const n = target.length;
		let raf = 0;
		const frame = (now: number) => {
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

	// --- particles (drifting dust) ------------------------------------------
	let canvas: HTMLCanvasElement;
	function startDust() {
		const ctx = canvas.getContext('2d');
		if (!ctx) return () => {};
		let raf = 0;
		let w = 0;
		let h = 0;
		let dpr = 1;
		type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; tw: number };
		let ps: P[] = [];

		const seed = () => {
			dpr = Math.min(2, window.devicePixelRatio || 1);
			w = canvas.width = Math.floor(window.innerWidth * dpr);
			h = canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = window.innerWidth + 'px';
			canvas.style.height = window.innerHeight + 'px';
			const count = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 26000));
			ps = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				r: (Math.random() * 1.3 + 0.3) * dpr,
				vx: (Math.random() - 0.5) * 0.12 * dpr,
				vy: -(Math.random() * 0.18 + 0.04) * dpr,
				a: Math.random() * 0.4 + 0.1,
				tw: Math.random() * Math.PI * 2
			}));
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			for (const p of ps) {
				p.x += p.vx;
				p.y += p.vy;
				p.tw += 0.02;
				if (p.y < -4) p.y = h + 4;
				if (p.x < -4) p.x = w + 4;
				if (p.x > w + 4) p.x = -4;
				const a = p.a * (0.6 + 0.4 * Math.sin(p.tw));
				ctx.beginPath();
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
				ctx.fillStyle = `rgba(208, 216, 226, ${a})`;
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
			'%c⌖ MAISON SEUL',
			'color:#e9eaec;font:300 14px ui-monospace,monospace;letter-spacing:4px'
		);
		console.log(
			'%cthose who look closely arrive first.  ·  MMXXVII',
			'color:#5d6470;font:12px ui-monospace,monospace'
		);

		tick();
		const id = setInterval(tick, 1000);
		alive = true;

		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const fine = window.matchMedia('(pointer: fine)').matches;

		const cleanups: Array<() => void> = [() => clearInterval(id)];

		if (!still) {
			cleanups.push(startDust());
			const t1 = setTimeout(() => cleanups.push(scramble(WORDMARK, (s) => (wordmark = s), 1300)), 280);
			const t2 = setTimeout(() => cleanups.push(scramble(DESC, (s) => (desc = s), 1100)), 700);
			cleanups.push(() => {
				clearTimeout(t1);
				clearTimeout(t2);
			});
		}

		if (fine && !still) {
			const onMove = (e: PointerEvent) => {
				mx = (e.clientX / window.innerWidth - 0.5) * 2;
				my = (e.clientY / window.innerHeight - 0.5) * 2;
			};
			window.addEventListener('pointermove', onMove, { passive: true });
			cleanups.push(() => window.removeEventListener('pointermove', onMove));
		}

		return () => cleanups.forEach((fn) => fn());
	});
</script>

<!-- Atmosphere: cold mist, drifting dust, scanlines -->
<div class="atmos" aria-hidden="true">
	<div class="field" style="transform: translate3d({mx * 16}px, {my * 16}px, 0)">
		<span class="fog fog-a"></span>
		<span class="fog fog-b"></span>
		<span class="fog fog-c"></span>
	</div>
	<div class="horizon"></div>
	<canvas bind:this={canvas} class="dust"></canvas>
	<div class="grain"></div>
	<div class="vignette"></div>
	<div class="scan"></div>
	<div class="beam"></div>
</div>

<!-- HUD frame -->
<div class="hud" class:ready={alive} aria-hidden="true">
	<span class="bracket tl"></span>
	<span class="bracket tr"></span>
	<span class="bracket bl"></span>
	<span class="bracket br"></span>
	<span class="tag tag-tl">Maison&nbsp;Seul<sup>®</sup></span>
	<span class="tag tag-tr">53.3498°&nbsp;N&nbsp;&nbsp;6.2603°&nbsp;W</span>
	<span class="tag tag-bl">A&nbsp;VNTA&nbsp;company</span>
	<span class="tag tag-br">Status&nbsp;—&nbsp;Dormant</span>
</div>

<main class:ready={alive} style="transform: translate3d({mx * -7}px, {my * -7}px, 0)">
	<section class="lockup">
		<h1 style="--i: 1"><span class="glyphs">{wordmark}</span><sup>®</sup></h1>
		<p class="desc" style="--i: 2"><span class="glyphs">{desc}</span></p>
	</section>

	<div class="foot">
		<div class="count" style="--i: 3" aria-label="Countdown to launch">
			<span><b>{days}</b><i>Days</i></span>
			<span class="sep">:</span>
			<span><b>{hrs}</b><i>Hrs</i></span>
			<span class="sep">:</span>
			<span><b>{mins}</b><i>Min</i></span>
			<span class="sep">:</span>
			<span><b>{secs}</b><i>Sec</i></span>
		</div>
		<p class="stamp" style="--i: 4">Coming MMXXVII</p>
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
		transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.fog {
		position: absolute;
		display: block;
		border-radius: 50%;
		filter: blur(40px);
		mix-blend-mode: screen;
		opacity: 0;
	}
	.fog-a {
		width: 70vw;
		height: 70vw;
		top: 2%;
		left: 6%;
		background: radial-gradient(closest-side, rgba(150, 172, 198, 0.16), transparent 70%);
		animation: fade-in 3.5s ease forwards, drift-a 56s ease-in-out infinite alternate;
	}
	.fog-b {
		width: 60vw;
		height: 60vw;
		bottom: 0;
		right: 4%;
		background: radial-gradient(closest-side, rgba(112, 134, 166, 0.14), transparent 70%);
		animation: fade-in 4s ease forwards, drift-b 74s ease-in-out infinite alternate;
	}
	.fog-c {
		width: 85vw;
		height: 55vw;
		top: 30%;
		left: 18%;
		background: radial-gradient(closest-side, rgba(86, 104, 132, 0.1), transparent 72%);
		animation: fade-in 5s ease forwards, drift-c 92s ease-in-out infinite alternate;
	}
	.horizon {
		position: absolute;
		left: -10%;
		right: -10%;
		bottom: -30%;
		height: 60%;
		background: radial-gradient(60% 100% at 50% 100%, rgba(140, 162, 190, 0.12), transparent 70%);
		filter: blur(30px);
	}
	.dust {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		animation: fade-in 4s ease 0.4s forwards;
	}
	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(125% 115% at 50% 42%, transparent 36%, rgba(0, 0, 0, 0.82));
	}
	.grain {
		position: absolute;
		inset: -50%;
		opacity: 0.05;
		mix-blend-mode: overlay;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		animation: grain 6s steps(4) infinite;
	}
	.scan {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0.5;
		background: repeating-linear-gradient(
			to bottom,
			rgba(233, 234, 236, 0.025) 0 1px,
			transparent 1px 3px
		);
		mix-blend-mode: overlay;
	}
	.beam {
		position: absolute;
		left: 0;
		right: 0;
		height: 38vh;
		top: -40vh;
		background: linear-gradient(to bottom, transparent, rgba(150, 172, 198, 0.05), transparent);
		animation: sweep 9s linear infinite;
	}

	@keyframes drift-a {
		to {
			transform: translate3d(6%, 4%, 0) scale(1.12);
		}
	}
	@keyframes drift-b {
		to {
			transform: translate3d(-7%, -5%, 0) scale(1.15);
		}
	}
	@keyframes drift-c {
		to {
			transform: translate3d(4%, -6%, 0) scale(1.08);
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
	@keyframes sweep {
		to {
			transform: translateY(180vh);
		}
	}

	/* ====================== HUD ====================== */
	.hud {
		position: fixed;
		inset: clamp(1rem, 2.6vw, 1.9rem);
		z-index: 1;
		pointer-events: none;
		opacity: 0;
		transition: opacity 2s ease 0.6s;
	}
	.hud.ready {
		opacity: 1;
	}
	.bracket {
		position: absolute;
		width: 16px;
		height: 16px;
		border: 0 solid var(--hairline);
	}
	.tl {
		top: 0;
		left: 0;
		border-top-width: 1px;
		border-left-width: 1px;
	}
	.tr {
		top: 0;
		right: 0;
		border-top-width: 1px;
		border-right-width: 1px;
	}
	.bl {
		bottom: 0;
		left: 0;
		border-bottom-width: 1px;
		border-left-width: 1px;
	}
	.br {
		bottom: 0;
		right: 0;
		border-bottom-width: 1px;
		border-right-width: 1px;
	}
	.tag {
		position: absolute;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.24em;
		font-size: 0.54rem;
		color: var(--ink-faint);
		white-space: nowrap;
	}
	.tag sup {
		font-size: 0.7em;
		letter-spacing: 0;
	}
	.tag-tl {
		top: 0.1rem;
		left: 1.4rem;
	}
	.tag-tr {
		top: 0.1rem;
		right: 1.4rem;
	}
	.tag-bl {
		bottom: 0.1rem;
		left: 1.4rem;
	}
	.tag-br {
		bottom: 0.1rem;
		right: 1.4rem;
	}

	/* ====================== LOCKUP ====================== */
	main {
		position: relative;
		min-height: 100svh;
		display: grid;
		grid-template-rows: 1fr auto;
		align-items: center;
		justify-items: center;
		text-align: center;
		padding: clamp(3.5rem, 10vh, 6rem) 1.5rem;
		gap: clamp(2.5rem, 8vh, 5rem);
		will-change: transform;
		transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.lockup {
		align-self: end;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1.1rem, 3vh, 1.8rem);
	}
	.foot {
		align-self: end;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1.4rem, 3.4vh, 2rem);
	}

	h1,
	.desc,
	.count,
	.stamp {
		opacity: 0;
		transform: translateY(14px);
		filter: blur(8px);
	}
	main.ready h1,
	main.ready .desc,
	main.ready .count,
	main.ready .stamp {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
		transition:
			opacity 1.5s ease,
			transform 1.5s cubic-bezier(0.16, 1, 0.3, 1),
			filter 1.5s ease;
		transition-delay: calc(var(--i) * 280ms);
	}

	h1 {
		margin: 0;
		font-family: var(--sans);
		font-weight: 200;
		text-transform: uppercase;
		letter-spacing: 0.42em;
		text-indent: 0.42em;
		font-size: clamp(1.4rem, 5.4vw, 3rem);
		line-height: 1;
		color: var(--ink);
	}
	/* keep the decrypting wordmark from reflowing as glyphs change width */
	.glyphs {
		display: inline-block;
		font-variant-numeric: tabular-nums;
		white-space: pre;
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

	.count {
		display: flex;
		align-items: baseline;
		gap: clamp(0.5rem, 1.6vw, 0.9rem);
		font-family: var(--mono);
	}
	.count span {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5em;
	}
	.count b {
		font-weight: 400;
		font-size: clamp(0.95rem, 3vw, 1.5rem);
		letter-spacing: 0.08em;
		font-variant-numeric: tabular-nums;
		color: var(--ink-dim);
	}
	.count i {
		font-style: normal;
		font-size: 0.46rem;
		letter-spacing: 0.28em;
		text-indent: 0.28em;
		text-transform: uppercase;
		color: var(--ink-faint);
	}
	.count .sep {
		flex-direction: row;
		font-size: clamp(0.95rem, 3vw, 1.5rem);
		color: var(--ink-faint);
		transform: translateY(-0.35em);
		animation: blink 2s steps(1) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0.25;
		}
	}
	.stamp {
		margin: 0;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.3em;
		text-indent: 0.3em;
		font-size: clamp(0.56rem, 1.7vw, 0.66rem);
		color: var(--ink-faint);
	}

	@media (max-width: 540px) {
		.tag-tr,
		.tag-br {
			display: none;
		}
	}

	/* ====================== REDUCED MOTION ====================== */
	@media (prefers-reduced-motion: reduce) {
		.fog,
		.grain,
		.beam,
		.dust,
		.count .sep {
			animation: none;
		}
		.fog {
			opacity: 1;
		}
		.dust {
			opacity: 0;
		}
		.field,
		main {
			transition: none;
			transform: none !important;
		}
		h1,
		.desc,
		.count,
		.stamp {
			opacity: 1;
			transform: none;
			filter: none;
		}
	}
</style>
