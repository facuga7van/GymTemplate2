/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production'

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/GymTemplat2' : '',
    assetPrefix: isProd ? '/GymTemplat2/' : '',
}

module.exports = nextConfig
