const webpack = require('webpack');

module.exports = {
  context: `${__dirname}`,
  entry: {
    bundle: './src/game',
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: 'game.js',
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

    // For Production, make sure to include this plugin definition
    // to prevent the bundle from including development-only warning for React.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
};
