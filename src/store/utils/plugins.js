import Vue from 'vue'
import vueMoment from 'vue-moment'
import vueLazyLoad from 'vue-lazyload'
import vueAnalytics from 'vue-analytics'
import router from '@/router'

Vue.use(vueMoment)
Vue.use(vueLazyLoad)
Vue.use(vueAnalytics, {
  id: 'UA-118444519-1',
  debug: {
    sendHitTask: process.env.NODE_ENV === 'production'
  },
  router,
  autoTracking: {
    shouldRouterUpdate (to, from) { return to.path !== from.path }
  }
})
