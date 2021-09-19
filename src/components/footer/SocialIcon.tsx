type SocialIconProps = {
	link: string;
	svg: JSX.Element;
};

export function SocialIcon({ link, svg }: SocialIconProps) {
	return (
		<a href={link} target="_blank" rel="noopener noreferrer">
			<span>{svg}</span>
		</a>
	);
}
