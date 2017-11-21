<template>
  <sl-container id="blog" fullWidth fullHeight>
    <topNav></topNav>
    <sl-row>

    </sl-row>
  </sl-container>
</template>

<script>

  import sidebar from '@/components/layout/sidebar'
  import topNav from '@/components/layout/nav'

  export default {
    name: 'Welcome',
    data () {
      return {

      }
    },
    components: {
      sidebar,
      topNav
    }
  }
</script>

<style lang="scss" scoped>

</style>
