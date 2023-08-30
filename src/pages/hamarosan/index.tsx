import { ComingSoonCard } from "@/components/comingSoon/comingSoonCard";
import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";

export default function ComingSoonPage() {
	return (
		<AnyPageLayout>
			<div className="mx-auto h-full max-w-xl">
				<ComingSoonCard
					title="Hamarosan érkezik"
					lowerText="addig is tekintsd meg további oldalainkat!"
				/>
			</div>
		</AnyPageLayout>
	);
}
