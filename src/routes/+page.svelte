<script lang="ts">
	import { elasticOut } from 'svelte/easing';
	import { scale, fade } from 'svelte/transition';
  import PageContent from '$lib/components/PageContent.svelte';
  import Body from './body.md'

	let visible = false;

	function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`;
			}
		};
	}

//https://stackoverflow.com/questions/59062025/is-there-a-way-to-perform-svelte-transition-without-a-if-block
let unique = {}

 function animate() {
   unique = {}
   visible = true
 }
</script>

<svelte:head>
  <title>pgrau.xyz</title>
</svelte:head>

<div class="hero mb-10">
  {#key unique}
  <div class="hero-content text-center" in:spin={{duration : 4000}}
  out:scale>
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Hi! I'm Paul.</h1>
      <p class="py-6">Welcome to my website! Hit that button to see something cool.</p>
      <a href="#button-target"><button on:click={animate} class="btn btn-primary">click me!</button></a>
      <!-- todo: make silly image spin in from here: https://svelte.dev/tutorial/custom-css-transitions -->
    </div>
  </div>
  {/key}
  </div>

{#if visible}
    <PageContent>
      <div class="prose prose-lg" in:fade={{delay: 4000, duration: 800}}>
        <Body/>
      </div>
    </PageContent>
{/if}
