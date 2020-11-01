<template>
  <div
    v-if="modal.show"
    class="modal__overlay">
    <div class="modal">
      <header class="modal__header">
        <span>{{ modal.header }}</span>
        <icon
          name="times"
          scale="1.5"
          class="clickable"
          @click.native="CLOSE_MODAL()" />
      </header>
      <main class="modal__content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Modal',
  computed: {
    ...mapState(['modal'])
  },
  methods: {
    ...mapMutations(['CLOSE_MODAL'])
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    width: 600px;
    max-width: 600px;
    min-height: 200px;
    box-shadow: 0px 0px 20px 5px transparentize(#000, 0.75);
    height: auto;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'header'
      'content'
    ;

    &__overlay {
      position: fixed;
      height: 100vh;
      width: 100vw;
      background: transparentize($indigo, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;
    }

    &__header {
      grid-area: header;
      display: flex;
      justify-content: space-between;
      padding: 1.25em 1.5em;
      background: $mint;
      color: $indigo;
    }

    &__content {
      grid-area: content;
      background: $indigo;
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      max-height: 80vh;
      overflow: auto;
    }
  }
</style>
