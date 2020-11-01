<template>
  <div
    noGutters
    class="repo">
    <sl-row
      class="repo__title-bar"
      noGutters>
      <h2 class="repo__title">{{ repo.title }}</h2>
      <sl-row
        noGutters
        class="repo__links">
        <span
          v-if="repo.wip"
          class="repo__link repo__link--wip">
          WIP
        </span>
        <a
          v-if="repo.links.github"
          class="repo__link"
          :href="repo.links.github"
          target="_blank">
          <icon name="brands/github" alt="source code" scale="2"/>
        </a>
        <a
          v-if="repo.links.live"
          class="repo__link"
          :href="repo.links.live"
          target="_blank">
          <icon name="globe-americas" alt="live site" scale="2"/>
        </a>
      </sl-row>
    </sl-row>
    <p class="repo__description">{{ repo.description }}</p>
    <p>
      <span
        v-for="(tag, index) in repo.tags"
        :key="index"
        class="tag">
        {{ tag }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
      align-items: flex-start;
      flex-wrap: nowrap;
    }

    &__links {
      justify-content: flex-end;
      flex: 1 0 auto;

      @extend %flex;
    }

    &__link {
       @extend %flex;

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
    display: inline-block;

    &:not(:last-child) {
      margin-right: 0.4em;
    }
  }
</style>
