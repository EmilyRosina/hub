<template>
  <sl-container id="welcome" fullWidth fullHeight>
    <sl-row noGutters :flexGrow="1" class="above" :style="{background: `url(${imgPaths.bg.dev})`}">
      <sl-col flex align="center">
        <p class="page-title">Welcome</p>
      </sl-col>
    </sl-row>
    <sl-row noGutters :flexGrow="1" :class="['middle', {'mobile': isMobile}]">
      <icon
        v-for="link in links"
        :key="link.key"
        class="link icon"
        scale="3"
        :name="link.icon"
        :style="link.style"
        @mouseover.native="setMessageText(link.key)"
        @mouseout.native="hideMessageText()"></icon>
    </sl-row>
    <sl-row noGutters :flexGrow="1" class="below">
      <sl-col flex align="center" :class="[{'hidden': !message.show}]">
        <p class="link-message">{{ linkMessage }}</p>
        <img :src="imgPaths.doodle.dev" />
      </sl-col>
    </sl-row>
  </sl-container>
</template>

<script>
  import slContainer from 'shoelace/container'
  import slRow from 'shoelace/row'
  import slCol from 'shoelace/col'
  import sidebar from '@/components/layout/sidebar'
  import topNav from '@/components/layout/nav'
  import bgImg from '@/assets/images/aurorabg.jpg'
  import doodleImg from '@/assets/images/coding.png'

  export default {
    name: 'Welcome',
    data () {
      return {
        message: {
          show: false,
          text: ''
        },
        imgPaths: {
          bg: {
            web: 'https://emilyrosina.github.io/hub/static/img/aurora.858f10c.jpg',
            dev: bgImg
          },
          doodle: {
            web: 'https://emilyrosina.github.io/hub/static/img/coding.5e93ba7.png',
            dev: doodleImg
          }
        },
        linkMessages: {
          blog: 'where i collect all my ramblings',
          about: 'learn more about... moi!',
          inception: 'wanna know more about how this site?',
          courses: 'who needs a degree in CS?!'
        },
        links: [
          {
            key: 'blog',
            icon: 'quote-left',
            style: ''
          },
          {
            key: 'about',
            icon: 'star',
            style: ''
          },
          {
            key: 'inception',
            icon: 'puzzle-piece',
            style: ''
          },
          {
            key: 'courses',
            icon: 'book',
            style: ''
          }
        ]
      }
    },
    components: {
      slContainer,
      slRow,
      slCol,
      sidebar,
      topNav
    },
    methods: {
      setMessageText (link) {
        this.message.show = true
        this.message.text = this.linkMessages[link]
      },
      hideMessageText () {
        this.message.show = false
        this.message.text = undefined
      }
    },
    computed: {
      linkMessage () {
        return this.message.show ? this.message.text : undefined
      },
      isMobile () {
        return ['xs', 'sm'].includes(this.$store.getters.breakpoint)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .above,
  .below {
    height: 50vh;
  }
  .above {
    // background: url('../assets/images/aurorabg.png');
    background-size: cover;
    box-shadow: 0 4px 60px -2px rgba(0, 0, 0, 0.35), 0 4px 10px -2px rgba(0, 0, 0, 0.35);
    .page-title {
      color: white;
      font-size: 9em;
      text-align: center;
      text-shadow: 2px 4px 10px rgba(0, 0, 0, 0.5);
    }
  }
  .middle {
    &.mobile {
      // top: calc(50vh - 3.5em);
      .link.icon {
        // width: 1.5em;
        // height: 1.5em;
        margin: 0 0.75rem;
      }
    }
    top: calc(50vh - 2.75em);
    position: absolute;
    width: 100%;
    justify-content: center;
    .link {
      margin: 0 1.5rem;
      &.icon {
        box-sizing: content-box;
        z-index: 5;
        padding: 1.25rem;
        background-image: linear-gradient(#00436f, #1b203d);
        clip-path: circle(2.75rem at 2.75rem 2.75rem);
        width: 1em;
        height: 1em;
        color: #039170;
        transition: 0.1s;
        &:hover {
          width: 1.1em;
          height: 1.1em;
          clip-path: circle(2.9rem at 2.9rem 2.9rem);
          margin: -0.15rem 1.35rem;
        }
      }
      // &.icon-wrapper {
      //   padding: 0.5rem;
      //   background-color: #1b203d;
      //   background-image: linear-gradient(#00436f, #1b203d);
      //   border-radius: 50%;
      //   width: 5.5rem;
      //   height: 5.5rem;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      // }
    }
  }
  .below {
    .col {
      opacity: 1;
      font-size: 1rem;
      &.hidden {
        img {
          opacity: 1;
          width: 25rem;
        }
      }
      .link-message {
        font-size: 3rem;
        color:#00436f;
        font-family: NothingYouCouldDo, cursive;
        max-width: 30%;
        text-align: center;
      }
      img {
        transition: 0.5s;
        width: 15rem;
        opacity: 0.2;
        position: absolute;
      }
    }

  }
</style>
