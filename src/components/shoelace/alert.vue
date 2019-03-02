<template>
  <div :class="['alert', alert]">

  </div>
</template>

<script>
  export default {
    name: 'sl-alert',
    props: {
      alert: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
