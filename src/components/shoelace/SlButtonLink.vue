<template>
  <a :class="['button', button]">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'sl-button-link',
  props: {
    style: {
      type: String,
      default: 'button',
      required: false,
    },
  },
  computed: {
    button() {
      return this.style === 'link' ? 'button-link' : ''
    },
  },
}
</script>
