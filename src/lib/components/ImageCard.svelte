<script lang="ts">
  interface Props {
    link: string;
    img: string;
    alt: string;
    title: string;
    buttonLabel?: string;
    children?: import('svelte').Snippet;
  }

  let {
    link,
    img,
    alt,
    title,
    buttonLabel = 'visit',
    children
  }: Props = $props();
</script>

<!-- prevent prose from messing up margins -->
<div class="not-prose">
  <div class="flex-none m-none card card-compact bg-base-200 shadow-xl">
    <figure>
      <!-- extra things after href make it open in new tab -->
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={img} {alt} />
      </a>
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>
        {@render children?.()}
      </p>
    </div>
  </div>
</div>
