const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const port = process.env.PORT || 8080;


module.exports = {
  mode: 'development',
  entry: './src/index.js',

  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'bos game',
      template: path.resolve(__dirname, 'public/index.html'),
      favicon: path.resolve(__dirname, 'public/favicon.ico'),
    }),
    new ManifestPlugin({
      writeToFileEmit: true,
    }),
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',

        options: {
          plugins: ['syntax-dynamic-import'],

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        use: 'file-loader?name=[hash:base64:7].[ext]',
      },
      {
        test: /favicon\.ico$/,
        use: 'file-loader?name=[name].[ext]',
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10,
          test: /[\\/]node_modules[\\/]/,
        },
      },

      chunks: 'async',
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },

  devServer: {
    contentBase: './dist',
    port,
    open: true,
    historyApiFallback: true,
  },
};
