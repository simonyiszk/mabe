import { JoinUsButton } from "../buttons/JoinUsButton";

type JoinPanelProps = {
	joinLink: string;
};

export function JoinPanel({ joinLink }: JoinPanelProps) {
	return (
		<div className="flex flex-col justify-evenly py-16 px-5 lg:px-32 space-y-12 w-full h-auto text-xl rounded-3xl shadow-xl">
			<h2 className="text-xl lg:text-4xl font-semibold text-center uppercase">
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
			<div className="text-center">
				<JoinUsButton joinLink={joinLink} />
			</div>
		</div>
	);
}
