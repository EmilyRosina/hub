import breakpoints from './utility/breakpoints'
// import actions from './actions'
// import mutations from './mutations'

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
  }
  // get_breakpoint_byWidth (state) => {(width) => {
  //   return width
  // }
}
