<template>
  <div
    id="app"
    :class="{ 'mobile': isMobile, 'hide-overflow': modal.show }">
    <transition name="fade" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {
  mapGetters, mapMutations, mapActions, mapState
} from 'vuex'

export default {
  name: 'app',

  mounted () {
    // essential for breakpoints to be accessible in vue
    this.SET_WIDTH(window.innerWidth)
    window.addEventListener('resize', () => this.SET_WIDTH(window.innerWidth))
    this.GET_TREEHOUSE_DATA()
  },
  computed: {
    ...mapState([
      'modal'
    ]),
    ...mapGetters([
      'breakpoint'
    ]),
    isMobile () {
      return this.breakpoint === 'xs'
    }
  },
  methods: {
    ...mapMutations([
      'SET_WIDTH'
    ]),
    ...mapActions([
      'GET_TREEHOUSE_DATA'
    ])
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
