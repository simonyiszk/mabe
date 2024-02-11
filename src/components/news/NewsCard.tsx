import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import type { INewsFields } from "@/@types/generated/contentful";
import { NewsAuthor } from "@/components/news/NewsAuthor";

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
	return (
		<Link href={`/blog/${slug}`} passHref legacyBehavior>
			<div className="flex size-full cursor-pointer flex-col rounded-gallery bg-white shadow-event xl:flex-row">
				<div className="relative h-48 w-full xl:h-auto xl:min-h-newsImage xl:w-2/3">
					<Image
						src={
							coverImage
								? `https:${coverImage.fields.file.url}`
								: "/missing_img.png"
						}
						className={clsx(
							"rounded-t-md xl:rounded-l-md xl:rounded-t-none",
							coverImage ? "object-cover" : "object-contain",
						)}
						layout="fill"
						alt={title}
					/>
				</div>
				<div className="flex w-full flex-col justify-center space-y-2 px-8 py-4">
					<p>
						{new Date(date).toLocaleDateString("hu", datePrintConfig)}
						<time dateTime={date} />
					</p>
					<h1 className="text-2xl font-bold">{title}</h1>
					<p className="line-clamp-5">{miniContent}</p>
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
