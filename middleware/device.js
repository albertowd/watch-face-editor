import GTS from './devices/gts.json'
import MB4 from './devices/mb4.json'

export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) { // ignore if called from hot module replacement
    return
  }

  if (route.path === '/') {
    return redirect('/device')
  }

  if (!store.state.device.alias && !route.query.device) {
    store.commit('device/device', GTS)
  } else if (route.query.device && route.query.device !== store.state.device.alias) {
    if (route.query.device.toLowerCase() === 'mb4') {
      store.commit('device/device', MB4)
    } else {
      store.commit('device/device', GTS)
    }
  }
}
