import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import api from '@/api/treehouse'
import repos from '@/assets/data/repos'
import { breakpoints } from '@/utils'

Vue.use(Vuex)

const state = {
  width: 0,
  treehouse: {
    badges: null,
    points: null
  },
  repos,
  modal: {
    show: false,
    header: null
  }
}

const getters = {
  breakpoint (state) {
    let breakpoint = ''
    Object.entries(breakpoints).forEach(([bp, [min, max]]) => {
      if (state.width >= min && state.width <= max) breakpoint = bp
    })
    return breakpoint
  }
}

const mutations = {
  SET_WIDTH (state, width) {
    state.width = width
  },

  SET_BREAKPOINT (state, breakpoint) {
    state.breakpoint = breakpoint
  },

  SET_TREEHOUSE_DATA (state, { badges, points }) {
    const totalPoints = points.total
    state.treehouse = {
      badges,
      totalPoints,
      points: {}
    }
    delete points.total
    for (const [key, value] of Object.entries(points)) {
      state.treehouse.points[key] = {
        label: key,
        points: value,
        get learned () {
          return value !== 0
        },
        get percentage () {
          return Number((value / totalPoints).toFixed(2))
        }
      }
    }
  },

  OPEN_MODAL (state, headerText) {
    state.modal.header = headerText
    state.modal.show = true
  },

  CLOSE_MODAL (state) {
    state.modal.header = null
    state.modal.show = false
  }
}

const actions = {
  async GET_TREEHOUSE_DATA ({ commit }) {
    const { data, error } = await axios.get(api.getTreehouseData)
    if (data) commit('SET_TREEHOUSE_DATA', data)
    else console.error(error)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
