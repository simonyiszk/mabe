import clsx from "clsx";
import React from "react";

import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLink } from "@/components/header/HeaderLink";
import { Logo } from "@/components/header/Logo";

import { HamburgerMenu } from "./HamburgerMenu";

export function Header() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);

	if (isNavbarOpen) {
		return (
			<HamburgerMenu
				buttonOnClick={() => {
					setNavbarOpen(!isNavbarOpen);
				}}
			/>
		);
	}

	return (
		<div className="grid sm:flex sm:flex-row grid-cols-3 items-center p-4 w-full h-14 shadow-md">
			<div className="flex items-center">
				<HamburgerButton
					onClick={() => {
						setNavbarOpen(!isNavbarOpen);
					}}
				/>
			</div>
			<div className="text-center">
				<Logo />
			</div>
			<nav className={clsx("hidden sm:block")}>
				<ul className="flex flex-row">
					<HeaderLink text="Kezdőlap" href="/" />
					<HeaderLink text="Tagok" href="/tagok" />
					<HeaderLink text="Hírek" href="/hirek" />
					<HeaderLink text="Események" href="/esemenyek" />
					<HeaderLink text="Partnerek" href="/partnerek" />
					<HeaderLink text="Galéria" href="/galeria" />
					<HeaderLink text="Csatlakozz" specialChar="+" href="/csatlakozz" />
				</ul>
			</nav>
		</div>
	);
}
