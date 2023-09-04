import { HeaderLink } from "@/components/header/HeaderLink";

export function HeaderLinkList() {
	return (
		<>
			<HeaderLink text="Kezdőlap" href="/" />
			<HeaderLink text="Blog" href="/blog" />
			<HeaderLink text="Csapatunk" href="/csapatunk" />
			<HeaderLink text="Események" href="/esemenyek" />
			<HeaderLink text="Partnerek" href="/partnerek" />
			<HeaderLink text="Galéria" href="/galeria" />
			<HeaderLink text="Dokumentumok" href="/dokumentumok" />
			<HeaderLink text="Csatlakozz" specialChar="+" href="/csatlakozz" />
		</>
	);
}
