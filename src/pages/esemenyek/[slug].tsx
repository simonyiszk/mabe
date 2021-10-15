import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";

import type { IEventsFields } from "@/@types/generated/contentful";
import { BackButton } from "@/components/buttons/BackButton";
import { EventsPageLayout } from "@/components/layouts/EventsPageLayout";
import { getEvent, getEvents } from "@/utils/contentful";
import { renderOptions } from "@/utils/RenderOptions";

export default function EventsPage({
	event: { image, location, longContent, title, endDate, startDate },
}: {
	event: IEventsFields;
}) {
	return (
		<EventsPageLayout>
			<>
				<Head>
					<title key="title">{title}</title>
				</Head>
				<article>
					<div className="relative w-full h-52">
						<Image
							src={
								image
									? `https:${image.fields.file.url}`
									: "https://placekitten.com/500/500"
							}
							className="w-full"
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<div className="flex flex-col pb-6 mt-14">
						<div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between 2xl:justify-between md:items-center lg:items-start 2xl:items-center mb-5">
							<h2 className="mb-3 md:mb-0 lg:mb-3 xl:mb-0 text-4xl lg:text-6xl font-medium">
								{title}
							</h2>
							{startDate && endDate && (
								<div className="min-w-[30%] text-2xl xl:text-3xl font-normal">
									{new Date(startDate).toLocaleDateString("hu")} -{" "}
									{new Date(endDate).toLocaleDateString("hu")}
								</div>
							)}
						</div>
						<div className="mb-10 text-2xl lg:text-4xl font-bold text-turquoise-dark">
							{location}
						</div>
						<div className="mb-10 max-w-none prose lg:prose-xl">
							{documentToReactComponents(longContent, renderOptions)}
						</div>
						<BackButton href="/esemenyek" />
					</div>
				</article>
			</>
		</EventsPageLayout>
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
