export const state = () => ({
})

export const mutations = {
  animation (state, animation) {
    for (const prop in animation) {
      state[prop] = animation[prop]
    }
  }
}
