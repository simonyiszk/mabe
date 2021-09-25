export function SelectedGalleryPageLayout({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) {
	return <div className="px-2 pt-14 pb-20 md:pb-24 lg:pb-20">{children}</div>;
}
