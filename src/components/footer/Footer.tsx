import { ContactWithIcon } from "@/components/footer/ContactWithIcon";
import {
	FooterSocialIcons,
	FooterSocialIconsProps,
} from "@/components/footer/FooterSocialIcons";

type FooterProps = {
	links?: FooterSocialIconsProps;
};

export function Footer({ links }: FooterProps) {
	return (
		<footer className="relative z-40 py-2 w-full h-64 text-white bg-gray">
			<div className="container flex flex-col justify-evenly items-center mx-auto h-full font-bold">
				<h1 className="text-xl">Kapcsolat</h1>
				<ContactWithIcon text="mbioteche@gmail.com" iconType="Mail" />
				<ContactWithIcon
					text="1202 Budapest Perczel Mór utca 16."
					iconType="MapPinPoint"
				/>
				<ContactWithIcon text="+36703692392" iconType="Phone" />
				<FooterSocialIcons
					FacebookLink={links?.FacebookLink}
					InstagramLink={links?.InstagramLink}
					LinkedInLink={links?.LinkedInLink}
				/>
			</div>
		</footer>
	);
}
