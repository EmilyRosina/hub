<template>
  <div :class="['row', classes]" :style="styles">
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
        required: false
      },
      sm: {
        type: [Number, String],
        default: '',
        required: false
      },
      md: {
        type: [Number, String],
        default: '',
        required: false
      },
      lg: {
        type: [Number, String],
        default: '',
        required: false
      },
      xl: {
        type: [Number, String],
        default: '',
        required: false
      },
      noGutters: {
        type: Boolean,
        default: false,
        required: false
      },
      noWrap: {
        type: Boolean,
        default: false,
        required: false
      },
      flexGrow: {
        type: [Number, String],
        default: -1,
        required: false
      }
    },
    computed: {
      classes () {
        let props = this._props
        let classes = Object.keys(props).filter(prop => {
          return props[prop].length > 0 && !['noGutters', 'noWrap'].includes(prop)
        })
        let list = []
        classes.forEach((x) => {
          list.push(`${x}-${props[x]}`)
        })
        if (props.noGutters) {
          list.push('row-flush')
        }
        if (props.noWrap) {
          list.push('row-nowrap')
        }
        return list.join(' ')
      },
      styles () {
        let styles = {}
        if (this.flexGrow >= 0) {
          styles['flex'] = `${this.flexGrow} 0 auto`
        }
        return styles
      }
    }
  }
</script>

<style scoped>
  .row-nowrap {
    flex-wrap: nowrap
  }
</style>
