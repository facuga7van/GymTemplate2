/** @type {import('next').NextConfig} */


const nextConfig = {
    output: 'export',
    basePath: isProd ? '/GymTemplate2' : '',
    assetPrefix: isProd ? '/GymTemplate2/' : '',
}

module.exports = nextConfig
