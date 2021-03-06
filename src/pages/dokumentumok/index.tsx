import type { InferGetStaticPropsType } from "next";

import { DocumentCard } from "@/components/documents/DocumentCard";
import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { getDocuments } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			documents: await getDocuments(),
		},
	};
};

export default function DocumentsPage({
	documents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const years = new Set<number>();
	documents.items.forEach((e) =>
		years.add(new Date(e.sys.createdAt).getFullYear()),
	);
	const y = Array.from(years).sort((a, b) => b - a);
	return (
		<AnyPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Dokumentumok</h1>

				{y.length > 0 &&
					y.map((e) => (
						<div className="mb-4">
							<h3 className="my-4 text-2xl font-bold">{e}</h3>
							<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
								{documents?.items.map(({ fields }) => (
									<DocumentCard key={fields.name} {...fields} />
								))}
							</section>
						</div>
					))}
			</>
		</AnyPageLayout>
	);
}
