export function SelectedGalleryPageLayout({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) {
	return <div className="px-2 pb-20 pt-14 md:pb-24 lg:pb-20">{children}</div>;
}
