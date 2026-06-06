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

	// Deployment sites. Dublin is the only active station; the rest stay
	// classified and only flicker glimpses of cities before re-redacting.
	const REDACT = '██████';
	let city2 = $state(REDACT);
	let city3 = $state(REDACT);
	let city4 = $state(REDACT);
	const POOL = ['SEOUL', 'TOKYO', 'MILAN', 'LONDON', 'NEW YORK', 'SHANGHAI', 'BERLIN', 'ANTWERP'];

	// Mission countdown — placeholder target ("2027").
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

	// --- barcode (Agent-47 serial) — fixed pattern, deterministic ------------
	const PATTERN = [
		2, 1, 1, 3, 1, 2, 1, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 1, 1, 2, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2, 1, 2,
		1, 1, 2, 1, 3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 1, 2
	];
	const UNIT = 2;
	const bars: { x: number; w: number }[] = [];
	{
		let bx = 0;
		for (let i = 0; i < PATTERN.length; i++) {
			const w = PATTERN[i] * UNIT;
			if (i % 2 === 0) bars.push({ x: bx, w });
			bx += w;
		}
	}
	const barW = bars.reduce((m, b) => Math.max(m, b.x + b.w), 0);

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

	// --- snow (Max Payne) ----------------------------------------------------
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
			const count = Math.min(110, Math.floor((window.innerWidth * window.innerHeight) / 16000));
			ps = Array.from({ length: count }, () => ({
				x: Math.random() * w,
				y: Math.random() * h,
				r: (Math.random() * 1.4 + 0.4) * dpr,
				vy: (Math.random() * 0.4 + 0.18) * dpr,
				drift: (Math.random() * 0.5 + 0.2) * dpr,
				tw: Math.random() * Math.PI * 2,
				a: Math.random() * 0.5 + 0.2
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
				ctx.fillStyle = `rgba(226, 232, 238, ${p.a})`;
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
			'%c⌖ MAISON SEUL // CLASSIFIED',
			'color:#e9eaec;font:300 14px ui-monospace,monospace;letter-spacing:4px'
		);
		console.log(
			'%cdeployment pending.  station dublin active.  ·  MMXXVII',
			'color:#5d6470;font:12px ui-monospace,monospace'
		);

		tick();
		const id = setInterval(tick, 1000);
		alive = true;

		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const fine = window.matchMedia('(pointer: fine)').matches;
		const cleanups: Array<() => void> = [() => clearInterval(id)];
		const timeouts: ReturnType<typeof setTimeout>[] = [];

		if (!still) {
			cleanups.push(startSnow());
			timeouts.push(setTimeout(() => scramble(WORDMARK, (s) => (wordmark = s), 1300), 280));
			timeouts.push(setTimeout(() => scramble(DESC, (s) => (desc = s), 1100), 700));

			const setters = [(s: string) => (city2 = s), (s: string) => (city3 = s), (s: string) => (city4 = s)];
			let turn = 0;
			const glimpseId = setInterval(() => {
				const set = setters[turn % setters.length];
				turn++;
				const city = POOL[Math.floor(Math.random() * POOL.length)];
				scramble(city, set, 650);
				timeouts.push(setTimeout(() => scramble(REDACT, set, 650), 2000));
			}, 3400);
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

<!-- Atmosphere -->
<div class="atmos" aria-hidden="true">
	<div class="field" style="transform: translate3d({mx * 14}px, {my * 14}px, 0)">
		<span class="fog fog-a"></span>
		<span class="fog fog-b"></span>
		<span class="fog fog-c"></span>
	</div>
	<div class="horizon"></div>
	<canvas bind:this={canvas} class="snow"></canvas>
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
	<span class="tag tag-br">Eyes&nbsp;only</span>
</div>

<main class:ready={alive} style="transform: translate3d({mx * -6}px, {my * -6}px, 0)">
	<div class="stage">
		<section class="lockup">
			<p class="eyebrow" style="--i: 0"><span class="redact"></span>Classified<span class="redact"></span></p>
			<h1 style="--i: 1"><span class="glyphs">{wordmark}</span><sup>®</sup></h1>
			<p class="desc" style="--i: 2"><span class="glyphs">{desc}</span></p>
		</section>

		<section class="sites" style="--i: 3">
			<div class="net-head"><span class="hr"></span>Deployment sites<span class="hr"></span></div>
			<div class="rows">
				<div class="row active">
					<span class="ix">01</span>
					<span class="city">DUBLIN</span>
					<span class="loc">53.35° N · 6.26° W</span>
					<span class="st"><i class="dot live"></i>Active · HQ</span>
				</div>
				<div class="row dormant">
					<span class="ix">02</span>
					<span class="city glyphs">{city2}</span>
					<span class="loc">[ redacted ]</span>
					<span class="st"><i class="dot off"></i>Classified</span>
				</div>
				<div class="row dormant">
					<span class="ix">03</span>
					<span class="city glyphs">{city3}</span>
					<span class="loc">[ redacted ]</span>
					<span class="st"><i class="dot off"></i>Classified</span>
				</div>
				<div class="row dormant">
					<span class="ix">04</span>
					<span class="city glyphs">{city4}</span>
					<span class="loc">[ redacted ]</span>
					<span class="st"><i class="dot off"></i>Standby</span>
				</div>
			</div>
		</section>
	</div>

	<div class="foot">
		<div class="count" style="--i: 4" aria-label="Mission countdown">
			<span class="t">Deployment&nbsp;in</span>
			<b>{days}</b><span class="c">:</span><b>{hrs}</b><span class="c">:</span><b>{mins}</b><span
				class="c">:</span
			><b>{secs}</b>
		</div>

		<div class="serial" style="--i: 5">
			<svg class="barcode" viewBox="0 0 {barW} 30" width={barW} height="22" aria-hidden="true">
				{#each bars as b}
					<rect x={b.x} y="0" width={b.w} height="30" />
				{/each}
			</svg>
			<span class="code">MS·0047·ÉIRE · DUBLIN STATION · MMXXVII</span>
		</div>
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
		background: radial-gradient(closest-side, rgba(150, 172, 198, 0.15), transparent 70%);
		animation: fade-in 3.5s ease forwards, drift-a 56s ease-in-out infinite alternate;
	}
	.fog-b {
		width: 60vw;
		height: 60vw;
		bottom: 0;
		right: 4%;
		background: radial-gradient(closest-side, rgba(112, 134, 166, 0.13), transparent 70%);
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
		background: radial-gradient(60% 100% at 50% 100%, rgba(140, 162, 190, 0.1), transparent 70%);
		filter: blur(30px);
	}
	.snow {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		animation: fade-in 3s ease 0.3s forwards;
	}
	.vignette {
		position: absolute;
		inset: 0;
		background: radial-gradient(125% 115% at 50% 42%, transparent 34%, rgba(0, 0, 0, 0.84));
	}
	.grain {
		position: absolute;
		inset: -50%;
		opacity: 0.06;
		mix-blend-mode: overlay;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		animation: grain 6s steps(4) infinite;
	}
	.scan {
		position: absolute;
		inset: 0;
		pointer-events: none;
		opacity: 0.55;
		background: repeating-linear-gradient(
			to bottom,
			rgba(233, 234, 236, 0.028) 0 1px,
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

	/* ====================== LAYOUT ====================== */
	main {
		position: relative;
		min-height: 100svh;
		display: flex;
		flex-direction: column;
		padding: clamp(3.2rem, 9vh, 5.5rem) 1.5rem;
		will-change: transform;
		transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.stage {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(2.2rem, 6vh, 3.6rem);
		text-align: center;
	}
	.lockup {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1rem, 2.6vh, 1.5rem);
	}
	.foot {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(1.1rem, 2.6vh, 1.5rem);
	}

	.eyebrow,
	h1,
	.desc,
	.sites,
	.count,
	.serial {
		opacity: 0;
		transform: translateY(14px);
		filter: blur(8px);
	}
	main.ready .eyebrow,
	main.ready h1,
	main.ready .desc,
	main.ready .sites,
	main.ready .count,
	main.ready .serial {
		opacity: 1;
		transform: translateY(0);
		filter: blur(0);
		transition:
			opacity 1.4s ease,
			transform 1.4s cubic-bezier(0.16, 1, 0.3, 1),
			filter 1.4s ease;
		transition-delay: calc(var(--i) * 240ms);
	}

	/* classified eyebrow with redaction bars */
	.eyebrow {
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.7em;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.42em;
		text-indent: 0.42em;
		font-size: 0.5rem;
		color: var(--ink-dim);
	}
	.redact {
		width: 1.4rem;
		height: 0.62rem;
		background: var(--ink-faint);
	}

	h1 {
		margin: 0;
		font-family: var(--sans);
		font-weight: 300;
		text-transform: uppercase;
		letter-spacing: 0.42em;
		text-indent: 0.42em;
		font-size: clamp(1.5rem, 5.6vw, 3.2rem);
		line-height: 1;
		color: var(--ink);
	}
	.glyphs {
		display: inline-block;
		font-variant-numeric: tabular-nums;
		white-space: pre;
	}
	h1 sup {
		font-size: 0.3em;
		font-weight: 300;
		top: -1.5em;
		letter-spacing: 0;
		color: var(--ink-faint);
	}
	.desc {
		margin: 0;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.36em;
		text-indent: 0.36em;
		font-size: clamp(0.56rem, 1.7vw, 0.7rem);
		color: var(--ink-dim);
	}

	/* ====================== DEPLOYMENT SITES ====================== */
	.sites {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(0.8rem, 2vh, 1.2rem);
	}
	.net-head {
		display: flex;
		align-items: center;
		gap: 0.9em;
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.34em;
		text-indent: 0.34em;
		font-size: 0.5rem;
		color: var(--ink-faint);
	}
	.net-head .hr {
		width: clamp(1.5rem, 6vw, 3rem);
		height: 1px;
		background: var(--hairline);
	}
	.rows {
		display: flex;
		flex-direction: column;
		width: min(92vw, 31rem);
	}
	.row {
		display: grid;
		grid-template-columns: 1.8em 7em 1fr auto;
		align-items: center;
		gap: clamp(0.6rem, 2vw, 1.1rem);
		padding: 0.6em 0.2em;
		font-family: var(--mono);
		font-size: 0.6rem;
		text-align: left;
	}
	.row + .row {
		border-top: 1px solid var(--hairline);
	}
	.ix {
		color: var(--ink-faint);
		letter-spacing: 0.1em;
	}
	.city {
		letter-spacing: 0.18em;
		white-space: pre;
	}
	.row.active .city {
		color: var(--ink);
	}
	.row.dormant .city {
		color: var(--ink-faint);
	}
	.loc {
		font-size: 0.5rem;
		letter-spacing: 0.08em;
		color: var(--ink-faint);
	}
	.st {
		display: flex;
		align-items: center;
		gap: 0.6em;
		justify-self: end;
		font-size: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: var(--ink-faint);
	}
	.row.active .st {
		color: var(--signal);
	}
	.dot {
		width: 5px;
		height: 5px;
		border-radius: 50%;
	}
	.dot.live {
		background: var(--signal);
		box-shadow: 0 0 7px var(--signal);
		animation: pulse 1.8s ease-in-out infinite;
	}
	.dot.off {
		border: 1px solid var(--ink-faint);
	}
	@keyframes pulse {
		50% {
			opacity: 0.35;
		}
	}

	/* ====================== COUNTDOWN + SERIAL ====================== */
	.count {
		display: flex;
		align-items: center;
		gap: 0.5em;
		font-family: var(--mono);
		font-size: clamp(0.62rem, 1.9vw, 0.8rem);
		letter-spacing: 0.16em;
		color: var(--ink-dim);
		font-variant-numeric: tabular-nums;
	}
	.count .t {
		text-transform: uppercase;
		letter-spacing: 0.28em;
		font-size: 0.78em;
		color: var(--ink-faint);
		margin-right: 0.3em;
	}
	.count b {
		font-weight: 400;
	}
	.count .c {
		color: var(--signal);
		animation: blink 1.6s steps(1) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0.2;
		}
	}

	.serial {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.65rem;
	}
	.barcode {
		display: block;
		fill: var(--ink-dim);
		opacity: 0.7;
	}
	.code {
		font-family: var(--mono);
		text-transform: uppercase;
		letter-spacing: 0.26em;
		text-indent: 0.26em;
		font-size: 0.46rem;
		color: var(--ink-faint);
	}

	@media (max-width: 540px) {
		.tag-tr,
		.tag-br {
			display: none;
		}
		.row {
			grid-template-columns: 1.8em 1fr auto;
		}
		.loc {
			display: none;
		}
		.code {
			font-size: 0.42rem;
			letter-spacing: 0.18em;
		}
	}

	/* ====================== REDUCED MOTION ====================== */
	@media (prefers-reduced-motion: reduce) {
		.fog,
		.grain,
		.beam,
		.snow,
		.count .c,
		.dot.live {
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
		.eyebrow,
		h1,
		.desc,
		.sites,
		.count,
		.serial {
			opacity: 1;
			transform: none;
			filter: none;
		}
	}
</style>
