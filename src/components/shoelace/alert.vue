<template>
  <div :class="['alert', alert]">

  </div>
</template>

<script>
  export default {
    props: {
      alert: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>

<style>

</style>


