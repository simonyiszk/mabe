import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { Partner } from "@/components/ui/Partner";
import { PARTNERS } from "@/mock";

export default function PartnersPage() {
	return (
		<AnyPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Partnerek</h1>
				<section className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-20 place-items-center">
					{PARTNERS.map((e) => (
						<Partner
							logo={e.logo}
							name={e.name}
							address={e.address}
							tel={e.tel}
							email={e.email}
							website={e.website}
						/>
					))}
				</section>
			</>
		</AnyPageLayout>
	)
}
