import Image from "next/image";

import link from "@/assets/images/link.svg";

import { Line } from "./Line";

export function LinkIconsSection() {
	return (
		<section className="relative px-10 sm:mx-auto max-w-7xl h-72">
			<div className="hidden sm:block absolute top-22 left-24 w-22 transform rotate-[67deg]">
				<Line />
			</div>
			<div className="absolute -right-14 sm:left-48 w-[292px]">
				<Image src={link} width={292} height={292} className="scale-x-[-1]" />
			</div>
			<div className="hidden sm:block absolute top-22 left-1/2 transform rotate-90">
				<Line />
			</div>
			<div className="absolute -left-4 sm:left-2/3 w-[156px] -rotate-12">
				<Image src={link} height={156} width={156} />
			</div>
			<div className="hidden sm:block absolute top-22 right-22 transform rotate-[112deg]">
				<Line />
			</div>
		</section>
	);
}
