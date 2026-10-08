<script lang="ts">
	import { page } from '$app/stores';
	import { copy, langOf } from '$lib/i18n';
	import { BACKERS, PAYMENT_LINKS, STUDIO_EMAIL } from '$lib/config';

	// The site's one transaction. Founding backers fund an object before it
	// exists: they receive the object when it is ready, and their initials go
	// into every one ever made. 100 per object. Refundable until it ships.
	const lang = $derived(langOf($page.params.lang));
	const c = $derived(copy[lang]);
	const t = $derived(c.backers);
	const currency = $derived(c.prices.currency);

	const objects = $derived([
		{
			key: 'case01' as const,
			name: 'SKRIN',
			amount: c.prices.case01Back,
			item: t.items.case01
		},
		{
			key: 'ma' as const,
			name: 'MA',
			kanji: '間',
			amount: c.prices.maBack,
			item: t.items.ma
		}
	]);

	const link = (key: 'case01' | 'ma') => PAYMENT_LINKS[key][currency];
	const emailHref = $derived(
		`mailto:${STUDIO_EMAIL}?subject=` +
			encodeURIComponent(t.emailSubject) +
			'&body=' +
			encodeURIComponent(t.emailBody)
	);
	const countFor = (key: 'case01' | 'ma') => t.count.replace('{n}', String(BACKERS[key].length));
</script>

<svelte:head>
	<title>{t.title}</title>
	<meta name="description" content={t.description} />
</svelte:head>

<main class="doc wide">
	<p class="kicker">{t.kicker}</p>
	<h1>{t.h1}</h1>
	<p class="lead">{t.lead}</p>

	<div class="objects">
		{#each objects as o}
			<article>
				<p class="name">
					{#if o.kanji}<span class="kanji" lang="ja">{o.kanji}</span>&nbsp;{/if}{o.name}
				</p>
				<p class="sub">{o.item.sub}</p>
				<p class="amount">{o.amount} <span>{t.amountLabel}</span></p>
				<ul>
					{#each o.item.gives as g}<li>{g}</li>{/each}
				</ul>
				<p class="count">{countFor(o.key)}</p>
				{#if link(o.key)}
					<a class="cta" href={link(o.key)} rel="noopener">{o.item.cta}</a>
				{:else}
					<a class="cta" href={emailHref}>{t.emailCta}</a>
				{/if}
			</article>
		{/each}
	</div>
	<p class="small">{link('case01') || link('ma') ? t.paidNote : t.emailNote}</p>

	<section>
		<h2>{t.termsTitle}</h2>
		<ul>
			{#each t.terms as term}<li>{term}</li>{/each}
		</ul>
	</section>
</main>

<style>
	.wide {
		max-width: 64rem;
	}
	.objects {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem;
		margin-top: 3rem;
	}
	article {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding: 1.75rem;
		background: var(--raised);
		border: 1px solid var(--line);
	}
	.name {
		margin: 0;
		font-size: 1.75rem;
		font-weight: 200;
		letter-spacing: 0.04em;
	}
	.kanji {
		font-family: var(--kanji);
	}
	.sub {
		margin: 0;
		color: var(--ink-dim);
	}
	.amount {
		margin: 0.75rem 0 0;
		padding-top: 1rem;
		border-top: 1px solid var(--line);
		font-size: 1.75rem;
		font-weight: 300;
	}
	.amount span {
		font-size: 0.8125rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-dim);
	}
	article ul {
		margin: 0.25rem 0 0;
	}
	.count {
		margin: 0.5rem 0 0;
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	.cta {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 3.5rem;
		margin-top: auto;
		padding: 0 1rem;
		background: var(--ink);
		color: var(--void);
		text-align: center;
		text-decoration: none;
		font-size: 0.8125rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
	.cta:hover {
		background: #ffffff;
	}
	.small {
		margin-top: 1rem;
		font-size: 0.875rem;
		color: var(--ink-dim);
	}
	@media (max-width: 760px) {
		.objects {
			grid-template-columns: 1fr;
		}
	}
</style>
