import Image from "next/image";

type SocialIconProps = {
	link: string;
	svg: string;
};

export function SocialIcon({ link, svg }: SocialIconProps) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<Image src={svg} alt="icon" />
		</a>
	);
}
