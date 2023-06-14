module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Enable top-level await in webpack
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    };

    return config;
  },
};