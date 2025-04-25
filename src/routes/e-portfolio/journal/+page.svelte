<script lang="ts">
  import PageContent from '$lib/components/PageContent.svelte';
  import EntryPreview from '$lib/components/journal/EntryPreview.svelte';
  let { data } = $props();
</script>

<PageContent>
  <div class="flex-col items-center">
    <h1 class="text-3xl text-center">Journal Entries</h1>
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
