import Image from "next/image";

import { getOneGallery } from "@/utils/contentful";

type Props = {
	params: { slug: string; id: string };
};

export default async function SelectedImagePage({ params }: Props) {
	const gallery = await getOneGallery(params.slug);
	const photo = gallery.fields.images.find((e) => e.sys.id === params.id);

	return (
		<div>
			<div className="relative mx-auto h-full w-[85vh]">
				<Image
					src={photo ? `https:${photo.fields.file.url}` : "/missing_img.png"}
					alt="photo"
					height={photo ? photo?.fields.file.details.image?.height : 0}
					width={photo ? photo?.fields.file.details.image?.width : 0}
				/>
			</div>
		</div>
	);
}
