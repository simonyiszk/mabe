import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default function JoinLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
