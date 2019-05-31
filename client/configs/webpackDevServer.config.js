module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    inline: true,
    compress: true,
    port: 3000,
    hot: true,
    stats: {
      modules: false,
    },
    historyApiFallback: {
      disableDotRule: true,
    },
  },
};
