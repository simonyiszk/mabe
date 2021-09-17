import clsx from "clsx";

import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";

type HamburgerMenuProps = {
	buttonOnClick: React.MouseEventHandler<SVGSVGElement>;
};

export function HamburgerMenu({ buttonOnClick }: HamburgerMenuProps) {
	return (
		<div className={clsx("z-50", "py-4 pl-16 w-full h-screen")}>
			<ul className="flex flex-col justify-evenly h-full">
				<li>
					<HamburgerButton onClick={buttonOnClick} active />
				</li>
				<HeaderLinkList />
			</ul>
		</div>
	);
}
