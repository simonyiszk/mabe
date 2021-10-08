import { BottomSection } from "@/components/homepage/BottomSection";
import { Goals } from "@/components/homepage/Goals";
import { Hero } from "@/components/homepage/Hero";
import { JoinCard } from "@/components/homepage/JoinCard";
import { LinkIconsSection } from "@/components/homepage/LinkIconsSection";
import { MiddleSection } from "@/components/homepage/MiddleSection";
import { PartnersCard } from "@/components/homepage/PartnersCard";

export default function Page() {
	return (
		<div className="overflow-hidden">
			<Hero />
			<Goals />
			<PartnersCard />
			<MiddleSection />
			<BottomSection />
			<LinkIconsSection />
			{/* TODO: link from contentful */}
			<JoinCard joinLink="https://mbioteche.hu/hamarosan" />
		</div>
	);
}
