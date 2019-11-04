const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true,
          },
        },
      },
    ],
  },
  devtool: 'cheap-source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  devServer: {
    port: 9090,
    open: false, //自动打开页面，
    hot: true, //开启热更新，
    inline: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template.html'),
    }),
  ],
}
