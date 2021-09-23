import { EventCard } from "@/components/events/EventCard";
import { EventsPageLayout } from "@/components/layouts/EventsPageLayout";
import { EVENTS } from "@/mock";

export default function EventsPage() {
	return (
		<EventsPageLayout>
			<>
				<h1 className="mb-12 font-roboto-slab text-5xl">Események</h1>
				<section className="grid grid-cols-1 lg:grid-cols-2 gap-24">
					{EVENTS.map((e) => (
						<EventCard key={e.id} {...e} />
					))}
				</section>
			</>
		</EventsPageLayout>
	);
}
