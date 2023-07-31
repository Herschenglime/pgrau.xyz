import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

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
			extensions: ['.md'], //let mdsvex process md files
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
			// layout: {
			//     journal: 'src/routes/e-portfolio/journal/post.svelte'
			// }
		}),
		vitePreprocess({})
	]
};

export default config;
