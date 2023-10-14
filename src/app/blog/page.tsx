import { NewsCard } from "@/components/news/NewsCard";
import { getNews } from "@/utils/contentful";

export default async function NewsPage() {
	const news = await getNews();
	return (
		<>
			<h1 className="mb-12 font-roboto-slab text-5xl">Blog</h1>
			<section className="grid grid-cols-1 gap-24 xl:grid-cols-2">
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
	);
}
