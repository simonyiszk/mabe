import "react-image-lightbox/style.css";

import type { GetStaticProps } from "next";
import Image from "next/legacy/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

import type { IGalleryAlbumFields } from "@/@types/generated/contentful";
import { SelectedGalleryPageLayout } from "@/components/layouts/SelectedGalleryPageLayout";
import { getGalleries, getOneGallery } from "@/utils/contentful";

export default function SelectedGalleryPage({
	gallery: { title, images },
}: {
	gallery: IGalleryAlbumFields;
}) {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<SelectedGalleryPageLayout>
			<h1 className="mb-12 text-center text-5xl font-medium">{title}</h1>
			<div
				className="grid h-full w-full gap-2"
				style={{
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
				}}
			>
				{images.map((e, i) => (
					<div className="relative h-64 w-full max-w-xl">
						<Image
							unoptimized
							src={`https:${e.fields.file.url}`}
							layout="fill"
							className="w-full cursor-pointer transition duration-500 hover:scale-110"
							objectFit="cover"
							onClick={() => {
								setPhotoIndex(i);
								setIsOpen(true);
							}}
						/>
					</div>
				))}

				{isOpen && (
					<Lightbox
						mainSrc={`https:${images[photoIndex].fields.file.url}`}
						nextSrc={`https:${
							images[(photoIndex + 1) % images.length].fields.file.url
						}`}
						prevSrc={`https:${
							images[(photoIndex + images.length - 1) % images.length].fields
								.file.url
						}`}
						onCloseRequest={() => setIsOpen(false)}
						onMoveNextRequest={() =>
							setPhotoIndex((photoIndex + 1) % images.length)
						}
						onMovePrevRequest={() =>
							setPhotoIndex((photoIndex + images.length - 1) % images.length)
						}
					/>
				)}
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
