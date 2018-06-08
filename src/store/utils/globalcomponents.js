/* eslint-disable no-unused-vars */
import Vue from 'vue'

// --[ my own components ]-- //
import ShoelaceComponents from '@/components/shoelace'
// --[ vendor components ]-- //
import Icon from 'vue-awesome/components/Icon'
import vueAwesomeicons from 'vue-awesome/icons'

// --[ register components ]-- //
[
  ...ShoelaceComponents,
  Icon
].forEach(component => {
  Vue.component(component.name, component)
})
