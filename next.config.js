/** @type {import('next').NextConfig} */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        });
    
        // Resolve the @ alias
        if (!config.resolve.plugins) {
          config.resolve.plugins = [];
        }
        config.resolve.plugins.push(new TsconfigPathsPlugin());
    
        return config;
      }
}

module.exports = nextConfig
