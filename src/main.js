import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/utils/plugins/custom'
import '@/utils/plugins/vendor'
import '@/assets/styles/scss/main.scss'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
