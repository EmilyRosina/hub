/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import Vue from 'vue'

// --[ my own components ]-- //
  /* shoelace */
    import shoelaceStyles from 'shoelace-css/dist/shoelace.css'
    import slContainer from '@/components/shoelace/container'
    import slRow from '@/components/shoelace/row'
    import slCol from '@/components/shoelace/col'

// --[ vendor components ]-- //
  /* vue-awesome */
    import icon from 'vue-awesome/components/Icon'
    import vueAwesomeicons from 'vue-awesome/icons'

// --[ register vendor components ]-- //
  /* vue-awesome */
    Vue.component('icon', icon)

// --[ register my own shoelace components ]-- //
  /* shoelace */
    Vue.component('sl-container', slContainer)
    Vue.component('sl-row', slRow)
    Vue.component('sl-col', slCol)
