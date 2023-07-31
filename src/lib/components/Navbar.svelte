<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
  import NavItem from './NavItem.svelte';
</script>

<nav>
  <div>
    <NavItem link="/" highlightOnHover={false}>
      <!-- <img class = 'image' alt="logo" src=/images/logo2.png> -->
      <strong style:color=#72d3fe>pgrau.xyz</strong>
    </NavItem>
  </div>

  <div>
    <NavItem link="/contact">Contact</NavItem>
    <NavItem link="/e-portfolio">E-Portfolio</NavItem>

    <div class="divider"/>

    <div style="display: inline">
      Theme: <ThemeSwitch />
    </div>
  </div>
</nav>

<style>
  nav {
    width: 95vw;
    margin: auto;
    border-radius: 10px;
    border-style: clear;
    border-width: thin;
    
    padding: 5px;
    display: flex;
    justify-content: space-between;

    overflow: hidden;
  }
  .divider {
    display: inline-flex;
    width: 1em;
  }
  .image{
    display:inline-flex;
    max-width: 30px;
    max-height: 30px;
  }

  
</style>
