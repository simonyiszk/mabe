const withBundleAnalyzer = require("@next/bundle-analyzer");
const withPlugins = require("next-compose-plugins");

/** @type {import("next").NextConfig} */
const nextConfig = {
	experimental: {
		esmExternals: true,
	},
	future: {
		strictPostcssConfiguration: true,
	},
	reactStrictMode: true,
	images: {
		// TODO: remove placeholder after full contentful setup
		domains: ["placekitten.com", "images.ctfassets.net"],
	},
};

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
