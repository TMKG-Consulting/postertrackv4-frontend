import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				hostname: "plus.unsplash.com",
				protocol: "https",
			},
			{
				hostname: "images.unsplash.com",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
