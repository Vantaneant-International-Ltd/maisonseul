<script lang="ts">
	import { under, type LineName } from '$lib/lines';

	// A line's name: native form on top, Latin name and meaning underneath.
	let { line, size = 'm' }: { line: LineName; size?: 's' | 'm' | 'l' } = $props();
</script>

<span class="stack {size}" translate="no">
	<span class="native" lang={line.script} dir={line.script === 'ar' ? 'rtl' : 'ltr'}>{line.mark}</span>
	<span class="under" dir="ltr">{under(line)}</span>
</span>

<style>
	.stack {
		display: inline-flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.35em;
		line-height: 1;
	}
	.native {
		font-family: var(--kanji);
		font-weight: 400;
		color: var(--ink);
	}
	.under {
		font-family: var(--mono);
		font-size: 0.2em;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	.s .native {
		font-size: 1.25rem;
	}
	.s .under {
		font-size: 0.6875rem;
	}
	.m .native {
		font-size: 1.75rem;
	}
	.m .under {
		font-size: 0.75rem;
	}
	.l .native {
		font-size: clamp(3.5rem, 10vw, 7.5rem);
	}
	.l .under {
		font-size: clamp(0.8125rem, 1.4vw, 1rem);
	}
</style>
