/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;


const withSVG = require('next-svg')

module.exports = withSVG({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
})
