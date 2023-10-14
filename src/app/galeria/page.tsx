import { GalleryCard } from "@/components/gallery/GalleryCard";
import AnyPageLayout from "@/components/layouts/AnyPageLayout";
import { getGalleries } from "@/utils/contentful";

export default async function GalleryPage() {
	const galleries = await getGalleries();
	return (
		<AnyPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Galéria</h1>
				<section className="grid grid-cols-1 gap-24 sm:grid-cols-2 xl:grid-cols-3">
					{galleries.items.map(({ fields }) => (
						<GalleryCard key={fields.slug} {...fields} />
					))}
				</section>
			</>
		</AnyPageLayout>
	);
}
