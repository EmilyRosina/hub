import breakpoints from './utility/_breakpoints'

export default {
  breakpoint (state) {
    let breakpoint = ''
    do {
      for (let bp in breakpoints) {
        let min = breakpoints[bp][0]
        let max = breakpoints[bp][1]
        if (state.width >= min && state.width <= max) {
          breakpoint = bp
        }
      }
    } while (breakpoint === '')
    return breakpoint
  },
  api () {
    return {
      treehouse: 'https://teamtreehouse.com/emilycarey.json'
    }
  }
}
