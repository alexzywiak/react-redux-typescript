var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  devServer: {
    stats: 'errors-only',
    host: 'localhost'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  entry: [
    './index.tsx'
  ],
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json' }
    ]
  }
};