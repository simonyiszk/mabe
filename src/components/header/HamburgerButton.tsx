import { MenuIcon } from "@heroicons/react/outline";
import clsx from "clsx";

type HeaderHamburgerButtonProps = {
	onClick: React.MouseEventHandler<SVGSVGElement>;
	active?: boolean;
};

export function HamburgerButton({
	onClick,
	active,
}: HeaderHamburgerButtonProps) {
	return (
		<MenuIcon
			className={clsx(
				active && "text-turquoise-dark ",
				"w-8 h-full cursor-pointer select-none",
			)}
			onClick={onClick}
		/>
	);
}
