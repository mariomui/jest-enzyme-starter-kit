const path = require('path');

const config = {
  devServer: {
    // publicPath: '/public/dist',
    publicPath: path.resolve(__dirname, './public/dist/'),
    contentBase: path.resolve(__dirname, './public/'),
    port: 5100,
    // historyApiFallback: {
    //   index: '/public/index.html',
    // },
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
