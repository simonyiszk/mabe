import Router from "next/router";
import React from "react";

import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HamburgerMenu } from "@/components/header/HamburgerMenu";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";
import { Logo } from "@/components/header/Logo";

export function Header() {
	const [isNavbarOpen, setNavbarOpen] = React.useState(false);

	Router.events.on("routeChangeStart", () => {
		setNavbarOpen(false);
	});

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
		<div className="sticky top-0 z-40 grid h-14 w-full grid-cols-3 items-center bg-white px-8 align-middle font-roboto-slab text-gray shadow-md lg:flex lg:flex-row lg:justify-center lg:space-x-16 lg:px-16 lg:py-0">
			<div className="flex items-center lg:hidden">
				<HamburgerButton
					onClick={() => {
						setNavbarOpen(!isNavbarOpen);
					}}
				/>
			</div>

			<div className="flex items-center justify-center">
				<Logo />
			</div>

			<nav className="hidden lg:block">
				<ul className="flex flex-row space-x-7">
					<HeaderLinkList />
				</ul>
			</nav>
		</div>
	);
}
