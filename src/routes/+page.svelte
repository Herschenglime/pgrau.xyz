<script lang="ts">
 import Card from '$lib/components/Card.svelte'
	import { each } from 'svelte/internal';

 const range = Array.from(Array(10).keys()).map(x => x+1)
</script>

<svelte:head>
  <title>pgrau.xyz</title>
</svelte:head>

<h1>About me</h1>


<h2>Cool Test Cards</h2>

{#each range as number}
<Card>Wow! Card #{number}!</Card>
{/each}
