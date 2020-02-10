const { join } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const typeScriptRules = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/
}

module.exports = {
  mode: 'development',
  entry: {
    index: join(__dirname, 'src', 'app')
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8081,
    contentBase: join(__dirname, 'dist'),
    hot: true,
    watchContentBase: true
  },
  output: {
    filename: '[name].js',
    path: join(__dirname, 'dist'),
    pathinfo: false
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: join(__dirname, 'public', 'index.html')
    }),
    new HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      typeScriptRules
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
}