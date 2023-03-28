<script lang="ts">
  import { theme } from '$lib/stores'
 import ThemeSwitch from '$lib/components/ThemeSwitch.svelte'
 import Navbar from '$lib/components/Navbar.svelte'
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' :
  $theme}/> <link rel="stylesheet" href={`/theme/${$theme}.css`} />
</svelte:head>

<header>
  <Navbar/>
</header>

<slot />

<style>
 :root {
  font-family: sans-serif;
 }
</style>
