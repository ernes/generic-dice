const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('../config.json');

let reactBundle;
let uglifyConfig;
if (config.NODE_ENV === '\"production\"') {
  reactBundle = 'game.min.js';
  uglifyConfig = {
    compress: {
      warnings: false,
    },
    mangle: true,
    beautify: false,
    sourceMap: true,
  };
} else {
  reactBundle = 'game.js';
  uglifyConfig = {
    compress: false,
    mangle: false,
    beautify: true,
    sourceMap: false,
  };
}

module.exports = {
  context: `${__dirname}`,
  entry: {
    bundle: './src/game',
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: reactBundle,
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
      {
        test: /\.ejs$/,
        loader: 'pug',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(uglifyConfig),

    new CopyWebpackPlugin([
      {
        from: 'src/robots.txt',
      },
    ],
      {
        copyUnmodified: true,
      }
    ),

    new HtmlWebpackPlugin({
      title: 'Generic Dice examples',
      template: 'src/index.ejs',
      reactBundle: 'index.html',
      hash: true,
      inject: false,
    }),
    new HtmlWebpackPlugin({
      title: 'React.js examples',
      template: 'src/react-js-examples.ejs',
      reactBundle: 'react-js-examples.html',
      hash: true,
      inject: true,
    }),
    new HtmlWebpackPlugin({
      title: 'Vanilla.js examples',
      template: 'src/vanilla-js-examples.ejs',
      reactBundle: 'vanilla-js-examples.html',
      hash: true,
      inject: false,  // I need to figure out how to inject
                      // the correct javascript bundle,
                      // not the React one.
    }),

    // Development: set NODE_ENV to "\"development\"" in config.json
    // Production: set NODE_ENV to "\"production\"" in config.json
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: config.NODE_ENV,
      },
    }),
  ],
};
