// Polyfill fix for IE (https://github.com/stefanpenner/es6-promise#auto-polyfill) (https://github.com/vuejs-templates/webpack/issues/474)
import 'es6-promise/auto'

import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stuff: [],
    test: 'test name',
    width: 0
  },
  getters,
  mutations,
  actions
})

export default store
