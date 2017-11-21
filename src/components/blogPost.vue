<template>
  <sl-container class="blog-post" v-model="post" fluid>
    <sl-row noGutters noWrap class="header-row">
      <sl-col flex align="start" noGutters>
        <icon :name="post.icon" class="icon" scale="5"></icon>
      </sl-col>
      <sl-col flex grow="1" justify="start">
        <h2>{{ post.title }}</h2>
      </sl-col>
    </sl-row>
    <sl-row flex noGutters class="info-row">
      <div class="tags">
        <span v-for="tag in post.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <p style="text-align: right;" class="timestamp">{{ post.id | moment('dddd, DD MMM YYYY - HH:MM') }}</p>
    </sl-row>

    <sl-row v-show="false" class="content-row">
      <sl-col>
        <p v-for="(p, index) in post.content" :key="index">
          {{ p }}
        </p>
      </sl-col>
    </sl-row>
  </sl-container>
</template>

<script>
  import slContainer from 'shoelace/container'
  import slRow from 'shoelace/row'
  import slCol from 'shoelace/col'

  export default {
    components: {
      slContainer,
      slRow,
      slCol
    },
    props: {
      post: null
    }
  }
</script>

<style lang="scss" scoped>
  .blog-post {
    background: #eee;
    margin: 1rem 0;
    padding: 1rem;
    box-shadow: -3px -3px 8px rgba(0, 0, 0, 0.25);
    .header-row {
      .icon {
        background: navy;
        color: aquamarine;
        width: 1em; // to match height
        padding: 0.05em;
      }
    }
    .info-row {
      justify-content: space-between;
      margin-top: 0.5em;
      .tags {
        .tag {
          display: inline-flex;
          text-transform: uppercase;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.05rem 0.7rem 0.1rem;
          background: aquamarine;
          margin: 0 0.25rem;
          border-radius: 0.75rem;
          line-height: 1.25;
          &:first-of-type {
            margin-left: 0;
          }
          &:last-of-type {
            margin-right: 0;
          }
        }
      }
      .timestamp {
        text-transform: uppercase;
        font-size: 0.8rem;
      }
    }
  }
  p {
    margin: 0;
  }
</style>
