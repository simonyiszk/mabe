import { ChevronLeftIcon } from "@heroicons/react/solid";
import Link from "next/link";

export function BackButton({ href }: { href: string }) {
	return (
		<Link
			href={href}
			className="flex items-center self-start rounded-full border-2 border-turquoise-dark pr-2 text-turquoise-dark hover:bg-turquoise-dark hover:text-white"
		>
			<ChevronLeftIcon className="h-6 w-6" />
			<span className="ml-0.5 text-sm font-bold capitalize">vissza</span>
		</Link>
	);
}
