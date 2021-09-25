import { EventsPageLayout } from "@/components/layouts/EventsPageLayout";
import { NewsAuthor } from "@/components/news/NewsAuthor";
import { NewsCard } from "@/components/news/NewsCard";
import { EVENTS } from "@/mock";

export default function EventsPage() {
	return (
		<EventsPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Hírek</h1>
				<section className="grid grid-cols-1 xl:grid-cols-2 gap-24">
					{EVENTS.map((e) => (
						<NewsCard
							key={e.id}
							id={e.id}
							image={e.image}
							description={e.content}
							title={e.title}
							author={
								<NewsAuthor
									name="Cute Seal"
									description="vm leírás"
									image_link="https://placekitten.com/700/500"
								/>
							}
							date={new Date()}
						/>
					))}
				</section>
			</>
		</EventsPageLayout>
	);
}
