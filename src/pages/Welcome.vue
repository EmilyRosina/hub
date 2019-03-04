<template>
  <sl-container
    id="welcome"
    fullWidth
    fullHeight
    class="background-img"
    v-lazy.background-image="bgUrl">
    <sl-row
      noGutters
      :flexGrow="1">
      <sl-col
        fullHeight
        flex
        align="center"
        justify="center"
        col="12"
        md="5"
        lg="6"
        class="column--avatar">
        <div class="avatar" v-lazy.background-image="avatarUrl" />
        <div class="intro-text">
          <h4 class="intro-text__name">Emily Rosina Carey</h4>
          <h5 class="intro-text__role">Front-end Developer</h5>
          <h5 class="intro-text__contributor">
            <span class="intro-text__contributor__text">Open Source contributor to</span>
            <span class="intro-text__contributor__count">{{ noOfContributions }}</span>
            <p class="intro-text__contributor__wrapper">
              <a
                v-for="(contribution, key) in contributions" :key="key"
                :href="contribution.href"
                target="_blank">
                <img :src="contribution.icon" class="intro-text__contributor__icon"/></a>
            </p>
          </h5>
        </div>
        <sl-row class="social-links">
          <a
            v-for="({ href, target, icon}, key) in socialLinks"
            :key="key"
            :href="href"
            class="social-link"
            :target="target">
            <icon :name="icon" scale="1.5"></icon>
          </a>
        </sl-row>
      </sl-col>
      <sl-col flex align="center" col="12" md="7" lg="6" class="column--repos">
        <Repo v-for="(repo, key) in repos" :key="key" :repo="repo" />
      </sl-col>
    </sl-row>
  </sl-container>
</template>

<script>
import Repo from '@/components/Repo'
import bgUrl from '@/assets/images/background_galaxy.png'
import avatarUrl from '@/assets/images/avatar.png'
import softwareDailyIcon from '@/assets/images/softwaredaily.png'
import vueAwesomeIcon from '@/assets/images/vueawesome.png'

export default {
  name: 'Welcome',
  data() {
    return {
      socialLinks: {
        linkedin: {
          icon: 'brands/linkedin',
          href: 'https://www.linkedin.com/in/emilyrosinacarey/',
          target: '_blank',
        },
        github: {
          icon: 'brands/github',
          href: 'https://github.com/EmilyRosina',
          target: '_blank',
        },
        email: {
          icon: 'envelope',
          href: 'mailto:emilyrc.jobs@gmail.com',
        },
      },
      contributions: {
        softwareDaily: {
          icon: softwareDailyIcon,
          href: 'https://github.com/SoftwareEngineeringDaily/sedaily-front-end',
        },
        vueAwesome: {
          icon: vueAwesomeIcon,
          href: 'https://github.com/Justineo/vue-awesome',
        },
      },
      avatarUrl,
      bgUrl,
    }
  },
  components: {
    Repo,
  },
  computed: {
    repos() {
      return this.$store.state.repos
    },
    noOfContributions() {
      const { length } = Object.keys(this.contributions)
      return length === 1
        ? '1 repository'
        : `${length} repositories`;
    },
  },
}
</script>

<style lang="scss" scoped>
  .column {
    &--avatar {
      position: fixed;

      @media screen and (max-width: 767px) {
        padding-top: 12vw;
        position: unset;
      }
    }
    &--repos {
      padding: 3em 0;
      margin-left: auto;

      @media screen and (max-width: 767px) {
        margin: unset;
      }
    }
  }
  .avatar {
    @media screen and (max-width: 700px) {
      height: 8em;
      width: 8em;
    }
  }
  .intro-text {
    color: deepskyblue;
    padding-top: 1em;
    text-align: center;

    &__name {
      background: transparentize(black, 0.25);
      clip-path: polygon(
        5% 8%,
        100% 1%,
        92% 95%,
        7% 89%
      );
      font-family: "Dancing Script";
      font-size: 2rem;
      padding: 0.25em 1em 0.45em;
    }

    &__role {
      background:#00c180;
      clip-path: polygon(
        0% 0%,
        100% 1%,
        97% 82%,
        2% 97%
      );
      color: #222;
      font-size: 0.8rem;
      font-weight: 700;
      margin-top: -1.25em;
      padding: 0.5em;
      text-transform: uppercase;
    }

    &__contributor {
      background: transparentize(black, 0.5);
      padding: 1em 0.5em;
      border-radius: 2em;
      font-size: 0.8rem;

      &:hover &__wrapper {
        height: 5em;
      }

      &:hover &__icon {
        height: 50px;
        width: 50px;
        &:hover {
          transition: unset;
          opacity: 1;
        }
      }

      &__text {
        color: #ccc;
        font-weight: 400;
      }

      &__count {
        background: transparentize(#ccc, 0.85);
        border-radius: 1em;
        padding: 0 0.75em;
        color: skyblue;
      }

      &__wrapper {
        transition: 0.5s ease all;
        margin: 0;
        height: 0;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &__icon {
        transition: 0.5s ease all;
        height: 0px;
        width: 0px;
        border-radius: 50%;
        margin: 0.5em;
        opacity: 0.7;
      }
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
