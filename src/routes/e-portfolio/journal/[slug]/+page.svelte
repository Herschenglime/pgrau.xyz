<script>
  import PageContent from '$lib/components/PageContent.svelte';
  export let data;
  const { title, date, Content } = data;
</script>

<svelte:head>
  <title>Journal - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<PageContent>
  <article class="prose prose-lg">
    <h1 class="text-center mb-2">{title}</h1>
    <h3 class="text-center mt-0">{date}</h3>
    <Content />
  </article>
</PageContent>
