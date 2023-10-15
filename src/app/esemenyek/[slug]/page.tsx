import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Metadata } from "next";
import Image from "next/image";

import { BackButton } from "@/components/buttons/BackButton";
import { getEvent, getEvents } from "@/utils/contentful";
import { renderOptions } from "@/utils/RenderOptions";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;

	const event = await getEvent(slug);
	const { title } = event.fields;

	return {
		title: `${title} | Magyar Biotechnológus-hallgatók Egyesülete`,
	};
}

export default async function EventsPage({ params }: Props) {
	const event = await getEvent(params.slug);
	const { image, location, longContent, title, endDate, startDate } =
		event.fields;
	return (
		<article>
			<div className="relative aspect-video w-full">
				<Image
					src={image ? `https:${image.fields.file.url}` : "/missing_img.png"}
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
	);
}

export async function generateStaticParams() {
	const events = await getEvents();

	return (
		events.items.map(({ fields }) => ({
			slug: fields.slug,
		})) ?? []
	);
}
