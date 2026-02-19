<script lang="ts">
	import ContentPage from '$lib/components/ContentPage.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<ContentPage {data} />
