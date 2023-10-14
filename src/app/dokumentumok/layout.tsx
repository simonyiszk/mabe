import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default function DocumentsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
