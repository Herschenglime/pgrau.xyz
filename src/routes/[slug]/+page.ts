import type { ContentModules } from "$lib/types";
import { loadContent, getEntries } from "$lib/utils";
import type { EntryGenerator, PageLoad } from "./$types";

export const prerender = "auto";

const contentDir = "/src/lib/content/";
const modules = import.meta.glob("/src/lib/content/*.md") as ContentModules;

export const load = (async ({ params }) => {
	return loadContent(modules, contentDir, params.slug);
}) satisfies PageLoad;

export const entries: EntryGenerator = async () => {
	return getEntries(modules, contentDir);
};
