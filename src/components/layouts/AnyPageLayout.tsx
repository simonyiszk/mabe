export function AnyPageLayout({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) {
	return (
		<div className="mx-auto px-6 pb-12 pt-14 md:px-32 md:pb-24 lg:px-40 lg:pb-20 xl:px-52">
			{children}
		</div>
	);
}
