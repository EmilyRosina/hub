// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
// import breakpoints from './store/utility/breakpoints'
import 'nm/shoelace-css/dist/shoelace.css'
import '@/assets/styles/css/main.css'

Vue.config.productionTip = false

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
