const defaultBackground = {
  enabled: false,
  image: null,
  x: 0,
  y: 0
}

export const state = () => {
  return defaultBackground
}

export const mutations = {
  changeImage (state, image) {
    state.image = image
    state.enabled = true
  },
  changePosition (state, position) {
    state.x = position.x
    state.y = position.y
  },
  changeX (state, x) {
    state.x = x
  },
  changeY (state, y) {
    state.y = y
  },
  reset (state) {
    for (const prop in defaultBackground) {
      state[prop] = defaultBackground[prop]
    }
  },
  toggle (state, enabled) {
    if (!enabled) {
      state.image = null
    }
    state.enabled = enabled
  }
}
