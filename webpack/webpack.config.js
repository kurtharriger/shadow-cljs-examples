const path = require("path");

module.exports = {
  entry: "./index.js",

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'source-map-loader',
      options: { enforce: "pre" }
    }],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }
};
