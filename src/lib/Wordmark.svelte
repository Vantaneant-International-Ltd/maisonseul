<script lang="ts">
	import { onMount } from 'svelte';

	// MAISON stays sharp. SEUL is always out of focus.
	// `split` puts the gap between the two words on the exact centre of its
	// container. `live` makes SEUL dissolve further as the pointer approaches:
	// the closer you look, the less there is to see.
	let { split = false, live = false }: { split?: boolean; live?: boolean } = $props();

	let seul: HTMLSpanElement | undefined = $state();
	let near = $state(0);

	onMount(() => {
		if (!live) return;
		const fine = window.matchMedia('(pointer: fine)').matches;
		const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (!fine || still) return;

		let raf = 0;
		const onMove = (e: PointerEvent) => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(() => {
				if (!seul) return;
				const r = seul.getBoundingClientRect();
				const d = Math.hypot(
					e.clientX - (r.left + r.width / 2),
					e.clientY - (r.top + r.height / 2)
				);
				const reach = Math.min(window.innerWidth, window.innerHeight) * 0.6;
				near = Math.max(0, 1 - d / reach);
			});
		};
		window.addEventListener('pointermove', onMove, { passive: true });
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('pointermove', onMove);
		};
	});
</script>

<span class="wm" class:split
	><span class="maison">MAISON</span><span class="seul" bind:this={seul} style="--near: {near}"
		>SEUL</span
	></span
>

<style>
	.wm {
		display: inline-flex;
		align-items: baseline;
		gap: 0.14em;
		font-family: var(--sans);
		font-synthesis: none;
		letter-spacing: -0.01em;
		line-height: 1;
		color: var(--ink);
		white-space: nowrap;
	}
	.wm.split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 0.5em;
		width: 100%;
	}
	.wm.split .maison {
		justify-self: end;
	}
	.wm.split .seul {
		justify-self: start;
	}
	.maison {
		font-weight: 400;
	}
	.seul {
		font-weight: 700;
		opacity: 0.82;
		filter: blur(calc((0.053 + var(--near, 0) * 0.14) * 1em));
		transition: filter 600ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	@media (prefers-reduced-motion: reduce) {
		.seul {
			transition: none;
		}
	}
</style>
