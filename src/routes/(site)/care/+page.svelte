<script lang="ts">
	const parts = [
		{ part: 'Double spinner wheel', note: 'One corner. Four screws.', price: '[€]' },
		{ part: 'Telescopic handle', note: 'Complete unit.', price: '[€]' },
		{ part: 'Latch with combination lock', note: 'One latch.', price: '[€]' },
		{ part: 'Corner guard', note: 'Graphite or raw aluminium.', price: '[€]' },
		{ part: 'Foot', note: 'Set of two.', price: '[€]' }
	];
</script>

<svelte:head>
	<title>Care and repair / Maison Seul</title>
	<meta name="description" content="How to care for CASE 01, replace its parts, and get it repaired." />
</svelte:head>

<main class="doc">
	<p class="kicker">Care and repair</p>
	<h1>Four screws, and the parts to go with them.</h1>
	<p class="lead">
		The wheels, handle and latches come off with a screwdriver. We keep the parts for every
		edition, so CASE 01 can be kept going rather than replaced.
	</p>

	<section>
		<h2>Everyday care</h2>
		<ul>
			<li>Wipe the shell with a soft damp cloth. A little mild soap if needed. Nothing abrasive.</li>
			<li>Wipe the lining with a damp cloth. Let it dry open.</li>
			<li>Store it empty, closed and upright, out of direct sun.</li>
			<li>
				Dents and scratches are part of aluminium. They are not covered as faults, and we will not
				pretend they will not happen.
			</li>
		</ul>
	</section>

	<section>
		<h2>Replace a wheel</h2>
		<ol>
			<li>Empty the case and lay it on its back.</li>
			<li>Undo the four screws that hold the wheel, using a [screwdriver type].</li>
			<li>Lift the old wheel away.</li>
			<li>Fit the new wheel and tighten the four screws evenly. Do not overtighten.</li>
		</ol>
		<p>The handle, latches and feet come off the same way. A full guide comes with the case.</p>
	</section>

	<section>
		<h2>Spare parts</h2>
		<div class="table-wrap">
			<table>
				<thead>
					<tr><th scope="col">Part</th><th scope="col">Note</th><th scope="col">Price</th></tr>
				</thead>
				<tbody>
					{#each parts as p}
						<tr><td>{p.part}</td><td>{p.note}</td><td>{p.price}</td></tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p style="margin-top: 1rem">
			Free within the 5-year warranty. After that, sold at cost plus postage.
		</p>
	</section>

	<section>
		<h2>Repair by us</h2>
		<p>
			Email <a href="mailto:studio@maisonseul.com?subject=CASE%2001%20%2F%20Repair">studio@maisonseul.com</a>
			with your serial number and a photo of the problem. We will send the part, or arrange a
			repair if it needs one.
		</p>
	</section>
</main>
