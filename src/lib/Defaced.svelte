<script lang="ts">
	// A heading cut by the house line, as in the brand book: what is left of the
	// line stays sharp, what is past it dissolves and splits like light through
	// glass. The clean text is read once; the dissolved copy is decoration.
	let { text, id }: { text: string; id?: string } = $props();
</script>

<h1 class="defaced" {id}>
	<span class="clean">{text}</span>
	<span class="melt" aria-hidden="true">{text}</span>
	<svg class="line" aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
		<line class="l-wide" x1="78" y1="-20" x2="64" y2="120" vector-effect="non-scaling-stroke" />
		<line class="l-narrow" x1="62" y1="-20" x2="46" y2="120" vector-effect="non-scaling-stroke" />
	</svg>
</h1>

<style>
	.defaced {
		position: relative;
		width: fit-content;
		max-width: 100%;
	}
	/* The cut runs from 76% at the top to 66% at the bottom of the heading. */
	.clean {
		display: block;
		clip-path: polygon(-5% -20%, 76% -20%, 66% 120%, -5% 120%);
	}
	.melt {
		clip-path: polygon(76% -20%, 120% -20%, 120% 120%, 66% 120%);
	}
	.melt {
		position: absolute;
		inset: 0;
		display: block;
		color: var(--ink);
		filter: blur(1.6px);
		opacity: 0.8;
		transform: translate(0.12em, 0.04em) skewX(-6deg);
		text-shadow:
			-0.05em 0 rgba(255, 90, 90, 0.45),
			0.05em 0 rgba(90, 210, 255, 0.45),
			0 0 0.3em rgba(242, 243, 241, 0.25);
		pointer-events: none;
	}
	.line {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: visible;
		pointer-events: none;
	}
	.l-narrow {
		display: none;
	}
	/* On a phone the heading wraps short, so the cut moves left to stay on the words. */
	@media (max-width: 600px) {
		.clean {
			clip-path: polygon(-5% -20%, 59% -20%, 48% 120%, -5% 120%);
		}
		.melt {
			clip-path: polygon(59% -20%, 120% -20%, 120% 120%, 48% 120%);
		}
		.l-wide {
			display: none;
		}
		.l-narrow {
			display: inline;
		}
	}
	.line line {
		stroke: var(--hairline);
		stroke-width: 1;
	}
	@media (prefers-reduced-motion: no-preference) {
		.melt {
			animation: settle 2200ms ease 200ms both;
		}
	}
	@keyframes settle {
		from {
			filter: blur(0);
			opacity: 1;
			transform: none;
			text-shadow: none;
		}
	}
</style>
