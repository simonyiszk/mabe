import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SelectedGalleryPageLayout } from "@/components/layouts/SelectedGalleryPageLayout";
import { getOneGallery } from "@/utils/contentful";

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = params;

	const event = await getOneGallery(slug);
	const { title } = event.fields;

	return {
		title: `${title} | Magyar Biotechnológus-hallgatók Egyesülete`,
	};
}

export default async function SelectedGalleryPage({ params }: Props) {
	const gallery = await getOneGallery(params.slug);
	const { title, images, slug } = gallery.fields;

	return (
		<SelectedGalleryPageLayout>
			<h1 className="mb-12 text-center text-5xl font-medium">{title}</h1>
			<div
				className="grid h-full w-full gap-2"
				style={{
					gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
				}}
			>
				{images.map((e) => (
					<Link
						scroll={false}
						href={`/galeria/${slug}/${e.sys.id}`}
						key={e.sys.id}
						className="relative h-64 w-full max-w-xl overflow-hidden rounded-sm"
					>
						<Image
							src={`https:${e.fields.file.url}`}
							fill
							className="w-full cursor-pointer object-cover transition duration-500 hover:scale-110"
							alt={title}
							loading="lazy"
							sizes="(max-width: 640px) 100vw, 640px"
						/>
					</Link>
				))}
			</div>
		</SelectedGalleryPageLayout>
	);
}
