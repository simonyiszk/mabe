import Link from "next/link";

type PartnerProps = {
	logo: string // URL a logóhoz
	name: string // a partner neve
	address: string // a partner címe
	tel: string // telefonszám
	email: string // email cím
	website: string // weboldal
};

export default function Partner({ logo, address, email, name, tel, website }: PartnerProps) {
	// protokol kitörlése a címből
	const shortUrl = website.replace(/(^\w+:|^)\/\//, '');

	return (
		<div className="partner w-56 p-2 space-y-2">
			<div className="object-center">
				<img
					src={logo}
					alt={`${name} logója`}
				/>
			</div>
			<div
				style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
				className="w-52 p-6 text-xs text-center space-y-4 rounded-b-lg flex-col justify-center">
				<div className=" text-xs space-y-4">
					<p className="font-bold text-base">{name}</p>
					<hr className="border-none bg-pink-dark h-0.5 rounded-3xl " />
					<p>{address}</p>
					<div className="">
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
