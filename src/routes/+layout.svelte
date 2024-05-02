<script lang="ts">
  import '../app.postcss';
  //code block highlighting
  import '$lib/styles/prism-xonokai.css'

  import Navbar from '$lib/components/Navbar.svelte';

  export let data;
</script>

<Navbar />

{#key data.currentRoute}
  <!-- <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}> -->
  <main class="relative">
    <slot />
  </main>
{/key}
