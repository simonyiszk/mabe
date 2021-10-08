type ComingSoonCardProps = {
	title: string;
	lowerText: string;
};

export function ComingSoonCard({ title, lowerText }: ComingSoonCardProps) {
	return (
		<div className="py-8 px-4 w-full h-full text-center bg-white rounded-gallery shadow-event">
			<h1 className="mb-4 font-roboto-slab text-2xl font-medium">{title}</h1>
			<h2 className="">{lowerText}</h2>
		</div>
	);
}
