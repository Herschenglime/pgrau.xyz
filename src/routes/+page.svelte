<script lang="ts">
 import Card from '$lib/components/Card.svelte'

 const range = Array.from(Array(10).keys()).map(x => x+1)
</script>

<svelte:head>
  <title>pgrau.xyz</title>
</svelte:head>

<div class="prose">
  <h1>About me</h1>


  <h2>tailwind test</h2>

  <h2>Cool Test Cards</h2>

  {#each range as number}
    <Card>Wow! Card #{number}!</Card>
  {/each}

</div>
