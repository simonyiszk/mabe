import Image from "next/image";
import Link from "next/link";

import type { INewsFields } from "@/@types/generated/contentful";
import { NewsAuthor } from "@/components/news/NewsAuthor";

const SLICE_AFTER = 300;

const datePrintConfig = {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
} as Intl.DateTimeFormatOptions;

export function NewsCard({
	slug,
	coverImage,
	title,
	author,
	miniContent,
	date,
}: INewsFields) {
	/**
	 Slice text after `SLICE_AFTER` char where space occurs
	*/
	const shortenedDescription = miniContent
		? `${miniContent.slice(
				0,
				SLICE_AFTER +
					miniContent.slice(SLICE_AFTER, SLICE_AFTER + 30).indexOf(" "),
		  )}...`
		: "...";
	return (
		<Link href={`/hirek/${slug}`} passHref>
			<div className="flex flex-col xl:flex-row w-full h-full bg-white rounded-gallery shadow-event cursor-pointer">
				<div className="relative w-full xl:w-2/3 h-48 xl:h-auto xl:min-h-newsImage">
					<Image
						src={
							coverImage
								? `https:${coverImage.fields.file.url}`
								: "https://placekitten.com/500/500"
						}
						className="rounded-t-md xl:rounded-t-none xl:rounded-l-md"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-col justify-center py-4 px-8 space-y-2 w-full">
					<p>
						{new Date(date).toLocaleDateString("hu", datePrintConfig)}
						<time dateTime={date} />
					</p>
					<h1 className="text-2xl font-bold">{title}</h1>
					<p>{shortenedDescription}</p>
					<NewsAuthor
						// @ts-expect-error reference unpacking
						name={author.fields.name}
						// @ts-expect-error reference unpacking
						desc={author.fields.desc}
						// @ts-expect-error reference unpacking
						image={author.fields.image}
					/>
				</div>
			</div>
		</Link>
	);
}
