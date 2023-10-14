import Image from "next/image";

import pin from "@/assets/images/pin.svg";

// TODO: content from contentful
export function MiddleSection() {
	return (
		<section className="-mt-28 -skew-y-2 bg-pink-light px-10 pb-14 pt-48 md:pb-36 lg:-mt-22 lg:pb-52">
			<div className="mx-auto flex max-w-7xl skew-y-2 flex-col-reverse sm:flex-col">
				<div className="mx-auto max-w-4xl content-center text-center">
					<h3 className="mb-11 font-roboto-slab text-3xl font-semibold uppercase md:text-4xl lg:text-5xl">
						kitölteni az egyetemek közti űrt
					</h3>
					<p className="text-2xl">
						Ez az egyesület az egyetemek közti űrt is hivatott kitölteni, tehát
						az ország bármely részéről lehet csatlakozni. Sőt, szeretnénk is,
						hogy az ország valamennyi biotechnológus kara képviselje magát
						köreinkben!
					</p>
				</div>
				<div className="mb-16 flex justify-between sm:mb-0">
					<Image
						src={pin}
						height={235}
						width={235}
						priority
						alt="illustration"
					/>
					<div className="-mx-8 w-full border-b-4 border-dashed border-black" />
					<Image
						src={pin}
						height={235}
						width={235}
						priority
						alt="illustration"
					/>
				</div>
			</div>
		</section>
	);
}
