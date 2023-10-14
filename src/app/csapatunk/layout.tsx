import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default function TeamLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
