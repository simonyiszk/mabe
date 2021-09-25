import { JoinUsButton } from "../buttons/JoinUsButton";

type JoinCardProps = {
	/**
	 * Csatlakozz Form linkje, valószínűleg contentfulból.
	 */
	joinLink: string;
};

export function JoinCard({ joinLink }: JoinCardProps) {
	return (
		<section className="relative z-30 px-10 mt-11 sm:-mt-11 mb-16">
			<div className="flex flex-col justify-evenly py-16 px-5 lg:px-32 mx-auto space-y-12 w-full max-w-7xl text-xl bg-white rounded-3xl shadow-mainPageCards">
				<h2 className="font-roboto-slab text-xl lg:text-4xl font-semibold text-center uppercase">
					csatlakozz!
				</h2>
				<p className="text-center">
					Amennyiben az érdeklődésedet felkeltettük és szívesen részese lennél
					ennek a közösségnek, vagy támogatnád munkánkat, mint szponzor, keress
					fel elérhetőségeink egyikén.
				</p>
				<div className="text-right">
					<p className="text-turquoise-dark">Üdvözlettel,</p>
					<p>A MaBE vezetősége</p>
				</div>
				<div className="mx-auto text-center">
					<JoinUsButton joinLink={joinLink} />
				</div>
			</div>
		</section>
	);
}
