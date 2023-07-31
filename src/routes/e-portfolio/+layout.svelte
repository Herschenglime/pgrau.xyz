<script lang="ts">
 import SubNav from "$lib/components/SubNav.svelte";
</script>

<SubNav title="URSP E-Portfolio"/>
<slot />

<style>
  .navbar {
    @apply min-h-0;
  }
</style>
