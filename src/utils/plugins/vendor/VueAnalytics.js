import VueAnalytics from 'vue-analytics'
import router from '@/router'

export default {
  plugin: VueAnalytics,
  options: {
    id: 'UA-118444519-1',
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    },
    router,
    autoTracking: {
      shouldRouterUpdate: (to, from) => to.path !== from.path
    }
  }
}
