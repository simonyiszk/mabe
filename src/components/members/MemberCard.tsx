import Image from "next/image";

import type { IMembersFields } from "@/@types/generated/contentful";

import placeholderImage from "../../../public/Portrait_Placeholder.png";

export function MemberCard({ name, image, position, email }: IMembersFields) {
	return (
		<div className="flex flex-row items-center space-x-3 w-full rounded-2xl shadow-memberCard">
			<div className="relative flex-shrink-0 w-28 xl:w-36 2xl:w-48 h-28 xl:h-36 2xl:h-48 border-r-4 border-turquoise-dark">
				<Image
					src={
						image?.fields ? `https:${image.fields.file.url}` : placeholderImage
					}
					layout="fill"
					alt={name}
					className="w-full h-full rounded-l-2xl"
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col self-stretch py-2 xl:py-4 pr-3">
				<h2 className="2xl:mb-3 text-lg xl:text-xl 2xl:text-3xl font-bold">
					{name}
				</h2>
				<h2 className="flex-1 text-sm xl:text-base 2xl:text-lg font-light">
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
