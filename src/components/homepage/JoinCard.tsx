import { JoinUsButton } from "../buttons/JoinUsButton";

type JoinCardProps = {
	/**
	 * Csatlakozz Form linkje, valószínűleg contentfulból.
	 */
	joinLink: string;
};

export function JoinCard({ joinLink }: JoinCardProps) {
	return (
		<section className="relative z-30 mb-16 mt-11 px-10 sm:-mt-11">
			<div className="mx-auto flex w-full max-w-7xl flex-col justify-evenly space-y-12 rounded-3xl bg-white px-5 py-16 text-xl shadow-mainPageCards lg:px-32">
				<h2 className="text-center font-roboto-slab text-xl font-semibold uppercase lg:text-4xl">
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
