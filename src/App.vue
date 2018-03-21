<template>
  <div id="app" :class="{'mobile': isMobile}">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
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
  #app {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.1s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0.5;
  }
</style>
