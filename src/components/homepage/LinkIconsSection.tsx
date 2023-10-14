import Image from "next/image";

import link from "@/assets/images/link.svg";

import { Line } from "./Line";

export function LinkIconsSection() {
	return (
		<section className="relative h-72 max-w-7xl px-10 sm:mx-auto">
			<div className="absolute left-24 top-22 hidden w-22 rotate-[67deg] sm:block">
				<Line />
			</div>
			<div className="absolute -right-14 w-[292px] sm:left-48">
				<Image
					src={link}
					width={292}
					height={292}
					className="scale-x-[-1]"
					priority
					alt="link illustration"
				/>
			</div>
			<div className="absolute left-1/2 top-22 hidden rotate-90 sm:block">
				<Line />
			</div>
			<div className="absolute -left-4 w-[156px] -rotate-12 sm:left-2/3">
				<Image
					src={link}
					height={156}
					width={156}
					priority
					alt="illustration"
				/>
			</div>
			<div className="absolute right-22 top-22 hidden rotate-[112deg] sm:block">
				<Line />
			</div>
		</section>
	);
}
