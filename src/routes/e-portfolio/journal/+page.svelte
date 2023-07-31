<script lang="ts">
 export let data
 import PageContent from "$lib/components/PageContent.svelte";
 import EntryPreview from "$lib/components/journal/EntryPreview.svelte";
</script>


<PageContent>
  <h1 class="text-3xl">Journal Entries</h1>

  <ul>
    {#each data.posts as post}
      <EntryPreview {post}/>
    {/each}
  </ul>

</PageContent>
