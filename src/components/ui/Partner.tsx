import Image from 'next/image'
import Link from "next/link";

type PartnerProps = {
	logo: string // URL a logóhoz
	name: string // a partner neve
	address: string // a partner címe
	tel: string // telefonszám
	email: string // email cím
	website: string // weboldal
};

export function Partner({ logo, address, email, name, tel, website }: PartnerProps) {
	// protokol kitörlése a címből
	const shortUrl = website.replace(/(^\w+:|^)\/\//, '');

	return (
		<div className="p-2 w-56 partner">
			<div className="flex items-center p-4 w-40 h-40 mx-auto relative">
				<Image
					layout="fill"
					objectFit="contain"
					src={logo}
					alt={`${name} logója`}
				/>
			</div>
			<div
				className="flex-col justify-center p-6 space-y-4 w-52 text-xs text-center rounded-b-lg shadow-figma">
				<div className="space-y-4 text-xs drop-shadow-none	">
					<p className="text-base font-bold">{name}</p>
					<hr className="h-0.5 bg-pink-dark rounded-3xl border-none " />
					<p>{address}</p>
					<div>
						<Link href={`tel:${tel}`}>
							<a>Telefon: {tel}</a>
						</Link>
						<br/>
						<Link href={`mailto:${email}`}>
							<a>Email: {email}</a>
						</Link>
					</div>
					<div>
						<Link href={website}>
							<a className="text-pink-dark">{shortUrl}</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
