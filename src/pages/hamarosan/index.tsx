import { ComingSoonCard } from "@/components/comingSoon/comingSoonCard";
import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";

export default function ComingSoonPage() {
	return (
		<AnyPageLayout>
			<div className="mx-auto max-w-xl h-full">
				<ComingSoonCard
					title="Hamarosan érkezik"
					lowerText="addig is tekintsd meg további oldalainkat!"
				/>
			</div>
		</AnyPageLayout>
	);
}
