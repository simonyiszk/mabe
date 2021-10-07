import type { InferGetStaticPropsType } from "next";

import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
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
							coverImage={e.fields.coverImage}
							miniContent={e.fields.miniContent}
							author={e.fields.author}
							date={e.fields.date}
							content={e.fields.content}
						/>
					))}
				</section>
			</>
		</AnyPageLayout>
	);
}
