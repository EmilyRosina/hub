<template>
  <button type="button" :class="[classes]">
    <slot></slot>
  </button>
</template>

<script>
/* eslint-disable vue/no-unused-properties */

export default {
  name: 'sl-button',
  props: {
    button: {
      type: String,
      default: ''
    },
    sm: {
      type: String,
      default: ''
    },
    md: {
      type: String,
      default: ''
    },
    lg: {
      type: String,
      default: ''
    },
    xl: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loader: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      const list = []
      const props = this._props
      const classes = Object.keys(props)
        .filter((prop) => props[prop] && !['active', 'disabled'].includes(prop))
      classes.forEach((x) => list.push(`${x}-${props[x]}`))
      if (this.active) list.push('active')
      if (this.disabled) list.push('disabled')
      if (this.loader) list.push('button-loader')
      if (this.block) list.push('button-block')
      return list.join(' ')
    }
  }
}
</script>
