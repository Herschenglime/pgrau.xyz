<script lang="ts">
 export let extraClasses = "";
</script>

<div class={`flex items-center justify-center m-auto mt-4 ${extraClasses}`}>
    <slot/>
</div>
