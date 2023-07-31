<script lang="ts">
 import "../app.postcss"
 import Navbar from '$lib/components/Navbar.svelte'
 import '$lib/styles/style.scss'
 import { fade } from 'svelte/transition'

 export let data
</script>

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
