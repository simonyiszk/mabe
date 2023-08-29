import Image from "next/legacy/image";

import darts from "@/assets/images/darts.svg";

// TODO: content from contentful
export function Goals() {
	return (
		<section className="mb-16 flex max-w-7xl flex-col items-center justify-between px-10 sm:mx-auto sm:mb-24 sm:flex-row">
			<div className="mb-11 w-72 flex-1 sm:mb-0 sm:mr-11 sm:w-80 lg:w-full">
				<Image src={darts} height={418} width={418} priority />
			</div>
			<div className="max-w-3xl flex-1">
				<h3 className="mb-11 font-roboto-slab text-3xl font-medium uppercase md:text-4xl lg:text-5xl">
					egyesület célja
				</h3>
				<p className="text-2xl xl:font-semibold">
					Az Egyesület célja, hogy a hazai biotechnológus-hallgatóknak egy olyan
					közösséget teremtsen, ahol megismerkedhetnek egymással és olyan
					kapcsolatokat alakíthatnak ki, amelyeket később az üzleti életben is
					kamatoztathatnak. Cégek és munkáltatók bevonásával képet szeretnénk
					nyújtani, hogy milyen lehetőségek is várnak a jövő biotechnológusaira
					(ránk és rátok) a tanulmányaink után és esetleg már közben is.
				</p>
			</div>
		</section>
	);
}
