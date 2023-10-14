"use client";

import type { Asset } from "contentful";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

export default function GalleryGrid({
	images,
	title,
}: {
	images: Asset[];
	title: string;
}) {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{images.map((e, i) => (
				<div key={e.sys.id} className="relative h-64 w-full max-w-xl">
					<Image
						unoptimized
						src={`https:${e.fields.file.url}`}
						fill
						className="w-full cursor-pointer transition duration-500 hover:scale-110"
						objectFit="cover"
						onClick={() => {
							setPhotoIndex(i);
							setIsOpen(true);
						}}
						alt={title}
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
						images[(photoIndex + images.length - 1) % images.length].fields.file
							.url
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
		</>
	);
}
