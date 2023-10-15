import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLinkProps = {
	text: string;
	href: string;
	specialChar?: string;
};

// eslint-disable-next-line import/prefer-default-export
export function HeaderLink({ text, href, specialChar }: HeaderLinkProps) {
	const pathname = usePathname();

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					pathname === href && "text-turquoise-dark",
					"inline-block w-full font-bold hover:text-turquoise-dark",
				)}
			>
				{text}
				{specialChar !== undefined && (
					<span className="ml-0.5 text-turquoise-dark">{specialChar}</span>
				)}
			</Link>
		</li>
	);
}
