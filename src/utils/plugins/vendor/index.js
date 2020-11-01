import VueMoment from 'vue-moment'
import VueLazyLoad from 'vue-lazyload'
import VueAnalytics from './VueAnalytics'
import VueAwesome from './VueAwesome'

export default [
  { plugin: VueMoment },
  { plugin: VueLazyLoad },
  { ...VueAnalytics },
  { ...VueAwesome }
]
