import { createClient } from "contentful";

import type {
	IDocumentsFields,
	IEventsFields,
	IGalleryAlbumFields,
	IMembersFields,
	INewsFields,
	IPartnersFields,
} from "@/@types/generated/contentful";

const client = createClient({
	space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? "ErrorNoAccesToken",
});

export const getMembers = async () => {
	const members = await client.getEntries<IMembersFields>({
		content_type: "members",
	});
	members.items.sort(
		(a, b) =>
			a.fields.order - b.fields.order ||
			a.fields.name.localeCompare(b.fields.name, "hu"),
	);

	return members;
};

export const getEvents = async () => {
	const events = await client.getEntries<IEventsFields>({
		content_type: "events",
	});

	events.items.sort((a, b) => {
		if ((a.fields.startDate || "") < (b.fields.startDate || "")) {
			return -1;
		}
		if ((a.fields.startDate || "") > (b.fields.startDate || "")) {
			return 1;
		}
		return 0;
	});

	return events;
};

export const getEvent = async (slug: string | string[] | undefined) => {
	const {
		items: [event],
	} = await client.getEntries<IEventsFields>({
		content_type: "events",
		"fields.slug": slug,
		limit: 1,
	});

	return event;
};

export const getPartners = async () => {
	const partners = await client.getEntries<IPartnersFields>({
		content_type: "partners",
	});

	partners.items.sort((a, b) => a.fields.name.localeCompare(b.fields.name));

	return partners;
};

export const getNews = async () => {
	const news = await client.getEntries<INewsFields>({
		content_type: "news",
		include: 10,
	});

	news.items.sort((a, b) => {
		if ((a.fields.date || "") < (b.fields.date || "")) {
			return 1;
		}
		if ((a.fields.date || "") > (b.fields.date || "")) {
			return -1;
		}
		return 0;
	});

	return news;
};

export const getOneNews = async (slug: string | string[] | undefined) => {
	const {
		items: [news],
	} = await client.getEntries<INewsFields>({
		content_type: "news",
		"fields.slug": slug,
		include: 10,
		limit: 1,
	});
	return news;
};

export const getGalleries = async () => {
	const galleries = await client.getEntries<IGalleryAlbumFields>({
		content_type: "galleryAlbum",
	});

	galleries.items.sort((a, b) => {
		if ((a.sys.createdAt || "") < (b.sys.createdAt || "")) {
			return 1;
		}
		if ((a.sys.createdAt || "") > (b.sys.createdAt || "")) {
			return -1;
		}
		return 0;
	});

	return galleries;
};

export const getOneGallery = async (slug: string | string[] | undefined) => {
	const {
		items: [gallery],
	} = await client.getEntries<IGalleryAlbumFields>({
		content_type: "galleryAlbum",
		"fields.slug": slug,
		include: 10,
		limit: 1,
	});
	return gallery;
};

export const getDocuments = async () => {
	const documents = await client.getEntries<IDocumentsFields>({
		content_type: "documents",
	});
	documents.items.sort(
		(a, b) =>
			new Date(a.sys.createdAt).getTime() - new Date(b.sys.createdAt).getTime(),
	);
	return documents;
};
