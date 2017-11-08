<template>
  <div :class="['col', classes]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      col: {
        type: String,
        default: '',
        required: false
      },
      xs: {
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
      hide: {
        type: String,
        default: '',
        required: false
      },
      order: {
        type: String,
        default: '',
        required: false
      },
      offset: {
        type: String,
        default: '',
        required: false
      }
    },
    computed: {
      classes () {
        let props = this._props
        let classes = Object.keys(props).filter(prop => {
          return props[prop].length > 0
        })
        let list = []
        let breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']
        classes.forEach((x) => {
          if (breakpoints.includes(x)) {
            list.push(`col-${x}-${props[x]}`)
          } else {
            list.push(`${x}-${props[x]}`)
          }
        })
        return list.join(' ')
      }
    }
  }
</script>

<style>
  .row {
    background-color: #ccc;
  }
  .col {
    padding: 0.5em;
    background: dodgerblue;
    color: white;
    text-align: center;
    border: 2px solid white;
  }
</style>
