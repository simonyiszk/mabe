import type { InferGetStaticPropsType } from "next";

import { EventCard } from "@/components/events/EventCard";
import { AnyPageLayout } from "@/components/layouts/AnyPageLayout";
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
		<AnyPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Események</h1>
				<section className="grid grid-cols-1 gap-24 lg:grid-cols-2">
					{events.items
						.slice(0)
						.reverse()
						.map((e) => (
							<EventCard key={e.sys.id} {...e.fields} />
						))}
				</section>
			</>
		</AnyPageLayout>
	);
}
