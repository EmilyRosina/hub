export default {
  set_width (state, width) {
    state.width = width
  },
  set_breakpoint (state, breakpoint) {
    state.breakpoint = breakpoint
  },
  set_treehouse_data (state, payload) {
    state.treehouse.badges = payload.badges
    let points = []
    Object.keys(payload.points).forEach(key => {
      if (payload.points[key] !== 0) {
        points.push({ skill: key, points: payload.points[key] })
      }
    })
    state.treehouse.points = points
  }
}
