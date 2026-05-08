<script lang="ts">
	import { resolve } from '$app/paths';
	import type { TimelinePage } from '$lib/types';

	interface Props {
		pages: TimelinePage[];
		basePath?: string;
	}

	let { pages = [], basePath = '/projects' }: Props = $props();
</script>

<ul class="timeline timeline-vertical">
	{#each pages as item, index (item.slug)}
		<li>
			{#if index > 0}
				<hr />
			{/if}

			<div class="timeline-start">{item.dateText}</div>
			<div class="timeline-middle">
				<div class="h-2.5 w-2.5 rounded-full bg-base-content/40"></div>
			</div>
			<div class="timeline-end w-full pl-6 md:pl-10">
				<a
					href={resolve(`${basePath}/${item.slug}` as `/${string}`)}
					class="block w-full max-w-3xl transition-transform duration-200 hover:-translate-y-0.5"
				>
					<div class="card bg-base-200 shadow-sm hover:shadow-md">
						{#if item.image}
							<figure>
								<img src={item.image} alt={item.title} class="h-full w-full object-cover" />
							</figure>
						{/if}
						<div class="card-body">
							{#if item.context}
								<div class="badge badge-outline badge-sm self-start">{item.context}</div>
							{/if}
							<h2 class="card-title">{item.title}</h2>
							<p>{item.description}</p>
						</div>
					</div>
				</a>
			</div>

			{#if index < pages.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>