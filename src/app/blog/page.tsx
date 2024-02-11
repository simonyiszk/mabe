import type { Metadata } from "next";

import { NewsCard } from "@/components/news/NewsCard";
import { getNews } from "@/utils/contentful";

export const metadata: Metadata = {
	title: "Blog | Magyar Biotechnológus-hallgatók Egyesülete",
};

export default async function NewsPage() {
	const news = await getNews();
	return (
		<>
			<h1 className="mb-12 font-roboto-slab text-5xl">Blog</h1>
			<section className="grid grid-cols-1 gap-24 xl:grid-cols-2">
				{news.items.map((e) => (
					<NewsCard key={e.sys.id} {...e.fields} />
				))}
			</section>
		</>
	);
}
