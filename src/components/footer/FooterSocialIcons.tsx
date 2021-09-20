import facebookIcon from "@/assets/images/facebookIcon.svg";
import instagramIcon from "@/assets/images/instagramIcon.svg";
import linkedinIcon from "@/assets/images/linkedinIcon.svg";
import { SocialIcon } from "@/components/footer/SocialIcon";

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
		<div className="flex flex-row space-x-10 hover:text-pink-light">
			<SocialIcon
				link={FacebookLink || "https://facebook.com"}
				svg={facebookIcon}
			/>

			<SocialIcon
				link={InstagramLink || "https://instagram.com"}
				svg={instagramIcon}
			/>

			<SocialIcon
				link={LinkedInLink || "https://linkedin.com"}
				svg={linkedinIcon}
			/>
		</div>
	);
}
