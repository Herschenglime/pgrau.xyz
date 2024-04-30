<script lang="ts">
  import SubNav from '$lib/components/SubNav.svelte';
  const links: Link[] = [
    { name: 'Research Experience', path: '/e-portfolio/research-experience' },
    { name: 'Journal', path: '/e-portfolio/journal' }
  ];
  const title: Link = { name: 'E-Portfolio', path: '/e-portfolio' };
</script>

<SubNav {title} {links} />
<slot />
