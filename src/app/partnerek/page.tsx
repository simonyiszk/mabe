import type { Metadata } from "next";

import { Partner } from "@/components/partners/Partner";
import { getPartners } from "@/utils/contentful";

export const metadata: Metadata = {
	title: "Partnerek | Magyar Biotechnológus-hallgatók Egyesülete",
};

export default async function PartnersPage() {
	const partners = await getPartners();
	return (
		<>
			<h1 className="mb-12 font-roboto-slab text-5xl">Partnerek</h1>
			<section
				className="grid gap-8"
				style={{
					gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
				}}
			>
				{partners.items.map((partner) => (
					<Partner key={partner.sys.id} {...partner.fields} />
				))}
			</section>
		</>
	);
}
