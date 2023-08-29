import Image from "next/legacy/image";

import highFive from "@/assets/images/high_five.svg";

export function BottomSection() {
	return (
		<section className="mx-auto flex flex-col-reverse items-center px-10 pt-8 md:mb-44 md:max-w-4xl md:flex-row md:pt-48 lg:max-w-7xl">
			<div className="max-w-2xl sm:text-right md:mr-40">
				<h3 className="mb-11 font-roboto-slab text-3xl font-semibold uppercase md:text-4xl lg:text-5xl">
					baráti eszmecserék
				</h3>
				<p className="text-2xl">
					A szakmai és baráti eszmecserék lebonyolítására az internetes fórum
					mellett szeretnénk személyes találkozásokra, szakmai és kötetlen
					eszmecserékre és egyéb ismeretterjesztő és ismerkedésre lehetőséget
					adó programokat szervezni.
				</p>
			</div>
			<div className="mb-3 shrink-0 md:mb-0">
				<Image src={highFive} width={272} height={272} priority />
			</div>
		</section>
	);
}
