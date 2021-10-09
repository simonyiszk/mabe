import Image from "next/image";

import darts from "@/assets/images/darts.svg";

// TODO: content from contentful
export function Goals() {
	return (
		<section className="flex flex-col sm:flex-row justify-between items-center px-10 sm:mx-auto mb-16 sm:mb-24 max-w-7xl">
			<div className="flex-1 sm:mr-11 mb-11 sm:mb-0 w-72 sm:w-80 lg:w-full">
				<Image src={darts} height={418} width={418} priority />
			</div>
			<div className="flex-1 max-w-3xl">
				<h3 className="mb-11 font-roboto-slab text-3xl md:text-4xl lg:text-5xl font-medium uppercase">
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
