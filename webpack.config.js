const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.js',

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({
          template: './template.html',
          filename: './index.html'
        })],
  resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, '.')],
        loader: 'babel-loader',
        options: {
          plugins: ['syntax-dynamic-import'],
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ],
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', {
          loader: 'ts-loader',
          options: {
            experimentalFileCaching: true
          }
        }]
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

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true
    }
  },

  devServer: {
    open: true
  }
};
