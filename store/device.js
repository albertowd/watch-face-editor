export const state = () => ({})

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
