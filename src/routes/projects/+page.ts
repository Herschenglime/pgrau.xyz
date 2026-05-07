import type { ContentModules } from '$lib/types';
import { getTimelinePages } from '$lib/utils';
import type { PageLoad } from './$types';

export const prerender = 'auto';

const contentDir = '/src/lib/content/projects/';
const modules = import.meta.glob('/src/lib/content/projects/*.md') as ContentModules;

export const load = (async () => {
	const projectPages = await getTimelinePages(modules, contentDir);
	return { projectPages };
}) satisfies PageLoad;
