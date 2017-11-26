<template>
  <sl-container id="blog" fullWidth fullHeight class="dark-bg">
    <topNav></topNav>
    <sl-row noGutters :flexGrow="1">
      <template v-if="['xs', 'sm'].includes(breakpoint)">
        <sl-col>
          <sl-container fullWidth fullHeight>
            <sl-row noGutters>
              <blog-post v-for="post in blogPosts" :key="post.id" :post="post"></blog-post>
            </sl-row>
          </sl-container>
        </sl-col>
      </template>
      <template v-else>
        <sl-col offset="2" col="8">
          <sl-container fullWidth fullHeight>
            <sl-row noGutters>
              <blog-post v-for="post in blogPosts" :key="post.id" :post="post"></blog-post>
            </sl-row>
          </sl-container>
        </sl-col>
      </template>
    </sl-row>
  </sl-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import sidebar from '@/components/layout/sidebar'
  import topNav from '@/components/layout/nav'
  import blogPost from '@/components/blogPost'

  export default {
    name: 'Welcome',
    components: {
      sidebar,
      topNav,
      blogPost
    },
    computed: {
      ...mapGetters(['breakpoint']),
      blogPosts () {
        return this.$store.state.blogPosts
      }
    }
  }
</script>

<style lang="scss" scoped>
  .dark-bg {
    background-color: #0c1540;
  }
</style>
