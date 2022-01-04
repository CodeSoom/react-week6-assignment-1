const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: { index: '/', disableDotRule: true },
    hot: true,
    compress: true,
    port: 8080,
  },
  resolve: {
    // alias: {
    //   components: path.resolve(__dirname, 'src/components'),
    // },
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
