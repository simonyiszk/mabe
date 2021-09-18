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
			<Link href={href}>
				<a
					// eslint-disable-next-line tailwindcss/no-custom-classname
					className={clsx(
						router.pathname === href && "text-turquoise-dark",
						"font-bold hover:text-turquoise-dark",
					)}
				>
					{text}
					{specialChar !== undefined && (
						<span className="text-turquoise-dark ">{specialChar}</span>
					)}
				</a>
			</Link>
		</li>
	);
}
