import Image from "next/legacy/image";
import Link from "next/link";

import hand from "@/assets/images/hand.svg";

export function PartnersCard() {
	return (
		<Link href="/partnerek" passHref legacyBehavior>
			<div className="relative z-30 mx-auto max-w-xs cursor-pointer rounded-mainPage bg-white px-4 py-8 shadow-mainPageCards sm:max-w-2xl lg:px-16">
				<div className="flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-y-0">
					<div className="shrink-0">
						<Image src={hand} height={78} priority />
					</div>
					<div className="w-auto">
						<h3 className="text-center font-roboto-slab text-2xl font-medium uppercase hover:text-turquoise-dark lg:text-left lg:text-3xl">
							Partnerekkel való megismerkedés
						</h3>
					</div>
				</div>
			</div>
		</Link>
	);
}
