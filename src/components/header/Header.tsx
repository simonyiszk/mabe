import clsx from "clsx";
import React from "react";

import { Hamburger } from "@/components/header/Hamburger";
import { MyLink } from "@/components/header/HeaderLink";
import { Logo } from "@/components/header/Logo";

export function Header() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);

	return (
		<div className="grid sm:flex sm:flex-row grid-cols-3 items-center p-4 w-full h-14 shadow-md">
			<div className="flex items-center">
				<Hamburger onClick={() => setNavbarOpen(!isNavbarOpen)} />
			</div>
			<div className="text-center">
				<Logo />
			</div>
			<nav className={clsx("hidden sm:block")}>
				<ul className="flex flex-row">
					<MyLink text="Kezdőlap" href="/" />
					<MyLink text="Tagok" href="/tagok" />
					<MyLink text="Hírek" href="/hirek" />
					<MyLink text="Események" href="/esemenyek" />
					<MyLink text="Partnerek" href="/partnerek" />
					<MyLink text="Galéria" href="/galeria" />
					<MyLink text="Csatlakozz" specialChar="+" href="/csatlakozz" />
				</ul>
			</nav>
		</div>
	);
}
