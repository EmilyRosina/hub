<template>
  <span :class="['badge', badge]">
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'sl-badge',
    props: {
      badge: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>

<style>

</style>
