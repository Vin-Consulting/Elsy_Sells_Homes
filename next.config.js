/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['photos.zillowstatic.com'],
	},
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;
