import Image from "next/image";

import highFive from "@/assets/images/high_five.svg";

export function BottomSection() {
	return (
		<section className="flex flex-col-reverse md:flex-row items-center px-10 pt-8 md:pt-48 mx-auto md:mb-44 md:max-w-4xl lg:max-w-7xl">
			<div className="md:mr-40 max-w-2xl sm:text-right">
				<h3 className="mb-11 font-roboto-slab text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
					baráti eszmecserék
				</h3>
				<p className="text-2xl">
					A szakmai és baráti eszmecserék lebonyolítására az internetes fórum
					mellett szeretnénk személyes találkozásokra, szakmai és kötetlen
					eszmecserékre és egyéb ismeretterjesztő és ismerkedésre lehetőséget
					adó programokat szervezni.
				</p>
			</div>
			<div className="flex-shrink-0 mb-3 md:mb-0">
				<Image src={highFive} width={272} height={272} />
			</div>
		</section>
	);
}
