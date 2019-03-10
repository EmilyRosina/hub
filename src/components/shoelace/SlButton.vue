<template>
  <button type="button" :class="[classes]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'sl-button',
  props: {
    button: {
      type: String,
      default: '',
    },
    sm: {
      type: String,
      default: '',
    },
    md: {
      type: String,
      default: '',
    },
    lg: {
      type: String,
      default: '',
    },
    xl: {
      type: String,
      default: '',
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loader: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const list = []
      const props = this._props
      const classes = Object.keys(props)
        .filter((prop) => props[prop] && !['active', 'disabled'].includes(prop))
      classes.forEach((x) => list.push(`${x}-${props[x]}`))
      if (props.active) list.push('active')
      if (props.disabled) list.push('disabled')
      if (props.loader) list.push('button-loader')
      if (props.block) list.push('button-block')
      return list.join(' ')
    },
  },
}
</script>
