import Image from "next/image";

import pin from "@/assets/images/pin.svg";

// TODO: content from contentful
export function MiddleSection() {
	return (
		<section className="px-10 pt-48 pb-14 md:pb-36 lg:pb-52 -mt-28 lg:-mt-22 bg-pink-light -skew-y-2">
			<div className="flex flex-col-reverse sm:flex-col mx-auto max-w-7xl skew-y-2">
				<div className="content-center mx-auto max-w-4xl text-center">
					<h3 className="mb-11 font-roboto-slab text-3xl md:text-4xl lg:text-5xl font-semibold uppercase">
						kitölteni az egyetemek közti űrt
					</h3>
					<p className="text-2xl">
						Ez az egyesület az egyetemek közti űrt is hivatott kitölteni, tehát
						az ország bármely részéről lehet csatlakozni. Sőt, szeretnénk is,
						hogy az ország valamennyi biotechnológus kara képviselje magát
						köreinkben!
					</p>
				</div>
				<div className="flex justify-between mb-16 sm:mb-0">
					<Image src={pin} height={235} width={235} priority />
					<div className="-mx-8 w-full border-b-4 border-black border-dashed" />
					<Image src={pin} height={235} width={235} priority />
				</div>
			</div>
		</section>
	);
}
