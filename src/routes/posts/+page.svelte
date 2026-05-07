<script lang="ts">
	import PageMarkdown, { metadata } from './posts.md';
	import type { ContentMetadata } from '$lib/types';
	const contentMetadata = metadata as ContentMetadata;
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