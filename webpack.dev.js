const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html')
      })
    ],
    devServer: {
      contentBase: './build',
      hot: true,
      publicPath: process.env.ASSET_PATH || '/',
      historyApiFallback: true
    }
  });
