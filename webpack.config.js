var path = require('path');
var webpack = require('webpack');

var APP_DIR = path.resolve(__dirname, 'src/');
var DIST_DIR = path.resolve(__dirname, 'dist/app/');

module.exports = {
  entry: APP_DIR + '/main.jsx',
  output: {
    path: DIST_DIR,
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules',
        query: {
          presets: [
            'es2016',
            'react'
          ]
        }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'src/components')
    ],
    extensions: ['.js', '.json', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};
