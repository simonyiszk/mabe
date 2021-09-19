import Image from "next/image";
import Link from "next/link";

import hand from "@/assets/images/hand.svg";

export function PartnersCard() {
	return (
		<Link href="/partnerek" passHref>
			<div className="py-8 px-4 m-auto max-w-xs sm:max-w-xl rounded-mainPage shadow-mainPageCards">
				<div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
					<Image src={hand} height={78} />
					<div>
						<h3 className="text-2xl lg:text-3xl font-medium text-center lg:text-left uppercase">
							Partnerekkel való megismerkedés
						</h3>
					</div>
				</div>
			</div>
		</Link>
	);
}
