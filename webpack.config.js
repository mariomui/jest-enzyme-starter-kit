const path = require('path');

const config = {
  mode: 'development',
  context: __dirname,
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
    contentBase: path.resolve(__dirname, '/public/'),
    publicPath: path.resolve(__dirname, '/public/dist'),
    port: 5000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};

module.exports = config;
