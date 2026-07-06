const { withSentryConfig } = require("@sentry/nextjs");

// Example config for adding a loader that depends on babel-loader
const moduleExports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: "raw-loader",
      exclude: /node_modules/,
    });
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: "glslify-loader",
      exclude: /node_modules/,
    });

    return config;
  },
};

