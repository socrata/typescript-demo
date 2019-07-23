const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./index.tsx",

  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist")
  },

  plugins: [
    new webpack.ProgressPlugin(),

    // sort of hacky way to do this; reach router handles most of the routing
    // but we need to declare each route here so webpack dev server doesn't throw 404s
    new HtmlWebpackPlugin({
      template: "./template.html",
      filename: "./index.html"
    }),
    new HtmlWebpackPlugin({
      template: "./template.html",
      filename: "./redux_js"
    }),
    new HtmlWebpackPlugin({
      template: "./template.html",
      filename: "./redux_ts"
    })
  ],
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, ".")],
        loader: "babel-loader",
        options: {
          plugins: ["syntax-dynamic-import"],
          presets: [
            [
              "@babel/preset-env",
              {
                modules: false
              }
            ],
            "@babel/preset-react"
          ]
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              experimentalFileCaching: true
            }
          }
        ]
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/
        }
      },

      chunks: "async",
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      },

      // because CORS this has to look like it's coming from the domain we're on
      "/name": {
        target:
          "https://namey.muffinlabs.com/name.json?count=1&with_surname=true&frequency=rare",
        changeOrigin: true
      }
    }
  }
};
