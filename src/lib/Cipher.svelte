<script lang="ts">
	import { cipher } from '$lib/cipher';

	// A line in the house alphabet. Decorative: screen readers skip it, the
	// same way a sighted visitor who cannot read it does.
	let { text, class: cls = '' }: { text: string; class?: string } = $props();
</script>

<span class="cipher {cls}" aria-hidden="true">{cipher(text)}</span>

<style>
	.cipher {
		font-family: var(--cipher);
		font-size: 0.8125rem;
		letter-spacing: 0.18em;
		color: var(--ink-dim);
		opacity: 0.55;
		user-select: all;
	}
</style>
