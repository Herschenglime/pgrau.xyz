<script lang="ts">
  export let img: string;
  export let alt: string;
  export let title: string;
  export let buttonLabel: string = 'visit';
</script>

<!-- prevent prose from messing up margins -->
<div class="not-prose">
  <div class="flex-none m-none card card-compact bg-base-200 shadow-xl">
    <figure>
      <img src={img} {alt} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <p>
        <slot />
      </p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">{buttonLabel}</button>
      </div>
    </div>
  </div>
</div>
