import { HeaderLink } from "@/components/header/HeaderLink";

export function HeaderLinkList() {
	return (
		<>
			<HeaderLink text="Kezdőlap" href="/" />
			<HeaderLink text="Blog" href="/blog" />
			<HeaderLink text="Események" href="/esemenyek" />
			<HeaderLink text="Csapatunk" href="/csapatunk" />
			<HeaderLink text="Galéria" href="/galeria" />
			<HeaderLink text="Partnerek" href="/partnerek" />
			<HeaderLink text="Csatlakozz" specialChar="+" href="/csatlakozz" />
		</>
	);
}
