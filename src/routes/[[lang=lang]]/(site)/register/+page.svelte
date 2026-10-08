<script lang="ts">
	// No backend: the form builds an email to the studio.
	let serial = $state('');
	let name = $state('');

	const href = $derived(
		'mailto:studio@maisonseul.com?subject=' +
			encodeURIComponent(`SKRIN / Register ${serial || '[serial]'}`) +
			'&body=' +
			encodeURIComponent(`Serial: ${serial}\nName: ${name}\n`)
	);
</script>

<svelte:head>
	<!-- Not live until sales open: unlinked and not indexed. -->
	<meta name="robots" content="noindex, nofollow" />
	<title>Register a serial / Maison Seul</title>
	<meta name="description" content="Register your SKRIN serial number to start its warranty." />
</svelte:head>

<main class="doc">
	<p class="kicker">Register a serial</p>
	<h1>Your number, in the register.</h1>
	<p class="lead">
		Your serial is on the plate inside the lid. Registering it starts your 5-year warranty and
		puts your name against that number in the house register.
	</p>

	<section>
		<form class="reg" onsubmit={(e) => e.preventDefault()}>
			<label for="serial">Serial number</label>
			<input id="serial" inputmode="numeric" maxlength="3" placeholder="017" bind:value={serial} />
			<label for="name">Your name</label>
			<input id="name" autocomplete="name" bind:value={name} />
			<a class="send" href={href}>Register by email</a>
			<p class="small">This opens an email to us with your details filled in.</p>
		</form>
	</section>
</main>

<style>
	.reg {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 26rem;
	}
	label {
		margin-top: 0.75rem;
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	input {
		min-height: 3.25rem;
		padding: 0 1rem;
		border: 1px solid var(--line);
		background: var(--raised);
		color: var(--ink);
		font: inherit;
		font-size: 1.0625rem;
		border-radius: 0;
	}
	input:focus {
		border-color: var(--ink);
		outline: none;
	}
	.send {
		margin-top: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3.5rem;
		background: var(--ink);
		color: var(--void);
		text-decoration: none;
		font-size: 0.8125rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
	.small {
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
</style>
