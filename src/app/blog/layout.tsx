import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
