<script lang="ts">
	import '../app.css';
	import NavBar from '$lib/components/NavBar.svelte';

	let { children, data } = $props();
</script>

<NavBar slugList={data.slugList} />
<div class="container mx-auto max-w-5xl">
	<div class="my-4 mx-4">
		{@render children()}
	</div>
</div>
