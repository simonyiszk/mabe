import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/legacy/image";
import Link from "next/link";

import type { IGalleryAlbumFields } from "@/@types/generated/contentful";

export function GalleryCard({ title, slug, images }: IGalleryAlbumFields) {
	return (
		<Link href={`/galeria/${slug}`} passHref legacyBehavior>
			<div className="h-full w-full max-w-xl cursor-pointer rounded-gallery bg-white shadow-gallery">
				<div className="relative h-52 w-full">
					<Image
						src={`https:${images[0].fields.file.url}`}
						className="w-full rounded-t-md "
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-row items-center justify-between p-4">
					<h2 className="text-2xl font-bold">{title}</h2>
					<ChevronRightIcon className="h-12 w-12 text-pink-dark" />
				</div>
			</div>
		</Link>
	);
}
