import type { Entry } from "contentful";
import Image from "next/image";

import type { TypePartnersSkeleton } from "@/@types/generated";

export function Partner({
	logo,
	address,
	email,
	name,
	phone,
	website,
}: Entry<
	TypePartnersSkeleton,
	"WITHOUT_UNRESOLVABLE_LINKS",
	string
>["fields"]) {
	return (
		<div className="flex size-full max-w-sm flex-col rounded-gallery p-2 shadow-gallery">
			<div className="relative mx-auto size-40 shrink-0 p-4">
				<Image
					layout="fill"
					src={`https:${logo?.fields?.file?.url}`}
					alt={`${name} logója`}
					className="object-contain"
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
