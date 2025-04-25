<script lang="ts">
    interface Props {
        extraClasses?: string;
        children?: import('svelte').Snippet;
    }

    let { extraClasses = "", children }: Props = $props();
</script>

<article class={`prose prose-lg ${extraClasses}`}>
    {@render children?.()}
</article>
