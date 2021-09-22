import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

type GalleryCardProps = {
	id: number;
	image: string;
	title: string;
};

export function GalleryCard({ id, image, title }: GalleryCardProps) {
	return (
		<Link href={`/galeria/${id}`} passHref>
			<div className="w-full max-w-xl h-full bg-white rounded-gallery shadow-gallery cursor-pointer">
				<div className="relative w-full h-52">
					<Image
						src={image}
						className="w-full rounded-t-md "
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-row justify-between items-center py-4 px-4">
					<h2 className="text-2xl font-bold">{title}</h2>
					<ChevronRightIcon className="w-12 h-12 text-pink-dark" />
				</div>
			</div>
		</Link>
	);
}
