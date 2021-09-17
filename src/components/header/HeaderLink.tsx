import Link from "next/link";

type HeaderLinkProps = {
	text: string
	href: string
	specialChar?: string
}

export function MyLink({ text, href, specialChar: special = "" }: HeaderLinkProps) {
	return (
		<li>
			<Link href={href}>
				<a>{text}{special !== "" && <span>{special}</span>}</a>
			</Link>
		</li>
	)
}
