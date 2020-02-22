export const state = () => ({
  image: null,
  x: 0,
  y: 0
})

export const mutations = {
  background (state, background) {
    for (const prop in background) {
      state[prop] = background[prop]
    }
  }
}
