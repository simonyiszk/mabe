import Image from "next/image";

type NewsAuthorProps = {
	name: string;
	description?: string;
	image_link: string;
};

export function NewsAuthor({ name, description, image_link }: NewsAuthorProps) {
	return (
		<div className="flex flex-row items-center pt-8 w-full">
			<div className="relative w-16 h-16">
				<Image
					src={
						image_link.includes("https://")
							? image_link
							: `https://${image_link}`
					}
					className="rounded-full"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="px-8">
				<h1 className="font-bold">{name}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
}
