/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "export",
    basePath: '/AuthorDashboard',
    trailingSlash: true,
};

export default nextConfig;
