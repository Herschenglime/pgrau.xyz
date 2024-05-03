<script lang="ts">
  export let data;
  console.log(data)
  import PageContent from '$lib/components/PageContent.svelte';
  import EntryPreview from '$lib/components/journal/EntryPreview.svelte';
</script>

<PageContent>
  <div class="flex-col items-center">
    <h1 class="text-3xl text-center">Code Snippets</h1>
    <div class="flex flex-wrap justify-center">
      {#each data.posts as post}
          <!-- don't show 404 post in list page -->
        {#if !post.meta.hidden}
          <EntryPreview {post} />
        {/if}
      {/each}
    </div>
  </div>
</PageContent>
