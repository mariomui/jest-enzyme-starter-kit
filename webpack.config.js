const path = require('path');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: './client/Index.jsx',
  output: {
    path: path.join(__dirname, 'public/dist'),
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
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};
