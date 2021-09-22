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
		// TODO: change this after Contentful setup
		domains: ["placekitten.com"],
	},
};

module.exports = withPlugins(
	[withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
	nextConfig,
);
