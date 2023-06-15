module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Enable top-level await in webpack
    config.experiments = {
      topLevelAwait: true,
      layers: true,
      env: {
        mongodburl: "mongodb+srv://pdangelo1988:ABaJsneyyFZpJBkv@cluster0.ehybo5x.mongodb.net/?retryWrites=true&w=majority",
    }
    };

    return config;
  },
};