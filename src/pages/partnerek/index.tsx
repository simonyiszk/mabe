import type { InferGetStaticPropsType } from "next";

import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { Partner } from "@/components/partners/Partner";
import { getPartners } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			partners: await getPartners(),
		},
	};
};

export default function PartnersPage({
	partners,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AnyPageLayout>
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
		</AnyPageLayout>
	);
}
