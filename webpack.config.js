const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './public',
    watchContentBase: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Big Man Code',
      filename: 'public/index.html',
    }),
  ],
};
