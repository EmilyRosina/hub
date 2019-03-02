import Vue from 'vue'
import VueMoment from 'vue-moment'
import VueLazyLoad from 'vue-lazyload'
import VueAnalytics from './VueAnalytics'
import VueAwesome from './VueAwesome'


const vendorPlugins = [
  { plugin: VueMoment },
  { plugin: VueLazyLoad },
  { ...VueAnalytics },
  { ...VueAwesome },
]

vendorPlugins.forEach(({ plugin, options }) => {
  Vue.use(plugin, options)
})
