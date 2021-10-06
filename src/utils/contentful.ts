import { createClient } from "contentful";

import type {
	IEventsFields,
	IMembersFields,
	IPartnersFields,
} from "@/@types/generated/contentful";

const client = createClient({
	space: process.env.NEXT_CONTENTFUL_SPACE_ID ?? "ErrorNoSpaceID",
	accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN ?? "ErrorNoAccesToken",
});

export const getMembers = async () =>
	client.getEntries<IMembersFields>({
		content_type: "members",
	});

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

export const getPartners = async () =>
	client.getEntries<IPartnersFields>({
		content_type: "partners",
	});
