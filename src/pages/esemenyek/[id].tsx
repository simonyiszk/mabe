import { ChevronLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

import { EventsPageLayout } from "@/components/layouts/EventsPageLayout";
import { EVENTS } from "@/mock";

export default function EventsPage() {
	// TODO: contentful
	const [{ content, title, endDate, startDate, image, place }] = EVENTS;
	return (
		<EventsPageLayout>
			<article>
				<div className="relative mb-14 w-full h-52">
					<Image
						src={image}
						className="w-full"
						layout="fill"
						objectFit="cover"
					/>
				</div>
				<div className="flex flex-col pb-6">
					<div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row md:justify-between 2xl:justify-between mb-5">
						<h2 className="text-4xl lg:text-6.25xl font-medium">{title}</h2>
						<div className="text-2xl lg:text-5xl font-normal">
							{startDate.toLocaleDateString("hu")} -{" "}
							{endDate.toLocaleDateString("hu")}
						</div>
					</div>
					<div className="mb-10 text-2xl lg:text-4xl font-bold text-turquoise-dark">
						{place}
					</div>
					{/* TODO: render rich text from Contentful */}
					<div className="mb-10">{content}</div>
					<Link href="/esemenyek">
						<a className="flex items-center self-start pr-2 text-turquoise-dark hover:text-white hover:bg-turquoise-dark rounded-full border-2 border-turquoise-dark">
							<ChevronLeftIcon className="w-6 h-6" />
							<span className="ml-0.5 text-sm font-bold">Vissza</span>
						</a>
					</Link>
				</div>
			</article>
		</EventsPageLayout>
	);
}
