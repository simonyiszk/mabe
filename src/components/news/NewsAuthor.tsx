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
		<div className="flex w-full flex-row items-center pt-8">
			<div className="relative h-16 w-16 shrink-0">
				<Image
					src={
						image?.fields ? `https:${image.fields.file.url}` : placeholderImage
					}
					className="rounded-full"
					layout="fill"
					objectFit="cover"
					alt={name}
				/>
			</div>
			<div className="px-8">
				<h1 className="font-bold">{name}</h1>
				{/* this part is used for Author description or News Date on blog/[slug] page */}
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
