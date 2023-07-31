<script lang="ts">
 export let title:String;
 export let links: Link[];
</script>

<div class="navbar bg-base-200">
  <div class="navbar-start">
    <a class="btn btn-ghost btn-sm normal-case text-secondary">{title}</a>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal menu-xs px-0.5">
      <li> <a href="/e-portfolio/journal">Journal</a> </li>
    </ul>
  </div>
</div>
