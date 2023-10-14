import AnyPageLayout from "@/components/layouts/AnyPageLayout";

export default function EventsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <AnyPageLayout>{children}</AnyPageLayout>;
}
