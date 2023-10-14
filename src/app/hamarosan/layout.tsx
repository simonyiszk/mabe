import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default function SoonLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
