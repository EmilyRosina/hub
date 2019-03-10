<template>
  <a :class="['badge', badge]">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'sl-badge-link',
  props: {
    badge: {
      type: String,
      default: '',
    },
  },
}
</script>
