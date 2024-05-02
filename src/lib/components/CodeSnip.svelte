<script lang="ts">
  export let title: string = 'Code Snippet';
</script>

<!-- prevent prose from messing up card margins -->
<div class="not-prose">
  <div class="card card-compact bg-base-200 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <slot />
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Full Source</button>
      </div>
    </div>
  </div>
</div>

<style>
  /* https://stackoverflow.com/questions/46086483/how-to-apply-styles-to-slot-element-in-svelte
 / manually style child component's pre to have a max-height, can't be done with tailwind
 /*/
  :global(pre[class*='language-']) {
    max-height: 40em;

    /* taken from tailwind typography definitions since not-prose needs to be used */
      /* these are for prose-lg, converted with chatgpt */
    font-size: 0.8889em; /* This is computed from em(16, 18) */
    line-height: 1.75; /* Computed from round(28 / 16) */
    border-radius: 0.375rem; /* Computed from rem(6) */
    padding-top: 1em; /* Computed from em(16, 16) */
    padding-right: 1.5em; /* Computed from em(24, 16) */
    padding-bottom: 1em; /* Computed from em(16, 16) */
    padding-left: 1.5em; /* Computed from em(24, 16) */
  }

  :global(code[class*='language-']) {
    font-size: small; /* This is computed from em(16, 18) */
  }


</style>
