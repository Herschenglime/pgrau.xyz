<script lang="ts">
  export let link: string;
  export let img: string;
  export let alt: string;
  export let title: string;
  export let buttonLabel: string = 'visit';
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
        <slot />
      </p>
    </div>
  </div>
</div>
