/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	//https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#allowed-origins-advanced
	experimental: {
		serverActions: {
			allowedOrigins: [
				"localhost:3000",
				"api.siliconflow.com",
				"uat-api.siliconflow.com",
				"rest.siliconflow.com",
				"uat-rest.siliconflow.com",
			],
		},
	},
};

export default nextConfig;
