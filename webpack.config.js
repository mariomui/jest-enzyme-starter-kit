const path = require('path');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, 'client/Entry.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public/'),
    publicPath: path.resolve(__dirname, 'public/dist'),
    historyApiFallback: {
      index: 'index.html',
    },
  },
};

module.exports = config;
