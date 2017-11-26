<template>
  <sl-row id="nav" type="flex" noGutters noWrap :class="{mobileNav: ['xs', 'sm'].includes(breakpoint), desktopNav: !['xs', 'sm'].includes(breakpoint)}">
    <template v-if="['xs', 'sm'].includes(breakpoint)">
      <sl-col flex>
          <router-link to="/" class="nav-siteicon">
            <img src="https://avatars1.githubusercontent.com/u/21045073" />
          </router-link>
      </sl-col>
      <sl-col flex align="center">
        <span class="nav-pagetitle">{{ pageTitle }}</span>
      </sl-col>
      <sl-col flex align="end">
        <icon name="bars" class="nav-link"></icon>
      </sl-col>
    </template>
    <template v-else>
      <sl-col flex col="3">
        <sl-row style="margin: inherit;">
          <router-link to="/" class="nav-siteicon">
            <img src="https://avatars1.githubusercontent.com/u/21045073" />
          </router-link>
          <span class="nav-pagetitle">{{ pageTitle }}</span>
        </sl-row>
      </sl-col>
      <sl-col flex grow="1" align="end">
        <sl-row noGutters class="nav-links">
          <template v-for="link in navLinks">
            <router-link :key="link.key" v-if="link.navTo" class="nav-link" tag="span" :to="{ path: link.key }">{{ link.key }}</router-link>
            <span v-else :key="link.key" class="nav-link">{{ link.key }}</span>
          </template>
        </sl-row>
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
      },
      pageTitle () {
        return this.$route.name
      },
      navLinks () {
        return this.$store.state.navLinks.filter(link => link.key !== this.$route.name.toLowerCase())
      }
    }
  }
</script>

<style lang="scss" scoped>
  @mixin pointer {
    cursor: pointer;
  }
  #nav {
    &.mobileNav {
      .nav-link {
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
    &.desktopNav {
      .nav-links {
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        flex: 1 0 auto;
        .nav-link {
          padding-left: 2rem;
        }
      }
    }
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: #ddd;
    font-size: 1rem;
    height: 4.35rem;
    .col {
      padding: 0 1rem;
      .nav-siteicon {
        width: 2.5rem;
        @include pointer;
        img {
          border-radius: 10%;
        }
      }
      .nav-pagetitle {
        font-family: NothingYouCouldDo, cursive;
        color:#0A8FBD;
        font-weight: 800;
        font-size: 1.75rem;
        padding-left: 1rem;
        align-self: center;
      }
      .nav-link {
        &:hover,
        &:focus {
          @include pointer;
          color: white;
          font-size: 1.1rem;
        }
      }
    }
  }

  </style>
