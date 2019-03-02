import Vue from 'vue'
import Shoelace from './Shoelace'

const customPlugins = [
  { ...Shoelace },
]

customPlugins.forEach(({ plugin, options }) => {
  if (options) Vue.use(plugin, options)
  else Vue.use(plugin)
})
