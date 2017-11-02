<template>
  <a :class="['button', button]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    props: {
      style: {
        type: String,
        default: 'button',
        required: false
      }
    },
    computed: {
      button () {
        return style === 'link' ? 'button-link' : ''
      }
    }
  }
</script>

<style>

</style>
