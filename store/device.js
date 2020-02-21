export const state = () => ({
  model: 'GTS',
  features: {
    background: true,
    status: {
      alarm: true,
      bluetooth: true,
      dnd: true,
      lock: true
    }
  },
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
  changeDevice (state, device) {
    for (const prop in device) {
      state[prop] = device[prop]
    }
  },
  changePreviewZoom (state, newValue) {
    state.preview.zoom = newValue
  }
}
