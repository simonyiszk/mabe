import Image from "next/image";
import { notFound } from "next/navigation";

import Modal from "@/components/modal/Modal";
import { getGalleries, getOneGallery } from "@/utils/contentful";

type Props = {
	params: {
		slug: string;
		id: string;
	};
};

export default async function PhotoModal({ params }: Props) {
	const gallery = await getOneGallery(params.slug);
	const photo = gallery.fields.images.find((e) => e?.sys.id === params.id);

	if (!photo) {
		return notFound();
	}

	return (
		<Modal>
			<div className="flex flex-row items-center gap-2 p-4 text-white">
				<Image
					src={`https:${photo.fields.file?.url}`}
					alt="photo"
					sizes="(max-width: 1280px) 100vw, 1280px"
					className="object-contain"
					height={photo.fields.file?.details.image?.height}
					width={photo.fields.file?.details.image?.width}
				/>
			</div>
		</Modal>
	);
}

export async function generateStaticParams() {
	const galleries = await getGalleries();

	return (
		galleries.items
			.map(({ fields }) => {
				const { slug } = fields;
				const images = fields.images ?? [];

				return images.map((i) => ({
					slug,
					id: i?.sys.id,
				}));
			})
			.flat() ?? []
	);
}
