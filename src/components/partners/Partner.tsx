import Image from "next/legacy/image";

import type { IPartnersFields } from "@/@types/generated/contentful";

export function Partner({
	logo,
	address,
	email,
	name,
	phone,
	website,
}: IPartnersFields) {
	return (
		<div className="flex h-full w-full max-w-sm flex-col rounded-gallery p-2 shadow-gallery">
			<div className="relative mx-auto h-40 w-40 shrink-0 p-4">
				<Image
					layout="fill"
					objectFit="contain"
					src={`https:${logo?.fields.file.url}`}
					alt={`${name} logója`}
				/>
			</div>
			<div className="w-full flex-1 space-y-4 rounded-b-lg p-6 text-center text-xs">
				<div className="space-y-4 text-xs">
					<p className="text-base font-bold">{name}</p>
					<hr className="h-0.5 rounded-3xl border-none bg-pink-dark " />
					{address && <p>{address}</p>}
					<div className="flex flex-col gap-1">
						{phone && (
							<a className="inline-block" href={`tel:${phone}`}>
								{phone}
							</a>
						)}
						{email && (
							<a
								href={`mailto:${email}`}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block"
							>
								{email}
							</a>
						)}
					</div>
					<a
						href={website}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block text-pink-dark"
					>
						{website}
					</a>
				</div>
			</div>
		</div>
	);
}
