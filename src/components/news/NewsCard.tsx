import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
	id: number | string;
	image: string;
	title: string;
	description: string;
	date: string | Date;
	/**
	 * NewsAuthor
	 */
	author: JSX.Element;
};

const SLICE_AFTER = 300;

export function NewsCard({
	id,
	image,
	title,
	description,
	author,
	date,
}: NewsCardProps) {
	const d = date instanceof Date ? date.toLocaleDateString("hu-HU") : date;
	/**
	 Slice text after `SLICE_AFTER` char where space occurs
	*/
	const shortenedDescription = `${description.slice(
		0,
		SLICE_AFTER + description.slice(SLICE_AFTER, SLICE_AFTER + 30).indexOf(" "),
	)}...`;
	return (
		<Link href={`/hirek/${id}`} passHref>
			<div className="flex flex-col xl:flex-row w-full h-full bg-white rounded-gallery shadow-event cursor-pointer">
				<div className="relative w-full xl:w-2/3 h-48 xl:h-auto xl:min-h-newsImage">
					<Image
						src={image.includes("https://") ? image : `https://${image}`}
						className="rounded-t-md xl:rounded-t-none xl:rounded-l-md"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-col justify-center py-4 px-8 space-y-2 w-full">
					<p>
						{d}
						<time dateTime={d} />
					</p>
					<h1 className="text-2xl font-bold">{title}</h1>
					<p>{shortenedDescription}</p>
					{author}
				</div>
			</div>
		</Link>
	);
}
