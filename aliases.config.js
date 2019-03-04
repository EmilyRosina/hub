const path = require('path')

const aliases = {
  '@': 'src',
  shoelace: path.resolve(__dirname, 'src/components/shoelace'),
}

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

function registerWebpackAliases() {
  const webpackAliases = {}
  for (const [alias, aliasPath] of Object.entries(aliases)) {
    webpackAliases[alias] = resolveSrc(aliasPath)
  }
  return webpackAliases
}

function registerJestAliases() {
  const jestAliases = {}
  for (const [alias, aliasPath] of Object.entries(aliases)) {
    jestAliases[`^${alias}/(.*)$`] = `<rootDir>/${aliasPath}/$1`
  }
  return jestAliases
}

function addStyleResources(config) {
  const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
  types.forEach((type) => {
    config.module
      .rule('sass')
      .oneOf(type)
      .use('style-resource')
      .loader('sass-loader')
      .options({
        patterns: [
          path.resolve(__dirname, './src/assets/styles/scss/_vars.scss'),
        ],
      })
  })
}

module.exports = {
  webpack: {
    ...registerWebpackAliases(),
  },
  chainWebpack: (config) => {
    addStyleResources(config)
  },
  jest: {
    ...registerJestAliases(),
  },
}
