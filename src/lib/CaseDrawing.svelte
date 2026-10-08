<script lang="ts">
	// Front-view line drawing of SKRIN, used until product photographs exist.
	// One corner guard (front, top right) is raw aluminium; the rest are graphite.
	let { label = 'Front view drawing of SKRIN' }: { label?: string } = $props();
</script>

<svg role="img" aria-label={label} viewBox="0 0 400 580">
	<rect x="150" y="30" width="100" height="26" rx="9" fill="none" stroke="#3b4247" stroke-width="6" />
	<rect x="50" y="52" width="300" height="470" rx="30" fill="#2a3035" stroke="#3b4247" stroke-width="1.5" />
	<rect x="76" y="78" width="248" height="418" rx="14" fill="none" stroke="#343b40" stroke-width="1" />
	<path d="M50 108 V82 A30 30 0 0 1 80 52 H106" fill="none" stroke="#15191c" stroke-width="11" stroke-linecap="round" />
	<path d="M294 52 H320 A30 30 0 0 1 350 82 V108" fill="none" stroke="#c9cdd0" stroke-width="11" stroke-linecap="round" />
	<path d="M50 466 V492 A30 30 0 0 0 80 522 H106" fill="none" stroke="#15191c" stroke-width="11" stroke-linecap="round" />
	<path d="M294 522 H320 A30 30 0 0 0 350 492 V466" fill="none" stroke="#15191c" stroke-width="11" stroke-linecap="round" />
	<rect x="344" y="186" width="12" height="46" rx="3" fill="#15191c" />
	<rect x="344" y="346" width="12" height="46" rx="3" fill="#15191c" />
	<text x="268" y="71" font-family="Outfit, sans-serif" font-size="9" letter-spacing="1" fill="#a9aeb1">___</text>
	<rect x="74" y="524" width="16" height="30" rx="6" fill="#0d1012" stroke="#2e3438" />
	<rect x="94" y="524" width="16" height="30" rx="6" fill="#0d1012" stroke="#2e3438" />
	<rect x="290" y="524" width="16" height="30" rx="6" fill="#0d1012" stroke="#2e3438" />
	<rect x="310" y="524" width="16" height="30" rx="6" fill="#0d1012" stroke="#2e3438" />
	<line x1="20" y1="555" x2="380" y2="555" stroke="#2e3438" />
</svg>

<style>
	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
</style>
