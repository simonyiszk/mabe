import Link from "next/link";

type HeaderLink = {
	text: string
	to: string
	special?: string
}

export function MyLink({ text, to, special = "" }: HeaderLink) {
	return (
		<li>
			<Link href={to}>
				<a>{text}{special !== "" && <span>{special}</span>}</a>
			</Link>
		</li>
	)
}
