import clsx from "clsx";
import Image from "next/image";

type MemberCardProps = {
	name: string;
	image_link: string;
	position: string;
	email: string;
};

export function MemberCard({
	name,
	image_link,
	position,
	email,
}: MemberCardProps) {
	return (
		<div className="flex flex-row items-center space-x-6 w-full font-roboto rounded-full shadow-memberCard">
			<div className="relative w-28 xl:w-36 2xl:w-48 h-28 xl:h-36 2xl:h-48">
				<Image
					src={image_link}
					layout="fill"
					alt={name}
					className="z-10 w-full h-full rounded-full"
					objectFit="cover"
				/>
				{/* Strange image background effect */}
				<div className="z-0 ml-1 w-full h-full bg-turquoise-dark rounded-full" />
			</div>
			<div className="flex relative flex-col h-full">
				<h1
					className={clsx(
						name.length > 16 && "text-sm",
						"text-lg xl:text-3xl font-bold",
					)}
				>
					{name}
				</h1>
				<h2 className="xl:text-3xl font-light ">{position}</h2>
				<a href={`mailto:${email}`} className="text-sm xl:text-2xl">
					<p>{email}</p>
				</a>
			</div>
		</div>
	);
}
