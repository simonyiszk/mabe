import Image from "next/legacy/image";
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
		<Link href={`/hirek/${slug}`} passHref legacyBehavior>
			<div className="flex h-full w-full cursor-pointer flex-col rounded-gallery bg-white shadow-event xl:flex-row">
				<div className="relative h-48 w-full xl:h-auto xl:min-h-newsImage xl:w-2/3">
					<Image
						src={
							coverImage
								? `https:${coverImage.fields.file.url}`
								: "/missing_img.png"
						}
						className="rounded-t-md xl:rounded-l-md xl:rounded-t-none"
						layout="fill"
						objectFit={coverImage ? "cover" : "contain"}
					/>
				</div>
				<div className="flex w-full flex-col justify-center space-y-2 px-8 py-4">
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
