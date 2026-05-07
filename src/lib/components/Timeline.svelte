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
			<div class="timeline-end timeline-box">
				<a href={resolve(`${basePath}/${item.slug}` as `/${string}`)} class="hover:underline">{item.title}</a>
			</div>

			{#if index < pages.length - 1}
				<hr />
			{/if}
		</li>
	{/each}
</ul>