import { ComingSoonCard } from "@/components/comingSoon/comingSoonCard";

export default function ComingSoonPage() {
	return (
		<div className="mx-auto h-full max-w-xl">
			<ComingSoonCard
				title="Hamarosan érkezik"
				lowerText="addig is tekintsd meg további oldalainkat!"
			/>
		</div>
	);
}
