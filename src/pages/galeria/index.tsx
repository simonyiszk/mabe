import { GalleryCard } from "@/components/gallery/GalleryCard";
import { GalleryPageLayout } from "@/components/layouts/GalleryPageLayout";
import { GALLERYITEMS } from "@/mock";

export default function GalleryPage() {
	return (
		<GalleryPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Galéria</h1>
				<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24">
					{/* 	okay for temporary mockup purposes */}
					{GALLERYITEMS.map((e) => (
						<GalleryCard key={e.id} {...e} />
					))}
				</section>
			</>
		</GalleryPageLayout>
	);
}
