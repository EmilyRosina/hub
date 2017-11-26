<template>
  <sl-container :id="id" fullWidth fullHeight class="dark-bg">
    <top-nav></top-nav>
    <sl-row noGutters :flexGrow="1">
      <slot></slot>
    </sl-row>
  </sl-container>
</template>

<script>
  import topNav from '@/components/layout/nav'

  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    },
    components: {
      topNav
    }
  }
</script>

<style lang="scss" scoped>
  .dark-bg {
    background-color: #0c1540;
  }
</style>
