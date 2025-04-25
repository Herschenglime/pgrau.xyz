<script lang="ts">
  //active link highlighting: https://www.okupter.com/blog/conditional-classes-in-svelte
  import { page } from '$app/state';

  import ThemeToggle from './ThemeToggle.svelte';

  const links: Link[] = [{ name: 'E-Portfolio', path: '/e-portfolio' }];
</script>

<nav class="navbar bg-base-300">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost normal-case text-xl text-primary">pgrau.xyz</a>
  </div>
  <div class="navbar-center">
    <ul class="menu menu-horizontal px-1">
      {#each links as link}
        <li class="mx-0.5">
          <a class:active={page.url.pathname.includes(link.path)} href={link.path}>{link.name}</a>
        </li>
      {/each}
      <!-- <li> <a href="/contact">Contact Me</a> </li>
           <li> <a href="/e-portfolio">E-Portfolio</a> </li> -->
    </ul>
  </div>
  <div class="navbar-end">
    <ThemeToggle />
  </div>
</nav>
