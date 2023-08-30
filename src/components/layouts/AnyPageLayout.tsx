export function AnyPageLayout({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) {
	return <div className="container mx-auto px-5 py-12">{children}</div>;
}
