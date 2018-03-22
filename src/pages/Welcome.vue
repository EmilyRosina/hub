<template>
  <sl-container id="welcome" fullWidth fullHeight class="background-img">
    <sl-row noGutters :flexGrow="1">
      <sl-col flex align="center" col="12" md="6" justify="start" class="column--avatar">
        <div class="avatar"></div>
        <div class="intro-text">
          <h4 class="intro-text__name">Emily Rosina Carey</h4>
          <h5 class="intro-text__role">Front-end Developer</h5>
        </div>
        <sl-row class="social-links">
          <a v-for="(link, key) in socialLinks" :key="key" :href="link.href" class="social-link">
            <icon :name="link.icon" scale="1.5"></icon>
          </a>
        </sl-row>
      </sl-col>
      <sl-col flex align="center" col="12" md="6" class="column--repos">
        <repo v-for="(repo, key) in repos" :key="key" :repo="repo" />
      </sl-col>
    </sl-row>
  </sl-container>
</template>

<script>
  import repo from '@/components/Repo'

  export default {
    name: 'Welcome',
    data () {
      return {
        socialLinks: {
          linkedin: {
            icon: 'linkedin',
            href: 'https://www.linkedin.com/in/emilyrosinacarey/'
          },
          github: {
            icon: 'github',
            href: 'https://github.com/EmilyRosina'
          },
          email: {
            icon: 'envelope',
            href: 'mailto:emilyrc.jobs@gmail.com'
          }
        }
      }
    },
    components: {
      repo
    },
    computed: {
      repos () {
        return this.$store.state.repos
      }
    }
  }
</script>

<style lang="scss" scoped>
  .column {
    &--avatar {
      padding-top: 25vh;
      @media screen and (max-width: 767px) {
        padding-top: 12vw;
      }
    }
    &--repos {
      padding: 3em 0;
    }
  }
  .avatar {
    @media screen and (max-width: 700px) {
      height: 8em;
      width: 8em;
    }
  }
  .intro-text {
    padding-top: 1em;
    color: deepskyblue;
    text-align: center;
    &__name {
      font-family: "Dancing Script";
      font-size: 2rem;
      background: transparentize(black, 0.25);
      padding: 0.25em 1em 0.45em;
      clip-path: polygon(
        5% 8%,
        100% 1%,
        92% 95%,
        7% 89%
      );
    }
    &__role {
      padding: 0.5em;
      margin-top: -1.25em;
      font-size: 0.8rem;
      color: #222;
      text-transform: uppercase;
      font-weight: 700;
      background:#00c180;
      clip-path: polygon(
        0% 0%,
        100% 1%,
        92% 95%,
        7% 85%
      );
    }
  }
  .social-links {
    @media screen and (max-width: 767px) {
      margin-bottom: 4em;
    }
  }
  .social-link {
    padding: 0.5em 0.75em;
  }
</style>
