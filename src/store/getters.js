import { breakpoints } from '@/utils'

export default {
  breakpoint(state) {
    let breakpoint = ''
    Object.entries(breakpoints).forEach(([bp, [min, max]]) => {
      if (state.width >= min && state.width <= max) breakpoint = bp
    })
    return breakpoint
  },
}
