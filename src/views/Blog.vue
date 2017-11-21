<template>
  <sl-container id="blog" fullWidth fullHeight>
    <topNav></topNav>
    <sl-row noGutters :flexGrow="1">
      <sl-col>
        <sl-container fullWidth fullHeight>
          <sl-row noGutters :flexGrow="1">
            <sl-col>2nd col - 1st row</sl-col>
          </sl-row>
          <sl-row noGutters :flexGrow="6">
            <sl-col>
              <p>examples i like...</p>
              <img src="https://reflect.io/assets/blog/github-screenshot-350443090d37bcbe5d838673f90149df0f1defdad08be88eb16438901411003c.png"/>
              <img src="https://purecss.io/img/layouts/blog@2x.jpg"/>
              <img src="https://1.bp.blogspot.com/-paSFxN2dtwk/WLyUzSFLjtI/AAAAAAAAAEA/03kct5t9JMMN7KiPntcCe6VoLHfBGtGLwCLcB/s1600/en_Notable.jpg"/>
            </sl-col>
          </sl-row>
        </sl-container>
      </sl-col>
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

</style>
