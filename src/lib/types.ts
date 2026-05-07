import type { Component } from 'svelte';

export type ContentMetadata = {
	title: string;
	description: string;
	date?: string;
	image?: string;
};

export type ContentModules = Record<
	string,
	() => Promise<{ default: Component; metadata: ContentMetadata }>
>;

export type PageContentData = {
	component: Component;
	metadata: ContentMetadata;
};

export type TimelinePage = {
	slug: string;
	title: string;
	description: string;
	image?: string;
	dateText: string;
	timestamp: number;
};
