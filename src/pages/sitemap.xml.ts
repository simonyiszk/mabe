import type { EntryCollection } from "contentful";

import type {
	IEventsFields,
	IGalleryAlbumFields,
	INewsFields,
} from "@/@types/generated/contentful";
import { getEvents } from "@/utils/contentful";

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
		<loc>https://${DOMAIN}/esemenyek</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/partnerek</loc>
	</url>
	<url>
		<loc>https://${DOMAIN}/galeria</loc>
	</url>
	${events.items
		.map((e) => {
			return `<url><loc>https://${DOMAIN}/esemenyek/${e.fields.slug}`;
		})
		.join("")}
	${news.items
		.map((e) => {
			return `<url><loc>https://${DOMAIN}/hirek/${e.fields.slug}`;
		})
		.join("")}
	${gallery.items
		.map((e) => {
			return `<url><loc>https://${DOMAIN}/galeria/${e.fields.slug}`;
		})
		.join("")}
	</urlset>
	`;
}

function SiteMap() {
	// getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
	// We make an API call to gather the URLs for our site
	const events = await getEvents();
	const news = await getNews();
	const gallery = await getGallery();

	// We generate the XML sitemap with the posts data
	const sitemap = generateSiteMap(events, news, gallery);

	res.setHeader("Content-Type", "text/xml");
	// we send the XML to the browser
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default SiteMap;
