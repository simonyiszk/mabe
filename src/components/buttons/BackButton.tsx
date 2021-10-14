import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";

export function BackButton({ href }: { href: string }) {
	return (
		<Link href={href}>
			<a className="flex items-center self-start pr-2 text-turquoise-dark hover:text-white hover:bg-turquoise-dark rounded-full border-2 border-turquoise-dark">
				<ChevronLeftIcon className="w-6 h-6" />
				<span className="ml-0.5 text-sm font-bold capitalize">vissza</span>
			</a>
		</Link>
	);
}
