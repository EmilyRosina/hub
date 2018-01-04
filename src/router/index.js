import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import Blog from '@/pages/Blog'
import WIP from '@/pages/WIP'
import Skills from '@/pages/Skills'
import About from '@/pages/About'

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
    },
    {
      path: '/wip',
      name: `WIP`,
      component: WIP
    },
    {
      path: '/about',
      name: `About`,
      component: About
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    }
  ]
})
