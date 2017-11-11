<template>
  <sl-row id="nav" type="flex">
    <template v-if="['xs', 'sm'].includes(breakpoint)">
      <sl-col><icon name="bars"></icon></sl-col>
      <sl-col>Page Title</sl-col>
      <sl-col><icon name="search"></icon></sl-col>
    </template>
    <template v-else>
      <sl-col>Menu stuff</sl-col>
      <sl-col>Page Title</sl-col>
      <sl-col>Search stuff</sl-col>
    </template>
  </sl-row>
</template>

<script>
  import { mapGetters } from 'vuex'
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
    mounted () {
      console.log(this)
    },
    computed: {
      ...mapGetters(['breakpoint']),
      screenSize () {
        return this.$el.clientWidth
      }
    }
  }
</script>

<style lang="scss" scoped>
  #nav {
    background-color: black;
    border: none;
  }
</style>
