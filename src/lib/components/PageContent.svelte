<script lang="ts">
    interface Props {
        extraClasses?: string;
        children?: import('svelte').Snippet;
    }

    let { extraClasses = "", children }: Props = $props();
</script>

<div class={`flex items-center justify-center m-4 ${extraClasses}`}>
    {@render children?.()}
</div>
