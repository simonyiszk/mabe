import "@/styles.css";
import "@/polyfills";

import type { AppProps } from "next/app";
import Head from "next/head";

import { PageLayout } from "@/components/layouts/PageLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta
					name="color-scheme"
					content="normal" // TODO: Set to "dark" or "light" based on theme
				/>
			</Head>
			<PageLayout>
				<Component {...pageProps} />
			</PageLayout>
		</>
	);
}
