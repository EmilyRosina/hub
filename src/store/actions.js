import axios from 'axios'

export default {
  GET_TREEHOUSE_DATA ({ commit, getters }) {
    axios.get(getters.api.treehouse)
    .then(response => {
      commit('set_treehouse_data', response.data)
    })
    .catch(error => {
      console.error(error)
    })
  },
  GET_TEST ({ commit, getters }) {
    axios.get('https://teamtreehouse.com/library/how-to-make-a-website#debugging-html-and-css-problems')
    .then(response => {
      commit('set_test', response.data)
    })
    .catch(error => {
      console.error(error)
    })
  }
}
