import Image from "next/image";

import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
import { NewsAuthor } from "@/components/news/NewsAuthor";
import { NewsCard } from "@/components/news/NewsCard";
import { NEWSITEMS } from "@/mock";

type SelectedNewsPageProps = {
	imageLink: string;
	title: string;
	text: string;
	author?: JSX.Element;
	otherArticles?: JSX.Element[] | JSX.Element;
};

export default function SelectedNewsPage() {
	const [{ title, author, content, image, otherArticles }] = NEWSITEMS;
	return (
		<AnyPageLayout>
			<div className="mb-16 w-full h-auto font-roboto">
				<div className="relative w-full h-32 xl:h-72">
					<Image src={image} layout="fill" objectFit="cover" />
				</div>
				<div>
					<h1 className="my-8 font-roboto-slab text-xl xl:text-3xl font-bold">
						{title}
					</h1>
					{/* TODO rich text */}
					<p className="text-lg xl:text-justify">{content}</p>
				</div>
				<div>
					<NewsAuthor
						name={author.name}
						description={author.description}
						image_link={author.image}
					/>
				</div>
				<div className="my-16">
					<h3 className="mb-8 text-3xl italic ">További cikkek:</h3>
					<div className="grid grid-cols-1 2xl:grid-cols-2 gap-16">
						{otherArticles?.map((e) => (
							<NewsCard
								title={e.title}
								date={e.date}
								id={e.id}
								author={
									<NewsAuthor
										name={e.author.name}
										description={e.author.description}
										image_link={e.author.image}
									/>
								}
								description={e.content}
								image={e.image}
							/>
						))}
					</div>
				</div>
			</div>
		</AnyPageLayout>
	);
}
