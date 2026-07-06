const { withSentryConfig } = require("@sentry/nextjs");

const apiOrigin =
  process.env.SANDSPIEL_API_ORIGIN ||
  "https://sandspiel-studio-zupex6sll-sandspiel.vercel.app";

// Example config for adding a loader that depends on babel-loader
const moduleExports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${apiOrigin}/api/:path*`,
      },
    ];
  },
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

module.exports = moduleExports;
