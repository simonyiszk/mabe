import clsx from "clsx";
import { HiMenu } from "react-icons/hi";

type HeaderHamburgerButtonProps = {
	onClick: React.MouseEventHandler<SVGSVGElement>;
	active?: boolean;
};

export function HamburgerButton({
	onClick,
	active,
}: HeaderHamburgerButtonProps) {
	return (
		<HiMenu
			className={clsx(
				active && "text-turquoise-dark ",
				"h-full w-8 cursor-pointer select-none",
			)}
			onClick={onClick}
		/>
	);
}
