const webpack = require('webpack');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

const config = require('./config.json');

let filename;
let uglifyConfig;
if (config.NODE_ENV === '\"production\"') {
  filename = '[name].min.js';
  uglifyConfig = {
    compress: {
      warnings: false,
    },
    mangle: true,
    beautify: false,
    sourceMap: true,
  };
} else {
  filename = '[name].js';
  uglifyConfig = {
    compress: false,
    mangle: false,
    beautify: true,
    sourceMap: true,
  };
}

module.exports = {
  context: `${__dirname}`,
  entry: {
    'generic-dice': './reactSource',
    'generic-dice-vanilla': './vanillaSource',
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: {
          mimetype: 'image/png',
        },
      },
    ],
  },
  plugins: [
    new WebpackCleanupPlugin(),

    new webpack.optimize.UglifyJsPlugin(uglifyConfig),

    // Development: set NODE_ENV to "\"development\"" in config.json
    // Production: set NODE_ENV to "\"production\"" in config.json
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.NODE_ENV,
      },
    }),
  ],
};
