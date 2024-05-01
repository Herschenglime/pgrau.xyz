import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/kit/vite';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { importAssets } from 'svelte-preprocess-import-assets'

//modify preprocessor to also work for my ImageCard tag
const importAssetsSources = (defaultSources) => {
					return [
						...defaultSources,
						// Also scan `data-src` and `data-srcset` of an img tag
						{
							tag: 'ImageCard',
							srcAttributes: ['img'],
						},
					]
				}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	kit: {
		adapter: adapter()
	},

	extensions: ['.svelte', '.md'], //what files to treat as components

	preprocess: [
		mdsvex({
			extensions: ['.md'], //let mdsvex process md files
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
			// layout: {
			//     journal: 'src/routes/e-portfolio/journal/post.svelte'
			// }
		}),
		vitePreprocess({}),
		importAssets(
			{
				sources: importAssetsSources,
			}
		), //turn inline img paths to proper references
	]
};

export default config;
