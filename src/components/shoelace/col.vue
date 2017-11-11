<template>
  <div :class="['col', appliedClasses]">
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
      },
      flex: {
        type: Boolean,
        default: false,
        required: false
      },
      grow: {
        type: Number,
        default: 0,
        required: false
      },
      align: {
        type: String,
        default: 'start',
        required: false
      },
      justify: {
        type: String,
        default: 'center',
        required: false
      }
    },
    data () {
      return {
        classes: {
          shoelace: {
            breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
            utility: ['col', 'hide', 'order', 'offset']
          },
          flex: ['align', 'justify', 'grow']
        }
      }
    },
    computed: {
      shoelaceClasses () {
        let props = this._props
        let shoelaceClasses = {}
        shoelaceClasses.breakpoints = this.classes.shoelace.breakpoints.filter(prop => {
          return props[prop].length > 0
        })
        shoelaceClasses.utility = this.classes.shoelace.utility.filter(prop => {
          return props[prop].length > 0
        })
        return shoelaceClasses
      },
      flexClasses () {
        let props = this._props
        let flexClasses = this.classes.flex.filter(prop => {
          return props[prop]
        })
        return flexClasses
      },
      appliedClasses () {
        let props = this._props
        let list = []
        this.shoelaceClasses.breakpoints.forEach(x => {
          list.push(`col-${x}-${props[x]}`)
        })
        this.shoelaceClasses.utility.forEach(x => {
          list.push(`${x}-${props[x]}`)
        })
        if (props.flex) {
          list.push('col-flex')
        }
        this.flexClasses.forEach(x => {
          list.push(`col-flex-${x}-${props[x].toString()}`)
        })
        return list.join(' ')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .col-flex {
    display: flex;
    flex-direction: column;
    &-align {
      &-start {
        align-items: flex-start;
      }
      &-center {
        align-items: center;
      }
      &-end {
        align-items: flex-end;
      }
    }
    &-justify {
      &-start {
        justify-content: flex-start;
      }
      &-center {
        justify-content: center;
      }
      &-end {
        justify-content: flex-end;
      }
    }
    &-grow {
      &-1 {
        flex: 1 0 auto;
      }
      &-2 {
        flex: 1 0 auto;
      }
      &-3 {
        flex: 1 0 auto;
      }
      &-4 {
        flex: 1 0 auto;
      }
      &-5 {
        flex: 1 0 auto;
      }
    }
  }
  /* .row {
    background-color: #ccc;
  }
  .col {
    padding: 0.5em;
    background: dodgerblue;
    color: white;
    text-align: center;
    border: 2px solid white;
  } */
</style>
