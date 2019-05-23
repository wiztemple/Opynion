const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/app/index.tsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader'
        }
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
