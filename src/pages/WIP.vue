<template>
  <main-layout id="WIP">
    <sl-col>
      <p class="text-white">...watch this space</p>
    </sl-col>
  </main-layout>
</template>

<script>
  import mainLayout from '@/layouts/MainLayout'
  import sidebar from '@/components/layout/sidebar'
  import topNav from '@/components/layout/nav'

  export default {
    name: 'WIP',
    data () {
      return {

      }
    },
    components: {
      mainLayout,
      sidebar,
      topNav
    }
  }
</script>

<style lang="scss" scoped>

</style>
