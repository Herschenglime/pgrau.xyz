<script lang="ts">
</script>

<!-- "arbitrary variant" in tailwind to access child class
     https://stackoverflow.com/questions/67119992/how-to-access-all-the-direct-children-of-a-div-in-tailwindcss -->
<div class="[&>pre[class*='language-']]:max-h-[40em]">
  <slot />
</div>
