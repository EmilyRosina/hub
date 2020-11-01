module.exports = {
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "./src/assets/styles/scss/_vars.scss";'
      }
    },
    sourceMap: true
  }
}
