import clsx from "clsx";
import Image from "next/image";

import type { IMembersFields } from "@/@types/generated/contentful";

export function MemberCard({ name, image, position, email }: IMembersFields) {
	return (
		<div className="flex flex-row items-center space-x-6 w-full font-roboto rounded-full shadow-memberCard">
			<div className="relative flex-shrink-0 w-28 xl:w-36 2xl:w-48 h-28 xl:h-36 2xl:h-48">
				<Image
					src={`https:${image.fields.file.url}`}
					layout="fill"
					alt={name}
					className="z-10 w-full h-full rounded-full"
					objectFit="cover"
				/>
				{/* Strange image background effect */}
				<div className="z-0 ml-1 w-full h-full bg-turquoise-dark rounded-full" />
			</div>
			<div className="flex flex-col self-stretch py-2 xl:py-4 pr-3">
				<h2
					className={clsx(
						name.length > 16 && "text-sm",
						"text-lg xl:text-3xl font-bold",
					)}
				>
					{name}
				</h2>
				<h2 className="flex-1 xl:text-xl font-light ">{position}</h2>
				<a href={`mailto:${email}`} className="text-sm xl:text-2xl">
					<p>{email}</p>
				</a>
			</div>
		</div>
	);
}
