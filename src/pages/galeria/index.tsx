import { GalleryCard } from "@/components/gallery/GalleryCard";
import { GalleryPageLayout } from "@/components/layouts/GalleryPageLayout";
import { EVENTS } from "@/mock";

export default function GalleryPage() {
	return (
		<GalleryPageLayout>
			<>
				<h1 className="mb-12 text-5xl">Galéria</h1>
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
					{/* 	okay for temporary mockup purposes */}
					{EVENTS.map((e) => (
						<GalleryCard key={e.id} {...e} />
					))}
				</section>
			</>
		</GalleryPageLayout>
	);
}
