import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

const plugin = {
  install(Vue) {
    Vue.component('icon', Icon)
  },
}

export default {
  plugin,
}
