<template>
  <div id="app" :class="{'mobile': isMobile}">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted () {
      this.$store.dispatch('GET_TREEHOUSE_DATA')
    },
    computed: {
      isMobile () {
        return this.$store.getters.breakpoint === 'xs'
      }
    }
  }
</script>

<style>
  /* #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  } */
  #app {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
  }
</style>
