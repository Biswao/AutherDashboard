/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: "export",
    basePath: '/shtest',
    trailingSlash: true,
};

export default nextConfig;
