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
		<div className="grid lg:flex sticky top-0 lg:flex-row grid-cols-3 lg:justify-center items-center lg:py-0 px-8 lg:px-16 lg:space-x-16 w-full h-14 text-gray align-middle shadow-md">
			<div className="flex lg:hidden items-center">
				<HamburgerButton
					onClick={() => {
						setNavbarOpen(!isNavbarOpen);
					}}
				/>
			</div>

			<div className="flex justify-center items-center">
				<Logo />
			</div>

			<nav className="hidden lg:block">
				<ul className="flex flex-row space-x-7">
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
