import { createClient } from "contentful";

import type {
	TypeDocumentsSkeleton,
	TypeEventsSkeleton,
	TypeGalleryAlbumSkeleton,
	TypeJoinUsButtonSkeleton,
	TypeMembersSkeleton,
	TypeNewsSkeleton,
	TypePartnersSkeleton,
} from "@/@types/generated";

const client = createClient({
	space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? "ErrorNoAccesToken",
}).withoutUnresolvableLinks;

export const getMembers = async () => {
	const members = await client.getEntries<TypeMembersSkeleton>({
		content_type: "members",
		order: ["fields.order", "fields.name"],
	});

	return members;
};

export const getEvents = async () => {
	const events = await client.getEntries<TypeEventsSkeleton>({
		content_type: "events",
		order: ["fields.startDate"],
	});

	return events;
};

export const getEvent = async (slug: string | undefined) => {
	const {
		items: [event],
	} = await client.getEntries<TypeEventsSkeleton>({
		content_type: "events",
		"fields.slug": slug,
		limit: 1,
	});

	return event;
};

export const getPartners = async () => {
	const partners = await client.getEntries<TypePartnersSkeleton>({
		content_type: "partners",
		order: ["fields.name"],
	});

	return partners;
};

export const getNews = async () => {
	const news = await client.getEntries<TypeNewsSkeleton>({
		content_type: "news",
		include: 10,
		order: ["-fields.date"],
	});

	return news;
};

export const getOneNews = async (slug: string | undefined) => {
	const {
		items: [news],
	} = await client.getEntries<TypeNewsSkeleton>({
		content_type: "news",
		"fields.slug": slug,
		include: 10,
		limit: 1,
	});
	return news;
};

export const getGalleries = async () => {
	const galleries = await client.getEntries<TypeGalleryAlbumSkeleton>({
		content_type: "galleryAlbum",
		order: ["-sys.createdAt"],
	});

	return galleries;
};

export const getOneGallery = async (slug: string | undefined) => {
	const {
		items: [gallery],
	} = await client.getEntries<TypeGalleryAlbumSkeleton>({
		content_type: "galleryAlbum",
		"fields.slug": slug,
		include: 10,
		limit: 1,
	});
	return gallery;
};

export const getDocuments = async () => {
	const documents = await client.getEntries<TypeDocumentsSkeleton>({
		content_type: "documents",
		order: ["sys.createdAt"],
	});
	return documents;
};

export const getGeneralData = async () => {
	const gd = await client.getEntries<TypeJoinUsButtonSkeleton>({
		content_type: "joinUsButton",
	});
	return gd.items[0];
};
