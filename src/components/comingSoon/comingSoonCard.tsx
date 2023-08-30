type ComingSoonCardProps = {
	title: string;
	lowerText: string;
};

export function ComingSoonCard({ title, lowerText }: ComingSoonCardProps) {
	return (
		<div className="h-full w-full rounded-gallery bg-white px-4 py-8 text-center shadow-event">
			<h1 className="mb-4 font-roboto-slab text-2xl font-medium">{title}</h1>
			<h2 className="">{lowerText}</h2>
		</div>
	);
}
