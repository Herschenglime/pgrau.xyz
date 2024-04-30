<script lang="ts">
  import PageContent from '$lib/components/PageContent.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import OpnLab from './opn-lab.md';
</script>

<PageContent>
  <div class="flex-col items-center">
    <h1 class="text-3xl text-center">Research Experience</h1>

    <Prose>
      <OpnLab />
    </Prose>
  </div>
</PageContent>
