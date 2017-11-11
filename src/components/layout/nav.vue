<template>
  <sl-row id="nav" type="flex" noGutters>
    <template v-if="['xs', 'sm'].includes(breakpoint)">
      <sl-col flex>
        <icon name="bars" class="nav-link"></icon>
      </sl-col>
      <sl-col flex align="center">
        <span class="nav-link">Page Title</span>
      </sl-col>
      <sl-col flex align="end">
        <icon name="search" class="nav-link"></icon>
      </sl-col>
    </template>
    <template v-else>
      <sl-col flex col="1">
        <span class="nav-link">Site Icon</span>
      </sl-col>
      <sl-col flex grow="2" align="center">
        <span class="nav-link">Page Title</span>
      </sl-col>
      <sl-col flex grow="1" align="end">
        <span class="nav-link">Nav Links</span>
      </sl-col>
    </template>
  </sl-row>
</template>

<script>
  import { mapGetters } from 'vuex'
  import slContainer from 'shoelace/container.vue'
  import slRow from 'shoelace/row.vue'
  import slCol from 'shoelace/col.vue'

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
  @mixin pointer {
    cursor: pointer;
  }
  #nav {
    background-color: black;
    border: none;
    color: #ddd;
    font-size: 1.25rem;
    height: 4.35rem;
    .col {
      padding: 0 1rem;
      &:hover,
      &:focus {
        @include pointer;
        color: white;
        font-size: 1.35rem;
      }
      &:nth-child(1) {
        text-align: left;
      }
      &:nth-child(2) {
        text-align: center;
      }
      &:nth-child(3) {
        text-align: right;
      }
    }
  }

  </style>
