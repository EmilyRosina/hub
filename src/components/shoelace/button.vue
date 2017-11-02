<template>
  <button type="button ":class="[classes]">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      button: {
        type: String,
        default: '',
        required: false
      },
      sm: {
        type: String,
        default: '',
        required: false
      },
      md: {
        type: String,
        default: '',
        required: false
      },
      lg: {
        type: String,
        default: '',
        required: false
      },
      xl: {
        type: String,
        default: '',
        required: false
      },
      active: {
        type: Boolean,
        default: false,
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      },
      loader: {
        type: Boolean,
        default: false,
        required: false
      },
      block: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    computed: {
      classes () {
        let props = this._props
        let classes = Object.keys(props).filter(prop => {
          return props[prop].length > 0 && !['active','disabled'].includes(prop)
        })
        let list = []
        classes.forEach((x) => {
          list.push(`${x}-${props[x]}`)
        })
        if (props.active) {
          list.push('active')
        }
        if (props.disabled) {
          list.push('disabled')
        }
        if (props.loader) {
          list.push('button-loader')
        }
        if (props.block) {
          list.push('button-block')
        }
        return list.join(' ')
      }
    }
  }
</script>

<style>

</style>
