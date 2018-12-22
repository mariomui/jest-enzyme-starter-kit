const path = require('path');

module.exports = {
  devServer: {
    publicPath: '/public/dist/',
  },
  // context: __dirname,
  mode: 'development',
  entry: path.resolve(__dirname, './client/Entry.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.jsx?$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
