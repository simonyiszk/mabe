import Link from "next/link";

type HeaderLinkProps = {
	text: string;
	href: string;
	specialChar?: string;
};

export function HeaderLink({ text, href, specialChar }: HeaderLinkProps) {
	return (
		<li>
			<Link href={href}>
				<a>
					{text}
					{specialChar !== undefined && (
						<span className="text-turquoise-dark">{specialChar}</span>
					)}
				</a>
			</Link>
		</li>
	);
}
