import Image from "next/image";

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
		<div className="p-2 w-56">
			<div className="flex relative items-center p-4 mx-auto w-40 h-40">
				<Image
					layout="fill"
					objectFit="contain"
					src={`https:${logo?.fields.file.url}`}
					alt={`${name} logója`}
				/>
			</div>
			<div className="flex-col justify-center p-6 space-y-4 w-52 text-xs text-center rounded-b-lg shadow-partner">
				<div className="space-y-4 text-xs">
					<p className="text-base font-bold">{name}</p>
					<hr className="h-0.5 bg-pink-dark rounded-3xl border-none " />
					{address && <p>{address}</p>}
					<div>
						{phone && (
							<>
								<a href={`tel:${phone}`}>Telefon: {phone}</a>
								<br />
							</>
						)}
						{email && (
							<a
								href={`mailto:${email}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								Email: {email}
							</a>
						)}
					</div>
					<div>
						<a
							href={website}
							target="_blank"
							rel="noopener noreferrer"
							className="text-pink-dark"
						>
							{website}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
