import Image from "next/image";
import Link from "next/link";

import hand from "@/assets/images/hand.svg";

export function PartnersCard() {
	return (
		<Link href="/partnerek" passHref>
			<div className="relative z-30 py-8 px-4 lg:px-16 mx-auto max-w-xs sm:max-w-2xl bg-white rounded-mainPage shadow-mainPageCards cursor-pointer">
				<div className="flex flex-col lg:flex-row lg:justify-center items-center space-y-4 lg:space-y-0">
					<div className="flex-shrink-0">
						<Image src={hand} height={78} priority />
					</div>
					<div className="w-auto">
						<h3 className="font-roboto-slab text-2xl lg:text-3xl font-medium text-center lg:text-left hover:text-turquoise-dark uppercase">
							Partnerekkel való megismerkedés
						</h3>
					</div>
				</div>
			</div>
		</Link>
	);
}
