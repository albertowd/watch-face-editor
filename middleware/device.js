export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) { // ignore if called from hot module replacement
    return
  }

  if (route.query.device) {
    // Load device here
    // Reset all states
    const device = {}
    store.commit('device/device', device)
  }
}
