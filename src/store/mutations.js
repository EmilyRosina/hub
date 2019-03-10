export default {
  SET_WIDTH(state, width) {
    state.width = width
  },

  SET_BREAKPOINT(state, breakpoint) {
    state.breakpoint = breakpoint
  },

  SET_TREEHOUSE_DATA(state, { badges, points }) {
    const totalPoints = points.total
    state.treehouse = {
      badges,
      totalPoints,
      points: {},
    }
    delete points.total
    for (const [key, value] of Object.entries(points)) {
      state.treehouse.points[key] = {
        label: key,
        points: value,
        get learned() {
          return value !== 0
        },
        get percentage() {
          return Number((value / totalPoints).toFixed(2))
        },
      }
    }
  },

  OPEN_MODAL(state, headerText) {
    state.modal.header = headerText
    state.modal.show = true
  },

  CLOSE_MODAL(state) {
    state.modal.header = null
    state.modal.show = false
  },
}
