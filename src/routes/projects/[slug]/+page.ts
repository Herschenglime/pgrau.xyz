import type { ContentModules } from "$lib/types";
import { loadContent, getEntries } from "$lib/utils";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = "auto";

const contentDir = "/src/lib/content/projects/";

export const load = (async ({ params }) => {
	const modules = import.meta.glob("/src/lib/content/projects/*.md") as ContentModules;
	return loadContent(modules, contentDir, params.slug);
}) satisfies PageLoad;

export const entries: EntryGenerator = async () => {
	const modules = import.meta.glob("/src/lib/content/projects/*.md") as ContentModules;
	return getEntries(modules, contentDir);
};
