const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    // 포트 바꿔주기 가능
    // 우리가 요청하는 것들을 다 여기로 잡아줄 수 있음
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
