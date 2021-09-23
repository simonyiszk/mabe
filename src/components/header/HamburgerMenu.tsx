import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";

type HamburgerMenuProps = {
	buttonOnClick: React.MouseEventHandler<SVGSVGElement>;
};

export function HamburgerMenu({ buttonOnClick }: HamburgerMenuProps) {
	return (
		<div className="fixed top-0 z-50 py-4 pl-16 w-full h-screen bg-white">
			<ul className="flex flex-col justify-evenly h-full font-roboto-slab">
				<li>
					<HamburgerButton onClick={buttonOnClick} active />
				</li>
				<HeaderLinkList />
			</ul>
		</div>
	);
}
