import Image from "next/image";

import { GalleryPageLayout } from "@/components/layouts/GalleryPageLayout";
import { EVENTS } from "@/mock";

export default function EventsPage() {
	const images: JSX.Element[] = [];
	// eslint-disable-next-line no-plusplus
	for (let i = 1; i <= 15; ++i) {
		images.push(
			<Image
				src={EVENTS[0].image}
				key={EVENTS[0].id}
				className="w-full "
				layout="fill"
				objectFit="cover"
			/>,
		);
	}

	return (
		<GalleryPageLayout>
			<div className="grid grid-cols-3 w-full h-full">
				{images.map((e) => (
					<div className="relative w-full max-w-xl h-32">{e}</div>
				))}
			</div>
		</GalleryPageLayout>
	);
}
