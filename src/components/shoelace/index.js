import Vue from 'vue'

/* eslint-disable no-unused-vars */
import shoelaceStyles from 'shoelace-css/dist/shoelace.css'

import slAlert from './alert'
import slBadge from './badge'
import slBadgeLink from './badgeLink'
import slButton from './button'
import slButtonLink from './buttonLink'
import slCol from './col'
import slContainer from './container'
import slRow from './row'

/* eslint-disable no-multi-spaces */
//   ❌✔️ = completion status    //
const components = [
  slAlert,        // ❌
  slBadge,        // ❌
  slBadgeLink,    // ❌
  slButton,       // ❌
  slButtonLink,   // ❌
  slCol,          // ✔️
  slContainer,    // ✔️
  slRow           // ✔️
]

components.forEach(component => {
  Vue.component(component.name, component)
})
