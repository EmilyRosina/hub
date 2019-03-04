<template>
  <div
    :class="['row', classes]"
    :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'sl-row',
  props: {
    row: {
      type: [Number, String],
      default: '',
    },
    sm: {
      type: [Number, String],
      default: '',
    },
    md: {
      type: [Number, String],
      default: '',
    },
    lg: {
      type: [Number, String],
      default: '',
    },
    xl: {
      type: [Number, String],
      default: '',
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
    noWrap: {
      type: Boolean,
      default: false,
    },
    flexGrow: {
      type: [Number, String],
      default: -1,
    },
    fullHeight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const list = []
      const props = this._props
      const classes = Object.keys(props)
        .filter((prop) => props[prop] && !['noGutters', 'noWrap', 'fullHeight'].includes(prop))
      classes.forEach((option) => list.push(`${option}-${props[option]}`))
      if (props.fullHeight) list.push('full-height')
      if (props.noGutters) list.push('row-flush')
      if (props.noWrap) list.push('row-nowrap')
      return list.join(' ')
    },
    styles() {
      const styles = {}
      if (this.flexGrow >= 0) styles.flex = `${this.flexGrow} 0 auto`
      return styles
    },
  },
}
</script>

<style lang="scss" scoped>
.row-nowrap {
  flex-wrap: nowrap;
}
</style>
