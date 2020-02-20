export const state = () => ({
  dimensions: {
    height: 442,
    width: 348
  },
  model: 'GTS',
  packLimit: 1536,
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
  },
  toggleFeature (state, feature) {
    if (feature in state.features) {
      state.features = !state.features
    } else {
      state.features = true
    }
  }
}
