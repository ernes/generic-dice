const webpack = require('webpack');

const config = require('./config.json');

let filename;
let uglifyConfig;
if (config.NODE_ENV === '\"production\"') {
  filename = 'generic-dice.min.js';
  uglifyConfig = {
    compress: {
      warnings: false,
    },
    mangle: true,
    beautify: false,
    sourceMap: true,
  };
} else {
  filename = 'generic-dice.js';
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
    bundle: './reactSource',
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
