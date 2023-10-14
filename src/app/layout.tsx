import "../styles.css";

import type { Metadata } from "next";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export const metadata: Metadata = {
	title: "Magyar Biotechnológus-hallgatók Egyesülete",
	description:
		"Az Egyesület célja, hogy a hazai biotechnológus-hallgatóknak egy olyan közösséget teremtsen, ahol megismerkedhetnek egymással és olyan kapcsolatokat alakíthatnak ki, amelyeket később az üzleti életben is kamatoztathatnak. ",
	colorScheme: "light",
	viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="hu">
			<body>
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
			</body>
		</html>
	);
}
