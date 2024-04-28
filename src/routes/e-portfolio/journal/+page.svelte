<script lang="ts">
  export let data;
  import PageContent from '$lib/components/PageContent.svelte';
  import EntryPreview from '$lib/components/journal/EntryPreview.svelte';
</script>

<PageContent>
  <div class="flex-col items-center">
    <h1 class="text-3xl text-center">Journal Entries</h1>
    <div class="flex flex-wrap justify-center">
      {#each data.posts as post}
        <EntryPreview {post} />
      {/each}
    </div>
  </div>
</PageContent>
