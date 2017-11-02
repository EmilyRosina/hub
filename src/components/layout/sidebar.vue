<template>
  <sl-col col="3" id="sidebar">
    <p>// sidebar //</p>
    <p>...logo to go here...</p>
    <p>...navigation to go here...</p>
  </sl-col>
</template>

<script>
  import slContainer from 'shoelace/container.vue'
  import slRow from 'shoelace/row.vue'
  import slCol from 'shoelace/col.vue'

  export default {
    components: {
      slContainer,
      slRow,
      slCol
    }
  }
</script>

<style lang="scss" scoped>
  #sidebar {
    background-color: black;
    border: none;
  }
</style>
