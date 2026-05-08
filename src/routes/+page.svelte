<script lang="ts">
	import HomeMarkdown, { metadata } from './home.md';
	import type { ContentMetadata } from '$lib/types';
	const homeMetadata = metadata as ContentMetadata;
</script>

<svelte:head
	><title>{homeMetadata.title}</title><meta
		name="description"
		content={homeMetadata.description}
	/>
</svelte:head>

<article class="prose mx-auto">
	<HomeMarkdown />
</article>
