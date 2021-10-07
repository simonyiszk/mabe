import Image from "next/image";

import type { INewsAuthorFields } from "@/@types/generated/contentful";

export function NewsAuthor({ name, image, desc }: INewsAuthorFields) {
	return (
		<div className="flex flex-row items-center pt-8 w-full">
			<div className="relative w-16 h-16">
				<Image
					src={
						image
							? `https:${image.fields.file.url}`
							: "https://placekitten.com/500/500"
					}
					className="rounded-full"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="px-8">
				<h1 className="font-bold">{name}</h1>
				<p>{desc || ":)"}</p>
			</div>
		</div>
	);
}
