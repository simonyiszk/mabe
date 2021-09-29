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
				<FacebookIcon className="hover:text-pink-light cursor-pointer" />
			</a>
			<a
				href={InstagramLink || "https://instagram.com"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<InstagramIcon className="hover:text-pink-light cursor-pointer" />
			</a>
			<a
				href={LinkedInLink || "https://linkedin.com"}
				target="_blank"
				rel="noopener noreferrer"
			>
				<LinkedinIcon className="hover:text-pink-light cursor-pointer" />
			</a>
		</div>
	);
}
