import { HamburgerButton } from "@/components/header/HamburgerButton";
import { HeaderLinkList } from "@/components/header/HeaderLinkList";

type HamburgerMenuProps = {
	buttonOnClick: React.MouseEventHandler<SVGSVGElement>;
};

export function HamburgerMenu({ buttonOnClick }: HamburgerMenuProps) {
	return (
		<div className="fixed top-0 z-50 h-screen w-full bg-white py-4 pl-16">
			<ul className="flex h-full flex-col justify-evenly font-roboto-slab">
				<li>
					<HamburgerButton onClick={buttonOnClick} active />
				</li>
				<HeaderLinkList />
			</ul>
		</div>
	);
}
