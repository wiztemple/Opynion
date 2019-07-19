const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
});
