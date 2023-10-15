import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

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
		<article className="flex max-w-3xl flex-col rounded-md shadow-event">
			<div className="relative aspect-video w-full shrink-0">
				<Image
					src={image ? `https:${image.fields.file.url}` : "/missing_img.png"}
					className="w-full rounded-t-md"
					fill
					objectFit={image ? "cover" : "contain"}
					alt={`${title || "Esemény"} borítóképe`}
				/>
			</div>
			<div className="flex flex-1 flex-col justify-between px-8 pb-6 pt-4">
				<div>
					<div className="mb-4 flex flex-col md:flex-row md:justify-between lg:flex-col 2xl:flex-row 2xl:justify-between">
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
				</div>
				<Link
					href={`/esemenyek/${slug}`}
					className="flex items-center place-self-end self-end rounded-full border-2 border-turquoise-dark pl-2 text-turquoise-dark hover:bg-turquoise-dark hover:text-white"
				>
					<span className="mr-0.5 text-sm font-bold capitalize">
						tovább olvasom
					</span>
					<HiChevronRight className="h-6 w-6" />
				</Link>
			</div>
		</article>
	);
}
