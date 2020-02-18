import Vue from 'vue'

import GTS from './GTS'

const DeviceLoader = {
  install (Vue, options) {
    Vue.prototype.$GTS = GTS
  }
}

Vue.use(DeviceLoader)
