import type { MetadataRoute } from "next";

import { getEvents, getGalleries, getNews } from "@/utils/contentful";

const DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const events = await getEvents();
	const news = await getNews();
	const gallery = await getGalleries();

	return [
		{
			url: `https://${DOMAIN}`,
		},
		{
			url: `https://${DOMAIN}/blog`,
		},
		{
			url: `https://${DOMAIN}/csapatunk`,
		},
		{
			url: `https://${DOMAIN}/esemenyek`,
		},
		{
			url: `https://${DOMAIN}/partnerek`,
		},
		{
			url: `https://${DOMAIN}/galeria`,
		},
		{
			url: `https://${DOMAIN}/dokumentumok`,
		},
		{
			url: `https://${DOMAIN}/csatlakozz`,
		},
		...events.items.map((e) => {
			return {
				url: `https://${DOMAIN}/esemenyek/${e.fields.slug}`,
			};
		}),
		...news.items.map((e) => {
			return {
				url: `https://${DOMAIN}/blog/${e.fields.slug}`,
			};
		}),
		...gallery.items.map((e) => {
			return {
				url: `https://${DOMAIN}/galeria/${e.fields.slug}`,
			};
		}),
	];
}
