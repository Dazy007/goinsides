const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CURRENT_WD = process.cwd();

const config = {
  name: 'server',
  target: 'node',
  entry: [path.join(CURRENT_WD, './ssr/index.js')],
  output: {
    path: path.join(CURRENT_WD, '/build/'),
    filename: 'server.js',
    publicPath: '/build/',
    libraryTarget: 'commonjs2',
  },
  externals: [nodeExternals()],
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
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
};
module.exports = config;
