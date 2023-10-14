import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import type { IEventsFields } from "@/@types/generated/contentful";
import { BackButton } from "@/components/buttons/BackButton";
import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { getEvent, getEvents } from "@/utils/contentful";
import { renderOptions } from "@/utils/RenderOptions";

export default function EventsPage({
	event: { image, location, longContent, title, endDate, startDate },
}: {
	event: IEventsFields;
}) {
	return (
		<AnyPageLayout>
			<>
				<Head>
					<title key="title">{title}</title>
				</Head>
				<article>
					<div className="relative h-52 w-full">
						<Image
							src={
								image ? `https:${image.fields.file.url}` : "/missing_img.png"
							}
							className="w-full"
							fill
							objectFit={image ? "cover" : "contain"}
							alt={title}
						/>
					</div>
					<div className="mt-14 flex flex-col pb-6">
						<div className="mb-5 flex flex-col md:flex-row md:items-center md:justify-between lg:flex-col lg:items-start 2xl:flex-row 2xl:items-center 2xl:justify-between">
							<h2 className="mb-3 text-4xl font-medium md:mb-0 lg:mb-3 lg:text-6xl xl:mb-0">
								{title}
							</h2>
							{startDate && endDate && (
								<div className="min-w-[30%] text-2xl font-normal xl:text-3xl">
									{new Date(startDate).toLocaleDateString("hu")} -{" "}
									{new Date(endDate).toLocaleDateString("hu")}
								</div>
							)}
						</div>
						<div className="mb-10 text-2xl font-bold text-turquoise-dark lg:text-4xl">
							{location}
						</div>
						<div className="prose mb-10 max-w-none lg:prose-xl">
							{documentToReactComponents(longContent, renderOptions)}
						</div>
						<BackButton href="/esemenyek" />
					</div>
				</article>
			</>
		</AnyPageLayout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const event = await getEvent(params?.slug);

	return {
		props: {
			event: event.fields,
		},
	};
};

export const getStaticPaths = async () => {
	const allEvents = await getEvents();
	return {
		paths:
			allEvents.items.map(({ fields: { slug } }) => `/esemenyek/${slug}`) ?? [],
		fallback: false,
	};
};
