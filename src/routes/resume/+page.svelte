<script lang="ts">
	import resumeData from "$lib/resume/resume.json";
	import Seo from "$lib/components/Seo.svelte";
	import { formatPeriod, type Resume } from "$lib/resume/resume.types";
	import { PAGES } from "$lib/site";

	const resume = resumeData as Resume;
	const pdfHref = "/resume.pdf";
</script>

<Seo
	title={PAGES["/resume"].title}
	description={PAGES["/resume"].description}
	path="/resume"
	type={PAGES["/resume"].type}
/>

<div class="resume">
	<a class="download" href={pdfHref} download>Download PDF</a>

	<article>
		<header>
			<h1>{resume.name}</h1>
			<p class="contact">
				{#each resume.contact as item}
					{#if item.href}
						<a href={item.href}>{item.label}</a>
					{:else}
						<span>{item.label}</span>
					{/if}
				{/each}
			</p>
		</header>

		{#each resume.sections as section}
			<section>
				<h2>{section.heading}</h2>

				{#if section.groups}
					<dl class="skills">
						{#each section.groups as group}
							<div class="skill-group">
								<dt>{group.label}</dt>
								<dd>{group.items.join(", ")}</dd>
							</div>
						{/each}
					</dl>
				{:else}
					<ul class="entries">
						{#each section.entries ?? [] as entry}
							<li>
								<div class="entry-head">
									<h3>{entry.role}</h3>
									<span class="period">{formatPeriod(entry)}</span>
								</div>
								<p class="org">
									{entry.organisation}
									<span class="location">— {entry.location}</span>
								</p>
								{#if entry.bullets && entry.bullets.length > 0}
									<ul class="bullets">
										{#each entry.bullets as bullet}
											<li>{bullet}</li>
										{/each}
									</ul>
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			</section>
		{/each}
	</article>
</div>

<style lang="scss">
	// Monochrome fibre texture. Applied as a background-image on the sheet so it
	// sits *under* the text rather than as an overlay that would soften the type.
	// `stitchTiles` keeps it seamless when repeated, and the low opacity means it
	// reads as texture rather than noise.
	$grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");

	.resume {
		padding: 2.5rem 1rem 4rem;
	}

	article {
		// True US Letter at 96dpi: 8.5in = 816px wide, 11in = 1056px tall.
		// Matching the PDF's proportions means the web resume and the downloaded
		// document look like the same object.
		max-width: 51rem;
		aspect-ratio: 8.5 / 11;
		margin: 0 auto;
		padding: 3rem 3.5rem;

		background-color: var(--color-paper);
		background-image: $grain;
		border: 1px solid rgb(0 0 0 / 0.1);
		border-radius: 2px;

		// Three shadows doing three different jobs. A single soft shadow either
		// hugs the edge (looks pasted) or floats (looks unreal), so: a tight dark
		// contact line for thickness, a near one for the edge, and a wide diffuse
		// one for the lift off the surface.
		box-shadow:
			0 1px 2px rgb(0 0 0 / 0.1),
			0 3px 8px rgb(0 0 0 / 0.12),
			0 12px 28px rgb(0 0 0 / 0.1);

		color: #222;
		line-height: 1.5;
	}

	.download {
		display: block;
		width: fit-content;
		margin: 0 auto 1.75rem;
		padding: 0.55rem 1.4rem;
		border: 2px solid var(--primary);
		border-radius: 4px;
		color: var(--primary);
		text-decoration: none;
		font-weight: 600;

		&:hover {
			background-color: var(--primary);
			color: white;
		}

		&:focus-visible {
			outline: 2px solid var(--primary);
			outline-offset: 2px;
		}
	}

	// Below the tablet breakpoint the sheet goes edge-to-edge: a floating card
	// with clipped sides just reads as a broken layout on a phone.
	//
	// `.resume` drops its horizontal padding too. It and `article` both had side
	// padding, which stacked to 40px per side and left an iPhone SE with a 240px
	// text column. One layer of padding only.
	@media (max-width: 60rem) {
		.resume {
			padding: 1.75rem 0 3rem;
		}

		article {
			margin: 0;
			max-width: none;
			// Aspect ratio is dropped on narrow screens -- a Letter-proportioned
			// sheet at 375px wide would be 485px tall, mostly empty padding.
			aspect-ratio: auto;
			padding: 2rem 1.25rem 2.5rem;
			border: none;
			border-radius: 0;
			box-shadow: none;
		}

		// Every level of indent costs width on a phone, and bullet points were
		// landing on a ~30-character measure.
		.bullets {
			padding-left: 1rem;
		}
	}

	header {
		text-align: center;
		margin-bottom: 2rem;

		h1 {
			text-align: center;
			font-size: 2rem;
			// No top margin needed -- the download button moved outside the sheet,
			// so the sheet's own padding is the space above the name.
			margin: 0 0 0.5rem;
			text-transform: uppercase;
			letter-spacing: 0.05em;
		}
	}

	.contact {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.25rem 1rem;
		margin: 0;

		span,
		a {
			white-space: nowrap;
		}
	}

	section {
		margin-bottom: 2rem;
	}

	h2 {
		font-size: 1.1rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		border-bottom: 2px solid #222;
		padding-bottom: 0.25rem;
		margin-bottom: 1rem;
	}

	.entries {
		list-style: none;
		margin: 0;
		padding: 0;

		> li + li {
			margin-top: 1.5rem;
		}
	}

	.entry-head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.25rem 1rem;
	}

	h3 {
		font-size: 1.05rem;
		margin: 0;
	}

	.period {
		color: #555;
		font-size: 0.9rem;
		white-space: nowrap;
	}

	.org {
		margin: 0 0 0.5rem;
		font-style: italic;
		color: #444;
	}

	.location {
		font-style: normal;
	}

	.bullets {
		margin: 0;
		padding-left: 1.25rem;

		li {
			margin-bottom: 0.35rem;
		}
	}

	.skills {
		margin: 0;
		display: grid;
		gap: 0.5rem;
	}

	.skill-group {
		display: grid;
		grid-template-columns: minmax(9rem, 14rem) 1fr;
		gap: 0.5rem 1rem;

		dt {
			font-weight: 700;
		}

		dd {
			margin: 0;
		}
	}

	@media (max-width: 600px) {
		.skill-group {
			grid-template-columns: 1fr;
			gap: 0.1rem;
		}

		.entry-head {
			flex-direction: column;
			gap: 0.1rem;
		}
	}
</style>
