import ShoelaceComponents from '@/components/shoelace'

const options = undefined
const plugin = {
  install(Vue) {
    ShoelaceComponents.forEach((component) => {
      Vue.component(component.name, component)
    })
  },
}

export default {
  plugin,
  options,
}
