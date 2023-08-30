import { FacebookIcon } from "./icons/FacebookIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export type FooterSocialIconsProps = {
	FacebookLink?: string;
	InstagramLink?: string;
	LinkedInLink?: string;
};

export function FooterSocialIcons({
	FacebookLink,
	InstagramLink,
	LinkedInLink,
}: FooterSocialIconsProps) {
	return (
		<div className="flex flex-row space-x-10">
			<a
				href={FacebookLink || "https://facebook.com"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<FacebookIcon className="cursor-pointer hover:text-pink-light" />
			</a>
			<a
				href={InstagramLink || "https://instagram.com"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstagramIcon className="cursor-pointer hover:text-pink-light" />
			</a>
			<a
				href={LinkedInLink || "https://linkedin.com"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedinIcon className="cursor-pointer hover:text-pink-light" />
			</a>
		</div>
	);
}
