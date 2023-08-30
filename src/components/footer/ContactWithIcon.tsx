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
		<div className="flex flex-row items-center justify-center space-x-2">
			<span className="w-6">{iconType && icons[iconType]}</span>
			<span
				className={clsx(
					"text-center font-bold hover:text-pink-light",
					className && className,
				)}
			>
				{iconType === "Mail" && <a href={`mailto:${text}`}>{text}</a>}
				{iconType === "MapPinPoint" && (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`https://maps.google.com/?q=${text}`}
					>
						{text}
					</a>
				)}
				{iconType === "Phone" && (
					<a href={`tel:${text}`}>
						<span>{text}</span>
					</a>
				)}
			</span>
		</div>
	);
}
