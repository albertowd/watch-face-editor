export const state = () => ({
  allowed: true,
  image: null,
  x: 0,
  y: 0
})

export const mutations = {
  changeImage (state, image) {
    state.image = image
  },
  changeX (state, x) {
    state.x = x
  },
  changeY (state, y) {
    state.y = y
  },
  toggle (state, allowed) {
    if (undefined !== allowed) {
      state.allowed = allowed
    } else {
      state.allowed = !state.allowed
    }
  }
}
