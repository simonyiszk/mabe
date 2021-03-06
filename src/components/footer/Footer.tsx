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
		<footer className="flex flex-col items-center py-5 space-y-5 w-full text-white bg-gray">
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
					className="hover:text-pink-dark underline "
				>
					schdesign
				</a>
			</p>
		</footer>
	);
}
