import { ContactWithIcon } from "@/components/footer/ContactWithIcon";
import {
	FooterSocialIcons,
	type FooterSocialIconsProps,
} from "@/components/footer/FooterSocialIcons";

type FooterProps = {
	links?: FooterSocialIconsProps;
};

// eslint-disable-next-line import/prefer-default-export
export function Footer({ links }: FooterProps) {
	return (
		<footer className="flex w-full flex-col items-center space-y-5 bg-gray py-5 text-white">
			<h1 className="font-roboto-slab text-xl">Kapcsolat</h1>
			<div className="space-y-3">
				<ContactWithIcon text="mbioteche@gmail.com" iconType="Mail" />
				<ContactWithIcon
					text="1202 Budapest Perczel Mór utca 16."
					iconType="MapPinPoint"
				/>
				<ContactWithIcon text="+36703692392" iconType="Phone" />
			</div>
			<FooterSocialIcons
				FacebookLink={links?.FacebookLink}
				InstagramLink={links?.InstagramLink}
				LinkedInLink={links?.LinkedInLink}
			/>
			<p className="mt-3 font-roboto-slab">
				designed and made with ❤️ by{" "}
				<a
					href="https://schdesign.hu"
					target="_blank"
					rel="noopener noreferrer"
					className="underline hover:text-pink-dark "
				>
					schdesign
				</a>
			</p>
		</footer>
	);
}
