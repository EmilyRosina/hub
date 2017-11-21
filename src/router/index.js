import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Blog from '@/views/Blog'

Vue.use(Router)

export default new Router({
  // doesn't work for github pages... because stupid!
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
