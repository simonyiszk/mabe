import type { EntryCollection } from "contentful";
import type { GetServerSideProps } from "next";

import type {
	IEventsFields,
	IGalleryAlbumFields,
	INewsFields,
} from "@/@types/generated/contentful";
import { getEvents, getGalleries, getNews } from "@/utils/contentful";

const DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

function generateSiteMap(
	events: EntryCollection<IEventsFields>,
	news: EntryCollection<INewsFields>,
	gallery: EntryCollection<IGalleryAlbumFields>,
) {
	return `<?xml version="1.0" encoding="UTF-8"?>
	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>https://${DOMAIN}</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/hirek</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/csapatunk</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/esemenyek</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/partnerek</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/galeria</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/dokumentumok</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/csatlakozz</loc>
	</url>
	${events.items
		.map((e) => {
			return `<url><loc>https://${DOMAIN}/esemenyek/${e.fields.slug}</loc></url>`;
		})
		.join("")}
	${news.items
		.map((e) => {
			return `<url><loc>https://${DOMAIN}/hirek/${e.fields.slug}</loc></url>`;
		})
		.join("")}
	${gallery.items
		.map((e) => {
			return `<url><loc>https://${DOMAIN}/galeria/${e.fields.slug}</loc></url>`;
		})
		.join("")}
	</urlset>
	`;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
	const events = await getEvents();
	const news = await getNews();
	const gallery = await getGalleries();

	const sitemap = generateSiteMap(events, news, gallery);

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
};

export default SiteMap;
