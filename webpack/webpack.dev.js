const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
}