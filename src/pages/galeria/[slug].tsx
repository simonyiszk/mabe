import type { GetStaticProps } from "next";
import Image from "next/image";

import type { IGalleryAlbumFields } from "@/@types/generated/contentful";
import { SelectedGalleryPageLayout } from "@/components/layouts/SelectedGalleryPageLayout";
import { getGalleries, getOneGallery } from "@/utils/contentful";

export default function EventsPage({
	gallery: { title, images },
}: {
	gallery: IGalleryAlbumFields;
}) {
	return (
		<SelectedGalleryPageLayout>
			<h1 className="mb-12 text-5xl font-medium text-center">{title}</h1>
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full h-full">
				{images.map((e) => (
					<div className="relative w-full max-w-xl h-64">
						<Image
							src={`https:${e.fields.file.url}`}
							layout="fill"
							className="w-full transition duration-500 transform hover:scale-110 cursor-pointer"
							objectFit="cover"
						/>
					</div>
				))}
			</div>
		</SelectedGalleryPageLayout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const gallery = await getOneGallery(params?.slug);
	return {
		props: {
			gallery: gallery.fields,
		},
	};
};

export const getStaticPaths = async () => {
	const allGalleries = await getGalleries();
	return {
		paths:
			allGalleries.items.map(({ fields: { slug } }) => `/galeria/${slug}`) ??
			[],
		fallback: false,
	};
};
