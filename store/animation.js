export const state = () => ({
  allowed: false
})

export const mutations = {
  animation (state, animation) {
    for (const prop in animation) {
      state[prop] = animation[prop]
    }
  }
}
