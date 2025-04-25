<script lang="ts">
  import { page } from '$app/stores';

  interface Props {
    title: String;
    links: Link[];
  }

  let { title, links }: Props = $props();
</script>

<div class="navbar bg-base-200 py-0">
  <div class="navbar-start">
  <div class="navbar-start">
    <a class="btn btn-ghost btn-sm normal-case text-secondary" href={title.path}>{title.name}</a>
  </div>
  </div>
  <div class="navbar-end">
    <ul class="menu menu-horizontal menu-sm px-1">
      {#each links as link}
        <li class="mx-1">
          <a class:active={$page.url.pathname.includes(link.path)} href={link.path}>{link.name}</a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .navbar {
    @apply min-h-0;
  }
</style>
