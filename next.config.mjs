/** @type {import('next').NextConfig} */

const nextConfig = {
	images: {
		domains: [process.env.OSS_IMG_BUCKET],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	async rewrites() {
		return [
			{
				source: "/api/v1/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_DOMAIN}/api/v1/:path*`,
			},
		];
	},
};

export default nextConfig;
