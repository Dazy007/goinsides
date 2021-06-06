const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CURRENT_WD = process.cwd();

const config = {
  name: 'test-production',
  entry: path.join(CURRENT_WD, 'src/index.tsx'),
  output: {
    path: path.join(CURRENT_WD, '/build/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpg|jpeg|svg|gif|pdf)$/, use: ['file-loader'] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: { name: '[name][hash].[ext]' },
      },
    ],
  },
  plugins: [new LoadablePlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
module.exports = config;
