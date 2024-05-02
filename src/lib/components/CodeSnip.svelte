<script lang="ts">
</script>

<!-- prevent prose from messing up margins -->
<slot />

<style>
 /* https://stackoverflow.com/questions/46086483/how-to-apply-styles-to-slot-element-in-svelte
 / manually style child component's pre to have a max-height, can't be done with tailwind
 /*/
    :global(pre[class*="language-"]) {
        max-height: 40em;
    }
</style>
