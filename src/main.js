// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store/store'

import globalComponents from './store/utils/globalcomponents'
import plugins from './store/utils/plugins'
import myStyles from '@/assets/styles/scss/main.scss'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  mounted () {
    // essential for breakpoints to be accessible in vue
    this.$store.commit('set_width', window.innerWidth)
    window.addEventListener('resize', () => {
      this.$store.commit('set_width', window.innerWidth)
    })
  }
})
