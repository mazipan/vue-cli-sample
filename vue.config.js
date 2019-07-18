// vue.config.js
module.exports = {
  publicPath: '/',
  devServer: {
    host: 'localhost',
    clientLogLevel: 'info',
    disableHostCheck: true,
    port: 8989,
    watchOptions: {
      poll: true
    }
  }
}
