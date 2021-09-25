import Image from "next/image";

import { SelectedGalleryPageLayout } from "@/components/layouts/SelectedGalleryPageLayout";
import { GALLERYITEMS } from "@/mock";

export default function EventsPage() {
	const [{ gImages, title }] = GALLERYITEMS;

	const images = gImages.map((image, i) => (
		<Image
			src={image}
			// key={i}
			className="w-full transition duration-500 transform hover:scale-110"
			layout="fill"
			objectFit="cover"
		/>
	));

	return (
		<SelectedGalleryPageLayout>
			<h1 className="mb-12 text-5xl font-medium text-center">{title}</h1>
			<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 w-full h-full">
				{images.map((e) => (
					<div className="relative w-full max-w-xl h-64">{e}</div>
				))}
			</div>
		</SelectedGalleryPageLayout>
	);
}
