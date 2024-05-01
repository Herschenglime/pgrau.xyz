<script lang="ts">
  import PageContent from '$lib/components/PageContent.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Content from './content.md';
</script>

<PageContent>
  <div class="flex-col items-center">
    <Prose>
      <Content />
    </Prose>
  </div>
</PageContent>
