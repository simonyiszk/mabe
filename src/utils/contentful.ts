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

export const getEvents = async () =>
	client.getEntries<IEventsFields>({
		content_type: "events",
	});

export const getPartners = async () =>
	client.getEntries<IPartnersFields>({
		content_type: "partners",
	});
