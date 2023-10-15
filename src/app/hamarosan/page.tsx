import type { Metadata } from "next";

import { ComingSoonCard } from "@/components/comingSoon/comingSoonCard";

export const metadata: Metadata = {
	title: "Hamarosan | Magyar Biotechnológus-hallgatók Egyesülete",
};

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
