import {
	LocationMarkerIcon,
	MailIcon,
	PhoneIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";

type ContactWithIconProps = {
	iconType?: "Mail" | "MapPinPoint" | "Phone";
	text: string;
	className?: string;
};

const icons = {
	Mail: <MailIcon />,
	MapPinPoint: <LocationMarkerIcon className="text-sm" />,
	Phone: <PhoneIcon />,
};

export function ContactWithIcon({
	text,
	className,
	iconType,
}: ContactWithIconProps) {
	return (
		<div className="flex flex-row justify-center items-center space-x-2">
			<span className="w-6">{iconType && icons[iconType]}</span>
			<span className={clsx("font-bold", className && className)}>{text}</span>
		</div>
	);
}
