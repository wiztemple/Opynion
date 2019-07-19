// importing webpack dependencies
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

// instantiating webpack dependencies
const htmlWebpack = new htmlWebpackPlugin({
  template: '../src/index.html'
});
const miniCssExtract = new miniCssExtractPlugin();

module.exports = {
  htmlWebpack,
  miniCssExtract
};