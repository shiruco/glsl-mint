const webpack = require('webpack')
const path = require("path")
const HTMLPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`
  },
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  // for polyfill
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json", ".mjs", ".wasm"],
    alias: {
      crypto: "crypto-browserify",
      http: "stream-http",
      https: "https-browserify",
      stream: "stream-browserify",
      url: "url",
      os: "os-browserify",
      assert: false,
      fs: false,
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
    // new HTMLPlugin({
    //   template: path.join(__dirname, "src/index.html"),
    // }),
  ],
};
