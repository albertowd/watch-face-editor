export const state = () => ({
  enabled: false,
  image: null,
  x: 50,
  y: 0
})

export const mutations = {
  changeImage (state, image) {
    state.image = image
    state.enabled = true
  },
  changeX (state, x) {
    state.x = x
  },
  changeY (state, y) {
    state.y = y
  },
  toggle (state, enabled) {
    if (!enabled) {
      state.image = null
    }
    state.enabled = enabled
  }
}
