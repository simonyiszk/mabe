import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

import type { IEventsFields } from "@/@types/generated/contentful";

export function EventCard({
	title,
	location,
	miniContent,
	slug,
	endDate,
	startDate,
	image,
}: IEventsFields) {
	return (
		<article className="max-w-3xl rounded-md shadow-event">
			<div className="relative w-full h-52">
				<Image
					src={
						image
							? `https:${image.fields.file.url}`
							: "https://placekitten.com/500/500"
					}
					className="w-full rounded-t-md"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col px-8 pt-4 pb-6">
				<div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between 2xl:justify-between mb-4">
					<h2 className="text-2xl font-semibold">{title}</h2>
					{startDate && endDate && (
						<div className="text-lg font-bold">
							{new Date(startDate || "").toLocaleDateString("hu")} -{" "}
							{new Date(endDate || "").toLocaleDateString("hu")}
						</div>
					)}
				</div>
				<div className="mb-6 text-lg font-bold text-turquoise-dark">
					{location}
				</div>
				{miniContent && <div className="mb-6">{miniContent}</div>}
				<Link href={`/esemenyek/${slug}`}>
					<a className="flex items-center self-end pl-2 text-turquoise-dark hover:text-white hover:bg-turquoise-dark rounded-full border-2 border-turquoise-dark">
						<span className="mr-0.5 text-sm font-bold">Tovább olvasom</span>
						<ChevronRightIcon className="w-6 h-6" />
					</a>
				</Link>
			</div>
		</article>
	);
}
