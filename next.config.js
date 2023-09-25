/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['photos.zillowstatic.com'],
	},
	output: 'export',
	basePath: '/Elsy_Sells_Homes',
};

module.exports = nextConfig;
