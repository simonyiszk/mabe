import Image from "next/image";

import type { IMembersFields } from "@/@types/generated/contentful";

import placeholderImage from "../../../public/Portrait_Placeholder.png";

export function MemberCard({ name, image, position, email }: IMembersFields) {
	return (
		<div className="flex w-full flex-row items-center space-x-3 rounded-2xl shadow-memberCard">
			<div className="relative h-28 w-28 shrink-0 border-r-4 border-turquoise-dark xl:h-36 xl:w-36 2xl:h-48 2xl:w-48">
				<Image
					src={
						image?.fields ? `https:${image.fields.file.url}` : placeholderImage
					}
					layout="fill"
					alt={name}
					className="h-full w-full rounded-l-2xl"
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col self-stretch py-2 pr-3 xl:py-4">
				<h2 className="text-lg font-bold xl:text-xl 2xl:mb-3 2xl:text-3xl">
					{name}
				</h2>
				<h2 className="flex-1 text-sm font-light xl:text-base 2xl:text-lg">
					{position}
				</h2>
				<a
					href={`mailto:${email}`}
					className="text-sm xl:text-base 2xl:text-lg"
				>
					<p>{email}</p>
				</a>
			</div>
		</div>
	);
}
