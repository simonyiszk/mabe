import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default async function SelectedImageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
