import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

type HeaderLinkProps = {
	text: string;
	href: string;
	specialChar?: string;
};

export function HeaderLink({ text, href, specialChar }: HeaderLinkProps) {
	const router = useRouter();

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					router.pathname === href && "text-turquoise-dark",
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
