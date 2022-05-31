const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    port: 5050,
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
}