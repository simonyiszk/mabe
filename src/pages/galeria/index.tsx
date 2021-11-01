import type { InferGetStaticPropsType } from "next";

import { GalleryCard } from "@/components/gallery/GalleryCard";
import { GalleryPageLayout } from "@/components/layouts/GalleryPageLayout";
import { getGalleries } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			galleries: await getGalleries(),
		},
	};
};

export default function GalleryPage({
	galleries,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<GalleryPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Galéria</h1>
				<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-24">
					{galleries.items.map(({ fields }) => (
						<GalleryCard key={fields.slug} {...fields} />
					))}
				</section>
			</>
		</GalleryPageLayout>
	);
}
