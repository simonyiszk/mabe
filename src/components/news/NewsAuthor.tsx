import clsx from "clsx";
import Image from "next/image";

import type { INewsAuthorFields } from "@/@types/generated/contentful";

import placeholderImage from "../../../public/Portrait_Placeholder.png";

/**
 * @link https://github.com/simonyiszk/mabe/pull/81#discussion_r724126608
 */
type NewsAuthorProps = {
	usedAsDate?: boolean;
} & INewsAuthorFields;

export function NewsAuthor({
	name,
	image,
	desc: lowerContent,
	usedAsDate,
}: NewsAuthorProps) {
	if (typeof name !== "string") {
		return null;
	}

	return (
		<div className="flex flex-row items-center pt-8 w-full">
			<div className="relative flex-shrink-0 w-16 h-16">
				<Image
					src={
						image?.fields ? `https:${image.fields.file.url}` : placeholderImage
					}
					className="rounded-full"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="px-8">
				<h1 className="font-bold">{name}</h1>
				{/* this part is used for Author description or News Date on hirek/[slug] page */}
				<p
					className={clsx(usedAsDate && "text-2xl italic text-turquoise-dark")}
				>
					{usedAsDate && lowerContent
						? new Date(lowerContent).toLocaleString("hu", {
								month: "long",
								day: "numeric",
						  })
						: lowerContent}
				</p>
			</div>
		</div>
	);
}
