<script>
  export let data;
  const { title, date, Content } = data
</script>

<svelte:head>
  <title>Journal - {title}</title>
  <meta property="og:title" content={title} />
</svelte:head>

<article class="prose">
  <h1>{ title }</h1>
  <p>Published: {date}</p>
  <Content/>
</article>

