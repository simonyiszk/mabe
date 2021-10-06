import type { InferGetStaticPropsType } from "next";

import { EventCard } from "@/components/events/EventCard";
import { EventsPageLayout } from "@/components/layouts/EventsPageLayout";
import { getEvents } from "@/utils/contentful";

export const getStaticProps = async () => {
	return {
		props: {
			events: await getEvents(),
		},
	};
};

export default function EventsPage({
	events,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<EventsPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Események</h1>
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
					{events.items.map((e) => (
						<EventCard key={e.sys.id} {...e.fields} />
					))}
				</section>
			</>
		</EventsPageLayout>
	);
}
