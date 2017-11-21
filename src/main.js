// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Icon from 'vue-awesome/components/Icon'
import slContainer from '@/components/shoelace/container'
import slRow from '@/components/shoelace/row'
import slCol from '@/components/shoelace/col'

require('nm/shoelace-css/dist/shoelace.css')
require('@/assets/styles/css/main.css')
require('vue-awesome/icons')

Vue.use(require('vue-moment'))
Vue.config.productionTip = false
Vue.component('icon', Icon)

// register my own shoelace components
Vue.component('sl-container', slContainer)
Vue.component('sl-row', slRow)
Vue.component('sl-col', slCol)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
  mounted () {
    this.$store.commit('set_width', window.innerWidth)
    window.addEventListener('resize', () => {
      this.$store.commit('set_width', window.innerWidth)
    })
  }
})
