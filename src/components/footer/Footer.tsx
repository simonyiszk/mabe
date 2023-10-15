import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import { type FooterSocialIconsProps } from "@/components/footer/FooterSocialIcons";

type FooterProps = {
	links?: FooterSocialIconsProps;
};

// eslint-disable-next-line import/prefer-default-export
export function Footer({ links }: FooterProps) {
	return (
		<footer className="flex  w-full flex-col items-center space-y-5 bg-gray py-16  text-white">
			<div className="container grid w-full grid-cols-1 gap-8 px-4">
				<div className="flex flex-row justify-center md:justify-start">
					<div className="relative flex h-16 w-64 justify-center">
						<Image
							src="/mabe-text.svg"
							alt="mabe mininmal logo"
							fill
							className="h-full w-full"
						/>
					</div>
				</div>

				<ul className="flex flex-row flex-wrap justify-center gap-2 font-roboto-slab text-lg md:justify-start">
					<li>
						<Link href="/blog">Blog</Link>
					</li>
					<li>
						<Link href="/esemenyek">Események</Link>
					</li>
					<li>
						<Link href="/csapatunk">Események</Link>
					</li>
					<li>
						<Link href="/galeria">Galéria</Link>
					</li>
					<li>
						<Link href="/dokumentumok">Dokumentumok</Link>
					</li>
					<li>
						<Link href="/partnerek">Partnerek</Link>
					</li>
				</ul>

				<h2 className="text-center font-roboto-slab text-2xl font-medium md:text-left lg:text-4xl">
					Ha érdekel a MaBE tevékenysége, és szeretnél részt venni
					programjainkon,{" "}
					<Link
						scroll
						href="/csatlakozz"
						className=" text-turquoise-dark underline"
					>
						csatlakozz
					</Link>{" "}
					hozzánk!
				</h2>

				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex flex-col items-center md:items-start">
						<span className="font-roboto text-sm font-medium">
							designed and developed by
						</span>
						<a href="https://schdesign.hu" target="_blank" rel="noreferrer">
							<div className="relative h-8 w-32">
								<Image src="/schdesign-white.svg" alt="schdesign logo" fill />
							</div>
						</a>
					</div>
					<div className="flex flex-row gap-2 text-4xl">
						<a href={links?.FacebookLink} target="_blank" rel="noreferrer">
							<FaFacebook />
						</a>
						<a href={links?.InstagramLink} target="_blank" rel="noreferrer">
							<FaInstagram />
						</a>
						<a href={links?.LinkedInLink} target="_blank" rel="noreferrer">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
