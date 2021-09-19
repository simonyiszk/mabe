import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
	id: number;
	image: string;
	title: string;
	startDate: Date;
	endDate: Date;
	place: string;
	content: string;
};

export function EventCard({
	id,
	image,
	title,
	startDate,
	endDate,
	place,
	content,
}: EventCardProps) {
	return (
		<article className="max-w-3xl rounded-md shadow-event">
			<div className="relative w-full h-52">
				<Image
					src={image}
					className="w-full rounded-t-md"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col px-8 pt-4 pb-6">
				<div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
					<h2 className="text-2xl font-semibold">{title}</h2>
					<div className="text-lg font-bold">
						<span className="whitespace-nowrap">
							{startDate.toLocaleDateString("hu")} -{" "}
						</span>
						<span className="whitespace-nowrap">
							{endDate.toLocaleDateString("hu")}
						</span>
					</div>
				</div>
				<div className="mb-6 text-lg font-bold text-turquoise-dark">
					{place}
				</div>
				<div className="mb-6">{content}</div>
				<Link href={`/esemenyek/${id}`}>
					<a className="flex items-center self-end pl-2 text-turquoise-dark hover:text-white hover:bg-turquoise-dark rounded-full border-2 border-turquoise-dark">
						<span className="mr-0.5 text-sm font-bold">Tovább olvasom</span>
						<ChevronRightIcon className="w-6 h-6" />
					</a>
				</Link>
			</div>
		</article>
	);
}
