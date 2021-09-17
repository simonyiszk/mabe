import { MenuIcon } from "@heroicons/react/outline";

type HeaderHamburgerProps = {
	onClick: React.MouseEventHandler<SVGSVGElement>;
};

export function Hamburger({ onClick }: HeaderHamburgerProps) {
	return (
		<MenuIcon
			className="w-8 h-full cursor-pointer select-none"
			onClick={onClick}
		/>
	);
}
