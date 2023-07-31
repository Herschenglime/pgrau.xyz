<script lang="ts">
 import Card from '$lib/components/Card.svelte'

 const range = Array.from(Array(10).keys()).map(x => x+1)
</script>

<svelte:head>
  <title>pgrau.xyz</title>
</svelte:head>

<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Welcome to my very cool website! Hit that button to scroll down slightly.</p>
      <a href="#button-target"><button class="btn btn-primary">Get Started</button></a>
      <!-- todo: make silly image spin in from here: https://svelte.dev/tutorial/custom-css-transitions -->
    </div>
  </div>
</div>

{#each range as number}
  <p>num is {number}</p>
{/each}
