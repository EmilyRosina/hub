<template>
  <div :class="['v-container', classes]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'sl-container',
    props: {
      fullWidth: {
        type: Boolean,
        default: false,
        required: false
      },
      fullHeight: {
        type: Boolean,
        default: false,
        required: false
      },
      fluid: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    computed: {
      classes () {
        let props = this._props
        let list = []
        if (props.fullWidth) {
          list.push('full-width')
        }
        if (props.fullHeight) {
          list.push('full-height')
        }
        if (props.fluid) {
          list.push('container-fluid')
        } else {
          list.push('container')
        }
        return list.join(' ')
      }
    }
  }
</script>

<style lang="scss">
  .v-container {
    display: flex;
    flex-direction: column;
    &.full-width {
      margin: 0;
      padding: 0;
      max-width: 100%;
      width: 100%;
    }
    &.full-height {
      margin: 0;
      padding: 0;
      max-height: 100%;
      height: 100%;
      flex: 1 0 auto;
    }
  }
</style>
