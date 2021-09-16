import { Hamburger } from "@/components/header/Hamburger";
import { MyLink } from "@/components/header/HeaderLink";
import { Logo } from "@/components/header/Logo";

export function Header() {
	return (
		<>
			<Hamburger/>
			<Logo/>
			<nav>
				<ul>
					<MyLink text="Kezdőlap" to="/" />
					<MyLink text="Tagok" to="/tagok" />
					<MyLink text="Hírek" to="/hirek" />
					<MyLink text="Események" to="/esemenyek" />
					<MyLink text="Partnerek" to="/partnerek" />
					<MyLink text="Galéria" to="/galeria" />
					<MyLink text="Csatlakozz" special="+" to="/csatlakozz" />
				</ul>
			</nav>
		</>
	)
}
