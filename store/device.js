export const state = () => ({
  alias: '',
  features: {
    background: false,
    date: {
      monthAndDay: false,
      weekDay: false
    },
    status: {
      alarm: false,
      bluetooth: false,
      dnd: false,
      lock: false
    },
    time: true
  },
  model: 'Unknown',
  packLimit: 1536,
  preview: {
    screen: {
      x: 62,
      y: 223
    },
    size: {
      height: 888,
      width: 502
    },
    zoom: 0.5
  },
  size: {
    height: 442,
    width: 348
  },
  vendor: ''
})

export const mutations = {
  device (state, device) {
    for (const prop in device) {
      state[prop] = device[prop]
    }
  },
  previewZoom (state, newValue) {
    state.preview.zoom = newValue
  }
}
