import type { ContentModules } from "$lib/types";
import { error } from "@sveltejs/kit";

/**
 * Converts a file path to a slug
 * @param path Full file path like "/src/lib/content/my-post.md"
 * @param contentDir The content directory to remove from path
 */
export function pathToSlug(path: string, contentDir: string): string {
	return path.replace(contentDir, "").replace(".md", "");
}

/**
 * Converts a slug to a file path
 * @param slug URL slug like "my-post"
 * @param contentDir The content directory to prepend
 */
export function slugToPath(slug: string, contentDir: string): string {
	return `${contentDir}${slug}.md`;
}

/**
 * Creates a load handler for content modules
 * Use this in your +page.ts files with import.meta.glob()
 * @param modules The glob-imported modules
 * @param contentDir The content directory path (e.g., "/src/lib/content/")
 * @param slug The current page slug
 */
export async function loadContent(
	modules: ContentModules,
	contentDir: string,
	slug: string
) {
	const contentModule = modules[slugToPath(slug, contentDir)];

	if (!contentModule) {
		error(404, "Can't find content");
	}

	const { default: component, metadata } = await contentModule();
	return { component, metadata };
}

/**
 * Creates entries for dynamic route generation
 * Use this in your +page.ts files with import.meta.glob()
 * @param modules The glob-imported modules
 * @param contentDir The content directory path (e.g., "/src/lib/content/")
 */
export function getEntries(modules: ContentModules, contentDir: string) {
	return Object.keys(modules).map((path) => {
		return { slug: pathToSlug(path, contentDir) };
	});
}
