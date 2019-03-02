import axios from 'axios'
import api from '@/api/treehouse'

export default {
  async GET_TREEHOUSE_DATA({ commit, getters }) {
    const { data, error } = await axios.get(api.getTreehouseData)
    if (data) commit('SET_TREEHOUSE_DATA', data)
    else console.error(error)
  },
}
