<template>
  <sl-container id="welcome" fullWidth fullHeight class="background-img">
    <sl-row noGutters :flexGrow="1">
      <sl-col flex align="center" col="12" md="6">
        <div class="avatar"></div>
        <div class="intro-text">
          <h4 class="intro-text__name">Emily Rosina Carey</h4>
          <h5 class="intro-text__role">Front-end Developer</h5>
        </div>
        <sl-row>
          <a v-for="(link, key) in socialLinks" :key="key" :href="link.href" class="social-link">
            <icon :name="link.icon" scale="1.5"></icon>
          </a>
        </sl-row>
      </sl-col>
      <sl-col flex align="center" col="12" md="6">

        <div noGutters v-for="(repo, key) in repos" :key="key" class="repo">
          <sl-row class="repo__title-bar" noGutters>
            <h2 class="repo__title">{{ repo.title }}</h2>
            <sl-row noGutters class="repo__links">
              <span class="repo__link repo__link--wip" v-if="repo.wip">WIP</span>
              <a class="repo__link" :href="repo.links.github"><icon name="github" alt="source code" scale="2"></icon></a>
              <a class="repo__link" :href="repo.links.live"><icon name="globe" alt="live site" scale="2"></icon></a>
            </sl-row>
          </sl-row>
          <p class="repo__description">{{ repo.description }}</p>
          <p>
            <span v-for="(tag, index) in repo.tags" :key="index" class="tag">{{ tag }}</span>
          </p>
        </div>

      </sl-col>
    </sl-row>
  </sl-container>
</template>

<script>
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
        },
        repos: {
          pokedex: {
            title: 'Pokedex',
            description: `Mini web app to search through 1st gen Pokemon and show details, cards and sprites for selected/random pokemon.`,
            links: {
              github: 'https://github.com/EmilyRosina/pokedex',
              live: 'https://emilyrosina.github.io/pokedex'
            },
            tags: [
              'vue',
              'sass',
              'api',
              'github pages'
            ],
            wip: true
          },
          userStoryBuilder: {
            title: 'User Story Builder',
            description: `Simple web app helping to list data structures when building a product.
            Then using those structures to create user stories.`,
            links: {
              github: 'https://github.com/EmilyRosina/user-story-builder',
              live: 'https://emilyrosina.github.io/user-story-builder/'
            },
            tags: [
              'vue',
              'sass',
              'github pages'
            ],
            wip: true
          },
          shoelaceVue: {
            title: 'Shoelace-Vue',
            description: `My attempt at creating a vue component library for shoelace components.`,
            links: {
              github: 'https://github.com/EmilyRosina/shoelace-vue',
              live: 'https://emilyrosina.github.io/shoelace-vue'
            },
            tags: [
              'vue',
              'sass',
              'vue plugin',
              'lib',
              'npm registry'
            ],
            wip: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .background-img {
    background: #02050F;
    background-image: url('../assets/images/background_galaxy.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .avatar {
    background-image: url('../assets/images/avatar.png');
    background-size: 100%;
    background-repeat: no-repeat;
    height: 15em;
    width: 15em;
    border-radius: 50%;
    transform: rotate(12deg);
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
      box-shadow: 1px 1px 10px white;
    }

  }
  .fa-icon {
    color: rgba(255,255,255, 0.5);
    transition: 0.5s ease;
    &:hover,
    &:focus,
    &:active {
      color: #ff7c3a;
    }
  }
  .social-link {
    padding: 0.5em 0.75em;
  }
  .repo {
    transition: 0.5s ease;
    background: rgba(0,0,0,0.5);
    padding: 1em;
    width: 80%;
    cursor: default;
    color: white;
    &:not(:last-child) {
      margin-bottom: 1em;
    }
    &:hover,
    &:focus {
      background: rgba(0,0,0,0.75);
      padding: 2em 1em;
    }
    &__title-bar {
      justify-content: space-between;
      align-items: center;
    }
    &__links {
      display: flex;
      align-items: center;
    }
    &__link {
      display: flex;
      &:not(:first-child) {
        padding-left: 0.5em;
      }
      &--wip {
        color: #00c180;
        font-size: 0.8rem;
        line-height: 1;
        font-weight: 600;
        align-self: flex-start;
        padding-top: 0.25em;
      }
    }
    &__description {
      padding: 0.5em;
      color: #ccc;
      font-weight: 300;
    }
  }

  .tag {
    padding: 0.1em 0.75em;
    border-radius: 0.25em;
    background: transparentize(lightseagreen, 0.5);
    text-transform: uppercase;
    font-size: 0.7em;
    &:not(:last-child) {
      margin-right: 0.4em;
    }
  }
</style>
