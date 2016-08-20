const webpack = require('webpack');

module.exports = {
  context: `${__dirname}`,
  entry: {
    bundle: './index',
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'generic-dice.js',
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
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),

    // Development: set NODE_ENV to '"development"'
    // Production: set NODE_ENV to '"production"'
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
};
