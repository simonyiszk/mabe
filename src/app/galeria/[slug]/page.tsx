import type { Metadata } from "next";

import { SelectedGalleryPageLayout } from "@/components/layouts/SelectedGalleryPageLayout";
import { getOneGallery } from "@/utils/contentful";

import GalleryGrid from "./gallery-grid";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;

	const event = await getOneGallery(slug);
	const { title } = event.fields;

	return {
		title: `${title} | Magyar Biotechnológus-hallgatók Egyesülete`,
	};
}

export default async function SelectedGalleryPage({ params }: Props) {
	const gallery = await getOneGallery(params.slug);
	const { title, images } = gallery.fields;

	return (
		<SelectedGalleryPageLayout>
			<h1 className="mb-12 text-center text-5xl font-medium">{title}</h1>
			<div
				className="grid h-full w-full gap-2"
				style={{
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
				}}
			>
				<GalleryGrid images={images} title={title} />
			</div>
		</SelectedGalleryPageLayout>
	);
}
