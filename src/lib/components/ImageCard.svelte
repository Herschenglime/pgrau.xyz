<script lang="ts">
 export let img:string
 export let title:string
 export let buttonLabel:string = "visit"
</script>

<div class="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img src={img} alt="Album" />
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

