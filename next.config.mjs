/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: "https",
				hostname: "inclusionafrika.imgix.net",
			},
			{
				protocol: "https",
				hostname: "thelordshands.org",
			},
			{
				protocol: "https",
				hostname: "media.licdn.com",
			},
		],
	},
};

export default nextConfig;
