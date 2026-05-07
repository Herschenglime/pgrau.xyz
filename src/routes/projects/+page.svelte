<script lang="ts">
	import PageMarkdown, { metadata } from './projects.md';
	import type { ContentMetadata } from '$lib/types';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { PageData } from './$types';

	const contentMetadata = metadata as ContentMetadata;

	let { data }: { data: PageData } = $props();
</script>

<svelte:head
	><title>{contentMetadata.title}</title><meta
		name="description"
		content={contentMetadata.description}
	/>
</svelte:head>

<article class="prose">
	<PageMarkdown />
</article>

<Timeline pages={data.projectPages} basePath="/projects" />