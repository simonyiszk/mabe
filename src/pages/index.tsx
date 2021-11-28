import type { InferGetStaticPropsType } from "next";

import { BottomSection } from "@/components/homepage/BottomSection";
import { Goals } from "@/components/homepage/Goals";
import { Hero } from "@/components/homepage/Hero";
import { JoinCard } from "@/components/homepage/JoinCard";
import { LinkIconsSection } from "@/components/homepage/LinkIconsSection";
import { MiddleSection } from "@/components/homepage/MiddleSection";
import { PartnersCard } from "@/components/homepage/PartnersCard";
import { getGeneralData } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			generalData: await getGeneralData(),
		},
	};
};

export default function Page({
	generalData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="overflow-hidden">
			<Hero />
			<Goals />
			<PartnersCard />
			<MiddleSection />
			<BottomSection />
			<LinkIconsSection />
			<JoinCard
				joinLink={
					generalData.fields.mabeformLink || "https://mbioteche.hu/hamarosan"
				}
			/>
		</div>
	);
}
