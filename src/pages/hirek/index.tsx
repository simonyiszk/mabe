import type { InferGetStaticPropsType } from "next";

import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { NewsAuthor } from "@/components/news/NewsAuthor";
import { NewsCard } from "@/components/news/NewsCard";
import { getNews } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			news: await getNews(),
		},
	};
};

export default function NewsPage({
	news,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<AnyPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Hírek</h1>
				<section className="grid grid-cols-1 xl:grid-cols-2 gap-24">
					{news.items.map((e) => (
						<NewsCard
							key={e.sys.id}
							slug={e.fields.slug}
							title={e.fields.title}
							image={e.fields.coverImage.fields.file.url}
							description={e.fields.miniContent ?? ""}
							author={
								<NewsAuthor
									// @ts-expect-error reference unpacking
									name={e.fields.author.fields.name}
									// @ts-expect-error reference unpacking
									description={e.fields.author.fields.desc}
									// @ts-expect-error reference unpacking
									image_link={e.fields.author.fields.image.fields.file.url}
								/>
							}
							date={e.fields.date}
						/>
					))}
				</section>
			</>
		</AnyPageLayout>
	);
}
