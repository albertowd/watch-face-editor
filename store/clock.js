export const state = () => ({
  allowed: false
})

export const mutations = {
  clock (state, clock) {
    for (const prop in clock) {
      state[prop] = clock[prop]
    }
  }
}
