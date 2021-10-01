const path = require("path");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: "./src/index.ts",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "grigliata",
    libraryTarget: "umd",
  },
  externals: {
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
      root: "_",
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "_",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      root: "_",
    },
  },
};
