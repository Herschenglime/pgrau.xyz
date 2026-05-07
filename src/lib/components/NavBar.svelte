<script lang="ts">
  import { page } from '$app/stores';

  type SlugItem = {
    slug: string;
  };

  let { slugList = [] }: { slugList?: SlugItem[] } = $props();

  const items = $derived(
    slugList.map((item) => ({ ...item, label: item.slug.replace(/-/g, ' ') }))
  );
</script>

<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Open menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {#each items as item}
          <li>
            <a
              href={item.slug === '' ? '/' : `/${item.slug}`}
              class:active={$page.url.pathname === (item.slug === '' ? '/' : `/${item.slug}`)}
              class="capitalize"
            >
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <a class="btn btn-ghost text-xl" href="/">pgrau.xyz</a>
  </div>

  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each items as item}
        <li>
          <a
            href={item.slug === '' ? '/' : `/${item.slug}`}
            class:active={$page.url.pathname === (item.slug === '' ? '/' : `/${item.slug}`)}
            class="capitalize"
            >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>