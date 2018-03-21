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
  }
}
