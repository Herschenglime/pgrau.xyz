<script lang="ts">
  import { theme } from '$lib/stores'
 import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
 import Navbar from '$lib/components/Navbar.svelte'
 // import '$lib/styles/placeholder.scss' - if I wanted to import, although inline seems fine
 import { fade } from 'svelte/transition'

 export let data
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<Navbar/>

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ durtion: 150 }}>
    <slot/>
  </main>
{/key}

<style>
 :root {
  font-family: sans-serif;
 }
</style>
