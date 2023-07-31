<script lang="ts">
 import "../app.postcss"
 import { theme } from '$lib/stores'
 import Navbar from '$lib/components/Navbar.svelte'
 import '$lib/styles/style.scss'
 import { fade } from 'svelte/transition'

 export let data
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Navbar/>

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot/>
  </main>
{/key}

<style>
 :root {
  font-family: sans-serif;
 }
</style>
