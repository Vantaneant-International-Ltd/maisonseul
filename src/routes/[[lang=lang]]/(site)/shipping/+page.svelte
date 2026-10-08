<script lang="ts">
	import Defaced from '$lib/Defaced.svelte';
</script>

<svelte:head>
	<!-- Not live until sales open: unlinked and not indexed. -->
	<meta name="robots" content="noindex, nofollow" />
	<title>Shipping, returns and warranty / Maison Seul</title>
	<meta name="description" content="Delivery, returns, reservations and the 5-year warranty for SKRIN." />
</svelte:head>

<main class="doc">
	<p class="kicker">Shipping, returns and warranty</p>
	<Defaced text="The terms, plainly." />
	<p class="lead">
		Everything here is on top of your rights under EU consumer law, which nothing on this page
		takes away.
	</p>

	<section>
		<h2>Shipping</h2>
		<ul>
			<li>Dispatched from Dublin from [date].</li>
			<li>Delivery in Ireland and the EU: [price], usually [number] working days.</li>
			<li>Outside the EU: not yet.</li>
			<li>You get a tracking link when your case leaves us.</li>
		</ul>
	</section>

	<section>
		<h2>Founding backers</h2>
		<ul>
			<li>Founding backers pay €1,000 (SKRIN) or €250 (MA), object included.</li>
			<li>Backing is refundable at any time before the object ships, and in full if it never ships.</li>
		</ul>
	</section>

	<section>
		<h2>Returns</h2>
		<ul>
			<li>You have 14 days from delivery to change your mind.</li>
			<li>Email us first. We reply with return instructions.</li>
			<li>Send the case back unused, with its dust cover and cards.</li>
			<li>Return postage is paid by [you / us].</li>
			<li>We refund you within 14 days of hearing from you, to the card you paid with.</li>
		</ul>
	</section>

	<section>
		<h2>Warranty</h2>
		<p>
			5 years from delivery on the shell, frame, wheels, handle and latches, against failure in
			normal use. We send a part or repair it, free.
		</p>
		<p>Not covered:</p>
		<ul>
			<li>Dents and scratches</li>
			<li>Damage from airlines, accidents or misuse. Report airline damage to the airline first.</li>
			<li>Normal wear of the lining</li>
		</ul>
		<p style="margin-top: 0.75rem">
			This warranty is on top of your legal guarantee under EU law, which lasts at least 2 years.
		</p>
	</section>
</main>
