export const state = () => ({
  features: {
    background: true,
    date: {
      monthAndDay: false,
      weekDay: true
    },
    status: {
      alarm: true,
      bluetooth: true,
      dnd: true,
      lock: true
    }
  },
  model: 'GTS',
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
  vendor: 'Amazfit'
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
