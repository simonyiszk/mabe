import clsx from "clsx";

import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLink } from "@/components/header/HeaderLink";

type HamburgerMenuProps = {
	buttonOnClick: React.MouseEventHandler<any>;
};

export function HamburgerMenu({ buttonOnClick }: HamburgerMenuProps) {
	return (
		<div className={clsx("z-50", "py-4 pl-16 w-full h-screen")}>
			<ul className="flex flex-col justify-evenly h-full font-bold">
				<li>
					<HamburgerButton onClick={buttonOnClick} active />
				</li>
				<HeaderLink text="Kezdőlap" href="/" />
				<HeaderLink text="Tagok" href="/tagok" />
				<HeaderLink text="Hírek" href="/hirek" />
				<HeaderLink text="Események" href="/esemenyek" />
				<HeaderLink text="Partnerek" href="/partnerek" />
				<HeaderLink text="Galéria" href="/galeria" />
				<HeaderLink text="Csatlakozz" specialChar="+" href="/csatlakozz" />
			</ul>
		</div>
	);
}
