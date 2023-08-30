import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

type PageLayoutProps = {
	children: JSX.Element;
};

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<div className="flex min-h-screen flex-col font-roboto">
			<Header />
			<main className="flex-1">{children}</main>
			<Footer
				links={{
					FacebookLink: "https://www.facebook.com/mbioteche",
					InstagramLink: "https://instagram.com/mbioteche",
					LinkedInLink: "https://mbioteche.hu/hamarosan",
				}}
			/>
		</div>
	);
}
