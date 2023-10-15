export default function AnyPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="container mx-auto px-5 py-12">{children}</div>;
}
