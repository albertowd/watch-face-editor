import defaultGTS from './defaults/gts'
import functionsGTS from './functions/gts'

const GTS = {
  alias: 'gts',
  default: defaultGTS,
  dimensions: {
    height: 442,
    width: 348
  },
  features: {
    Activity: true,
    Animation: true,
    Battery: true,
    Clock: true,
    Date: true,
    Status: true,
    TIme: true,
    Weather: false
  },
  functions: functionsGTS,
  name: 'Amazfit GTS',
  packLimit: 400,
  preview: {
    dimensions: {
      height: 888,
      width: 502
    },
    offset: {
      bottom: 223,
      left: 62,
      right: 92,
      top: 223
    },
    zoom: 0.5
  }
}

export default GTS
