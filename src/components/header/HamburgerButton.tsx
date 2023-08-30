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
				"h-full w-8 cursor-pointer select-none",
			)}
			onClick={onClick}
		/>
	);
}
