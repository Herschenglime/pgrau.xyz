import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'], //what files to treat as components

	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'] //let mdsvex process md files
		})
	]
};

export default config;
