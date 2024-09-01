/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/GymTemplate2' : '',
    assetPrefix: isProd ? '/GymTemplate2/' : '',
}

module.exports = nextConfig
