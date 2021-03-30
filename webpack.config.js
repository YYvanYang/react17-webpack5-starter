const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackDevClientEntry = require.resolve(
  'react-dev-utils/webpackHotDevClient'
);
const reactRefreshOverlayEntry = require.resolve(
  'react-dev-utils/refreshOverlayInterop'
);

const paths = require('./config/paths');
const getClientEnvironment = require('./config/env');
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  plugins: [
    new ReactRefreshWebpackPlugin({
      overlay: {
        entry: webpackDevClientEntry,
        // The expected exports are slightly different from what the overlay exports,
        // so an interop is included here to enable feedback on module-level errors.
        module: reactRefreshOverlayEntry,
        // Since we ship a custom dev client and overlay integration,
        // the bundled socket handling logic can be eliminated.
        sockIntegration: false,
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('public/index.html'),
    }),
    new webpack.DefinePlugin(env.stringified),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    //   'process.env.WDS_SOCKET_HOST': JSON.stringify(process.env.WDS_SOCKET_HOST),
    //   'process.env.WDS_SOCKET_PORT': JSON.stringify(process.env.WDS_SOCKET_PORT),
    //   'process.env.WDS_SOCKET_PATH': JSON.stringify(process.env.WDS_SOCKET_PATH),
    // })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};