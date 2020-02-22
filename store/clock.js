export const state = () => ({
})

export const mutations = {
  clock (state, clock) {
    for (const prop in clock) {
      state[prop] = clock[prop]
    }
  }
}
