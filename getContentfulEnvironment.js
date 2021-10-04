const contentfulManagement = require("contentful-management");

const dotenv = require("dotenv");

dotenv.config();

module.exports = async () => {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
	});

	const space = await contentfulClient.getSpace(
		process.env.NEXT_CONTENTFUL_SPACE_ID,
	);

	return space.getEnvironment(process.env.NEXT_CONTENTFUL_ENVIRONMENT);
};
