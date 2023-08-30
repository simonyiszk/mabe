/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		// TODO: remove placeholder after full contentful setup
		domains: ["placekitten.com", "images.ctfassets.net"],
	},
};

module.exports = nextConfig;
