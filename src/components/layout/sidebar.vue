<template>
  <sl-col md="12" lg="4" xl="2" id="sidebar">
    <p>// sidebar //</p>
    <p>...logo to go here...</p>
    <p>...navigation to go here...</p>
  </sl-col>
</template>

<script>
  import slContainer from 'shoelace/container.vue'
  import slRow from 'shoelace/row.vue'
  import slCol from 'shoelace/col.vue'

  // let screen = {
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // }

  export default {
    components: {
      slContainer,
      slRow,
      slCol
    },
    computed: {
      screenSize () {
        return this.$el.clientWidth
      }
    }
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    background-color: black;
    border: none;
  }
</style>
