import type { ContentModules, TimelinePage } from "$lib/types";
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

function dateFromParts(year: string, month: string, day: string) {
	const parsed = new Date(Number(year), Number(month) - 1, Number(day));
	return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function parseDateLoose(dateValue?: string): Date | null {
	if (!dateValue) {
		return null;
	}

	const direct = new Date(dateValue);
	if (!Number.isNaN(direct.getTime())) {
		return direct;
	}

	const cleaned = dateValue.replace(/,/g, " ").replace(/\s+/g, " ").trim();
	const cleanedDate = new Date(cleaned);
	if (!Number.isNaN(cleanedDate.getTime())) {
		return cleanedDate;
	}

	const ymd = cleaned.match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/);
	if (ymd) {
		return dateFromParts(ymd[1], ymd[2], ymd[3]);
	}

	const dmyOrMdy = cleaned.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2,4})$/);
	if (dmyOrMdy) {
		const [, first, second, yearRaw] = dmyOrMdy;
		const year = yearRaw.length === 2 ? `20${yearRaw}` : yearRaw;

		if (Number(first) > 12) {
			return dateFromParts(year, second, first);
		}

		if (Number(second) > 12) {
			return dateFromParts(year, first, second);
		}

		return dateFromParts(year, first, second);
	}

	const monthYear = cleaned.match(/^([A-Za-z]+)\s+(\d{4})$/);
	if (monthYear) {
		const monthStart = new Date(`${monthYear[1]} 1 ${monthYear[2]}`);
		if (!Number.isNaN(monthStart.getTime())) {
			return monthStart;
		}
	}

	return null;
}

export async function getTimelinePages(modules: ContentModules, contentDir: string): Promise<TimelinePage[]> {
	const pages = await Promise.all(
		Object.entries(modules).map(async ([path, moduleLoader]) => {
			const slug = pathToSlug(path, contentDir);
			const { metadata } = await moduleLoader();
			const parsedDate = parseDateLoose(metadata.date);

			return {
				slug,
				title: metadata.title,
				description: metadata.description,
				context: metadata.context,
				image: metadata.image,
				dateText: parsedDate
					? parsedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
					: metadata.date ?? "Unknown date",
				timestamp: parsedDate?.getTime() ?? -Infinity
			};
		})
	);

	return pages.sort((a, b) => b.timestamp - a.timestamp);
}
