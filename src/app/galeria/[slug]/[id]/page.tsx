import Image from "next/image";
import Link from "next/link";

import { getGalleries, getOneGallery } from "@/utils/contentful";

type Props = {
	params: { slug: string; id: string };
};

export default async function SelectedImagePage({ params }: Props) {
	const gallery = await getOneGallery(params.slug);
	const photo = gallery.fields.images.find((e) => e?.sys.id === params.id);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative mx-auto h-full w-[85vh]">
				<Image
					src={photo ? `https:${photo.fields.file?.url}` : "/missing_img.png"}
					alt="photo"
					height={photo ? photo?.fields.file?.details.image?.height : 0}
					width={photo ? photo?.fields.file?.details.image?.width : 0}
				/>
			</div>
			<Link href={`/galeria/${params.slug}`} className="text-center">
				Vissza a galériához
			</Link>
		</div>
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
					id: i?.sys?.id,
				}));
			})
			.flat() ?? []
	);
}
