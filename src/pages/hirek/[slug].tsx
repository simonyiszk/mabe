import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Entry } from "contentful";
import type { GetStaticProps } from "next";
import Image from "next/image";

import type { INewsFields } from "@/@types/generated/contentful";
import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { NewsAuthor } from "@/components/news/NewsAuthor";
import { NewsCard } from "@/components/news/NewsCard";
import { getNews } from "@/utils/contentful";
import { renderOptions } from "@/utils/RenderOptions";

export default function SelectedNewsPage({
	selectedNews: { title, content, coverImage, author, date },
	suggestedNews,
}: {
	selectedNews: INewsFields;
	suggestedNews: Entry<INewsFields>[];
}) {
	return (
		<AnyPageLayout>
			<div className="mb-16 w-full">
				<div className="relative w-full h-32 xl:h-72">
					<Image
						src={
							coverImage
								? `https:${coverImage.fields.file.url}`
								: "https://placekitten.com/500/500"
						}
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div>
					<h1 className="my-8 font-roboto-slab text-xl xl:text-3xl font-bold">
						{title}
					</h1>
					<p className="text-lg xl:text-justify">
						{documentToReactComponents(content, renderOptions)}
					</p>
				</div>
				<div>
					<NewsAuthor
						// @ts-expect-error reference unpacking
						name={author.fields.name}
						description={date}
						useDate
						// @ts-expect-error reference unpacking
						image_link={author.fields.image.fields.file.url}
					/>
				</div>
				<div className="my-16">
					<h3 className="mb-8 text-3xl italic ">További cikkek:</h3>
					<div className="grid grid-cols-1 2xl:grid-cols-2 gap-16">
						{/* eslint-disable-next-line react/destructuring-assignment */}
						{suggestedNews.map(({ fields }) => (
							<NewsCard
								key={fields.slug}
								title={fields.title}
								date={fields.date}
								author={
									<NewsAuthor
										// @ts-expect-error reference unpacking
										name={fields.author.fields.name}
										// @ts-expect-error reference unpacking
										description={fields.author.fields.desc}
										// @ts-expect-error reference unpacking
										image_link={fields.author.fields.image.fields.file.url}
										useDate={false}
									/>
								}
								description={fields.miniContent ? fields.miniContent : ""}
								image={fields.coverImage.fields.file.url}
								slug={fields.slug}
							/>
						))}
					</div>
				</div>
			</div>
		</AnyPageLayout>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const allNews = await getNews();
	const suggestedNews = { ...allNews };
	const selectedNews = allNews.items.find(
		(e) => e.fields.slug === params?.slug,
	);

	let { items: sItems } = suggestedNews;
	sItems = sItems
		.slice(0, 5)
		.sort(() => Math.random() - Math.random())
		.slice(0, 2);

	return {
		props: {
			selectedNews: selectedNews?.fields,
			suggestedNews: sItems,
		},
	};
};

export const getStaticPaths = async () => {
	const allNews = await getNews();
	return {
		paths: allNews.items.map(({ fields: { slug } }) => `/hirek/${slug}`) ?? [],
		fallback: false,
	};
};
