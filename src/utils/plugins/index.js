import Vue from 'vue'
import vendorPlugins from './vendor'
import customPlugins from './custom'

const plugins = [
  ...vendorPlugins,
  ...customPlugins
]

plugins.forEach(({ plugin, options }) => {
  if (options) Vue.use(plugin, options)
  else Vue.use(plugin)
})
