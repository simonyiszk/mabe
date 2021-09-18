import { ContactWithIcon } from "@/components/footer/ContactWithIcon";
import { FooterSocialIcons } from "@/components/footer/FooterSocialIcons";

export function Footer() {
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
				<FooterSocialIcons />
			</div>
		</footer>
	);
}
