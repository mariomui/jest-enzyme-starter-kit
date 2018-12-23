const path = require('path');

const config = {
  devServer: {
    publicPath: '/public/dist',
    port: 5000,
    historyApiFallback: {
      index: '/public/index.html',
    },
  },
  mode: 'development',
  context: __dirname,
  entry: path.resolve(__dirname, './client/Entry.jsx'),
  output: {
    path: path.resolve(__dirname, './public/dist'),
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
      '.json',
    ],
  },
};

module.exports = config;
