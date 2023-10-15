import Image from "next/image";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

import type { IGalleryAlbumFields } from "@/@types/generated/contentful";

export function GalleryCard({ title, slug, images }: IGalleryAlbumFields) {
	return (
		<Link href={`/galeria/${slug}`} passHref legacyBehavior>
			<div className="h-full w-full max-w-xl cursor-pointer rounded-gallery bg-white shadow-gallery">
				<div className="relative h-52 w-full">
					<Image
						src={`https:${images[0].fields.file.url}`}
						className="w-full rounded-t-md "
						fill
						objectFit="cover"
						alt={`${title || "Album"} borítóképe`}
					/>
				</div>
				<div className="flex flex-row items-center justify-between p-4">
					<h2 className="text-2xl font-bold">{title}</h2>
					<HiChevronRight className="h-12 w-12 text-pink-dark" />
				</div>
			</div>
		</Link>
	);
}
