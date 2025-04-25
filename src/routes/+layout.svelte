<script lang="ts">
  import '../app.postcss';
  //code block highlighting
  import '$lib/styles/prism-coldark-dark.css'

  import Navbar from '$lib/components/Navbar.svelte';

  let { data, children } = $props();
</script>

<Navbar />

{#key data.currentRoute}
  <!-- <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}> -->
  <main class="relative">
    {@render children?.()}
  </main>
{/key}
