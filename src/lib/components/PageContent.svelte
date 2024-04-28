<script lang="ts">
 export let extraClasses = "";
</script>

<div class={`flex items-center justify-center m-4 ${extraClasses}`}>
    <slot/>
</div>
